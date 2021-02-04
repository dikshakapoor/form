import Mario from './mario';
import {GAME_STATE, GRID_SIZE,MUSHROOM,POISON} from '../mario.constants';

const getRandomCoordinate = () => Math.floor(Math.random()*GRID_SIZE);

class Game {
    constructor(mario) {
        this.mario  = mario
        this.grid = new Array(GRID_SIZE).fill(null).map(()=>Array(GRID_SIZE).fill(null));
        this.poisonCount = 10;
        this.init()
        this.state = GAME_STATE.IN_PROGRESS
        this.max_computes= 100000;
        this.computes = 0
    }

    compute_new_state(){
        // current mario is on a poison
        let grid_value_at_mario = this.grid[this.mario.i][this.mario.j] 
        if(grid_value_at_mario == POISON){
            this.state = GAME_STATE.END
        }else if(grid_value_at_mario == MUSHROOM){
            this.state = GAME_STATE.MARIO_ATE_MUSHROOM
        }else{
            this.state = GAME_STATE.IN_PROGRESS
        }
        // current mario is on a mushroom
        // fail safe 
        this.computes = this.computes+1;
        if(this.computes > this.max_computes){
            this.state = GAME_STATE.END
        }
    }

    init(){
        // this.fillPoisonCoordinate();
        this.fillMushroomCoordinate();
    }

    // refreshGridAndIncreaseSpeed() {
    //      this.grid = new Array(GRID_SIZE).fill(null).map(()=>Array(GRID_SIZE).fill(null));
    //      this.mario.incrementSeed();
    //      this.fillPoisonCoordinate();

    // }

    fillPoisonCoordinate(){
     for (let i = 0 ; i < this.poisonCount; i++){ //check mario position too
        const  poisonXcoordinate  = getRandomCoordinate();
        const poisonYcoordinate =getRandomCoordinate();
        this.grid[poisonXcoordinate][poisonYcoordinate] = POISON;
     }
    }

    fillMushroomCoordinate(){
        const  i  = getRandomCoordinate(); // check mario positon too
        const j = 0;        
        if (this.grid[i][j] == null) this.grid[i][j] = MUSHROOM;
        else this.fillMushroomCoordinate()
        
    }

}
console.log("game")
export default Game;