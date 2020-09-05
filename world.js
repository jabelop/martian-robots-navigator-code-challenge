const world = (topX,topY,lowX,lowY) => {
    let worldTopX = topX;
    let worldTopY = topY;
    let worldLowX = lowX;
    let worldLowY = lowY;
    
    return {
        getTopX : () => {
            return worldTopX;
        },
        getTopY : () => {
            return worldTopY;
        },
        getLowX : () => {
            return worldLowX;
        },
        getLowY : () => {
            return worldLowY;
        }, 
    }
}

module.exports = world;