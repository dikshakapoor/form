class Mario {
    constructor (xCoordinate, yCoordinate , speed , direction){
        this.xCoordinate = xCoordinate;
        this.yCoordinate = yCoordinate;
        this.speed = speed; // inital is 1000ms
        this.direction = direction;
    }

    incrementSeed () {
        this.speed = speed + 100 // speed increase by 100ms 
    }

}

export default Mario