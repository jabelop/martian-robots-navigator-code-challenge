const assert = require('assert');
const robot = require('../robot');
const world = require('../world');
const testWorld = world(5,3,0,0); 
const testRobot = robot(0,0,'N',testWorld);
describe('Robot test', () => {
    it('rotate L then get direction: W', () => {
        testRobot.rotateRobot('L');
        assert.equal(testRobot.getDirection(), 'W');
    });
    it('move in 0,0 W: false', () => {
        
        assert.equal(testRobot.moveRobot(), false);
    });
    it('get x position: 0', () => {
        assert.equal(testRobot.getXPosition(), 0);
    });
    it('get y position: 0', () => {
        assert.equal(testRobot.getYPosition(), 0);
    });
    it('get direction: ', () => {
        assert.equal(testRobot.getDirection(), 'W');
    });
    it('rotate L then get direction: S', () => {
        testRobot.rotateRobot('L');
        assert.equal(testRobot.getDirection(), 'S');
    });
    it('move in 0,0 S: false', () => {
        
        assert.equal(testRobot.moveRobot(), false);
    });
    it('get x position: 0', () => {
        assert.equal(testRobot.getXPosition(), 0);
    });
    it('get y position: 0', () => {
        assert.equal(testRobot.getYPosition(), 0);
    });
    it('get direction: ', () => {
        assert.equal(testRobot.getDirection(), 'S');
    });
    it('rotate L then get direction: E', () => {
        testRobot.rotateRobot('L');
        assert.equal(testRobot.getDirection(), 'E');
    });
    it('move in 0,0 E: false', () => {
        
        assert.equal(testRobot.moveRobot(), true);
    });
    it('get x position: 1', () => {
        assert.equal(testRobot.getXPosition(), 1);
    });
    it('get y position: 0', () => {
        assert.equal(testRobot.getYPosition(), 0);
    });
    it('get direction: ', () => {
        assert.equal(testRobot.getDirection(), 'E');
    });
    it('rotate L then get direction: N', () => {
        testRobot.rotateRobot('L');
        assert.equal(testRobot.getDirection(), 'N');
    });
    it('move in 1,0 N: false', () => {
        
        assert.equal(testRobot.moveRobot(), true);
    });
    it('get x position: 1', () => {
        assert.equal(testRobot.getXPosition(), 1);
    });
    it('get y position: 1', () => {
        assert.equal(testRobot.getYPosition(), 1);
    });
    it('get direction: ', () => {
        assert.equal(testRobot.getDirection(), 'N');
    });
    it('rotate R then get direction: N', () => {
        testRobot.rotateRobot('R');
        assert.equal(testRobot.getDirection(), 'E');
    });
    it('move in 1,1 N: false', () => {
        
        assert.equal(testRobot.moveRobot(), true);
    });
    it('get x position: 2', () => {
        assert.equal(testRobot.getXPosition(), 2);
    });
    it('get y position: 1', () => {
        assert.equal(testRobot.getYPosition(), 1);
    });
    it('get direction: ', () => {
        assert.equal(testRobot.getDirection(), 'E');
    });
    it('rotate R then get direction: S', () => {
        testRobot.rotateRobot('R');
        assert.equal(testRobot.getDirection(), 'S');
    });
    it('move in 2,1 N: false', () => {
        
        assert.equal(testRobot.moveRobot(), true);
    });
    it('get x position: 2', () => {
        assert.equal(testRobot.getXPosition(), 2);
    });
    it('get y position: 0', () => {
        assert.equal(testRobot.getYPosition(), 0);
    });
    it('get direction: ', () => {
        assert.equal(testRobot.getDirection(), 'S');
    });
});