const assert = require('assert');
const world = require('../world'); 
const testWorld = world(3,5,0,0);
describe('World test', () => {
    it('Top x coordinates: 3', () => {
        assert.equal(testWorld.getTopX(), 3);
    });
    it('Top y coordinates: 5', () => {
        assert.equal(testWorld.getTopY(), 5);
    });
    it('Low x coordinates: 0', () => {
        assert.equal(testWorld.getLowX(), 0);
    });
    it('Low y coordinates: 0', () => {
        assert.equal(testWorld.getLowY(), 0);
    });
});