const robot = (x,y,dir,world) => {
    let xPosition = x;
    let yPosition = y;
    let direction = dir;
    let isLost = false;
    let robotworld = world;
    return {
        getXPosition : () => {
            return xPosition;
        },
        setXPosition : (newX) => {
            xPosition = newX;
        },
        getYPosition : () => {
            return yPosition;
        },
        setYPosition : (newY) => {
            yPosition = newY;
        },
        getDirection : () => {
            return direction;
        },
        setDirection : (newDirection) => {
            direction = newDirection;
        },
        losted : () => {
            return isLost;
        },
        setLost : (losted) => {
            isLost = losted;
        },
        rotateRobot: (rot) => {
            switch (rot){
                case 'L':
                    if (this.getDirection() === 'N') {
                        this.setDirection('W');
                    }
                    else if (this.getDirection() === 'E') {
                        this.setDirection('N');
                    }
                    else if (this.getDirection() === 'S') {
                        this.setDirection('E');
                    }
                    else if (this.getDirection() === 'W') {
                        this.setDirection('S');
                    }
                    break;
                case 'R':
                    if (this.getDirection() === 'N') {
                        this.setDirection('E');
                    }
                    else if (this.getDirection() === 'E') {
                        this.setDirection('S');
                    }
                    else if (this.getDirection() === 'S') {
                        this.setDirection('W');
                    }
                    else if (this.getDirection() === 'W') {
                        this.setDirection('N');
                    }
                    break;

            }
        },
        moveRobot : () => {
            switch (direction) {
                case 'N':
                    if (this.getYPosition() +1 > robotworld.getTopY()) return false;
                    this.setYPosition(this.getYPosition()+1);
                    return true;
                case 'E':
                    if (this.getXPosition() +1 > robotworld.getTopX()) return false;
                    this.setXPosition(this.getXPosition()+1);
                    return true;
                case 'S':
                    if (this.getYPosition() -1 < robotworld.getLowY()) return false;
                    this.setYPosition(this.getYPosition()-1);
                    return true;
                case 'W':
                    if (this.getXPosition() -1 < robotworld.getLowX()) return false;
                    this.setXPosition(this.getXPosition()-1);
                    return true;
            }
        }
    }
}
module.exports = robot;