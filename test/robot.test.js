const assert = require('assert');
const robot = require('../robot');
const world = require('../world'); 
const testRobot = robot(0,0,'N');
describe('Robot test', () => {
    it('should return 2', () => {
           assert.equal(1 + 1, 2);
       });
    it('should return 9', () => {
           assert.equal(3 * 3, 9);
       });
   });