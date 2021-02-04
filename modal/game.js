import Mario from '/mario';
import {GRID_SIZE,MUSHROOM,POISON} from '../mario.constants';

const getRandomCoordinate = () => Math.floor(Math.random()*GRID_SIZE);

class Game {
    constructor() {
        this.mario  = new Mario();
        this.grid = new Array(GRID_SIZE).fill(null).map(()=>Array(GRID_SIZE).fill(null));
        this.poisonCount = GRID_SIZE;
    }

    init(){
        getPoisonCoordinate();
        getMushroomCoordinate();
    }

    refreshGridAndIncreaseSpeed() {
        this.grid =  this.grid = new Array(GRID_SIZE).fill(null).map(()=>Array(GRID_SIZE).fill(null));

    }

    getPoisonCoordinate(){
     for (let i = 0 ; i < this.poisonCount; i++){ //check mario position too
        const  poisonXcoordinate  = getRandomCoordinate();
        const poisonYcoordinate =getRandomCoordinate();
        this.grid[poisonXcoordinate][poisonYcoordinate] = POISON;
     }
    }

    getMushroomCoordinate(){
        const  mushroomXcoordinate  = getRandomCoordinate(); // check mario positon too
        const mushroomYcoordinate =getRandomCoordinate();
        if (this.grid[mushroomXcoordinate][mushroomYcoordinate]=== null) this.grid[mushroomXcoordinate][mushroomYcoordinate] = MUSHROOM;
        else this.getMushroomCoordinate()
    }

}

export default Game;