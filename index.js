const fs = require('fs'); 
const readline = require('readline'); 
const worldClousure = require('./world');
const robotClousure = require('./robot');

/**
 * process movements for a robot and prints final position
 * @param {*} robot the robot clousure for move
 * @param {*} movements string, the movements for the robot
 */
const processRobotMovements = (robot, movements) => {
    for (index in movements) {
        if (movements[index] === 'F') {
            if (!robot.moveRobot()) {
                console.log(`${robot.getXPosition()} ${robot.getYPosition()} ${robot.getDirection()} LOST`);
                return;
            }
            
        }
        else if (movements[index] === 'L' || movements[index] === 'R') {
            robot.rotateRobot(movements[index]);
        }
        else {
            console.log(`error in movement input ${movements[index]}`);
            return;
        }
    }
    console.log(`${robot.getXPosition()} ${robot.getYPosition()} ${robot.getDirection()}`);
};

/**
 * get an integer input, prints an error if 
 * @param {*} input 
 */
const getIntInput = (input) => {
    try {
        let intInput = parseInt(input);
        return intInput;
    } catch (error) {
        console.log(`error in coordinate input ${input}: ${error}`);
        process.exit(0);
    }
}

const getDirectionInput = (input) => {
    if (!['N','E','S','W'].includes(input)) {
        console.log(`error in direction input ${input}`);
        process.exit(0);
    }
    return input;
}

const main = (fileName) => {
  // create a readable stream from file   
  const file = readline.createInterface({ 
    input: fs.createReadStream(fileName), 
    output: process.stdout, 
    terminal: false
  }); 
  let worldLine = true;
  let robotLinesIndex = 0;
  let world;
  let robot;
  //process file line by line
  file.on('line', (line) => {
    
    if (worldLine) {

        let worldBounds = line.replace(/[^0-9 ]/g, "").split(" ");
        let xBoundWorld = getIntInput(worldBounds[0]);
        let yBoundWorld = getIntInput(worldBounds[1]);

        if (worldBounds.length !== 2 || xBoundWorld > 50 || yBoundWorld > 50) {
            // world x and y can not be greater than 50
            console.log("error: in top right world bounds coordinates");
            process.exit(0);
        }

        world = worldClousure(xBoundWorld, yBoundWorld);
        worldLine = false;
        return;
    }

    robotLinesIndex++;
    
    // process robot movements line
    if (robotLinesIndex % 2 === 0) {

        let movements = line.replace(/[^a-zA-Z0-9 ]/g, "");

        if (movements.length > 100){
          //only 100 movements are allowed
          console.log("error: no more than 100 movements are allowed");
          process.exit(0);
        }
        processRobotMovements(robot,movements);
        return;
    }
    
    //initialize a robot
    let robotInitialState = line.replace(/[^a-zA-Z0-9 ]/g, "").split(" ");
    let xInitialRobot = getIntInput(robotInitialState[0]);
    let yInitialRobot = getIntInput(robotInitialState[1]);

    if (robotInitialState.length !== 3 || xInitialRobot > 50 || yInitialRobot > 50) {
        // world x and y can not be greater than 50
        console.log("error: in initial state robot inputs");
        process.exit(0);
    }

    robot = robotClousure(
              xInitialRobot,
              yInitialRobot,
              getDirectionInput(robotInitialState[2]),
              world
            );

  }); 
};

const args = process.argv;
if (args.length < 3) {
    console.log(`usage ${args[0]} ${args[1]} <input file name>`);
    process.exit(0);
}

main(args[2]);
