import Game from '../modal/game';
import Mario from '../modal/mario';
import {DIRECTION, GAME_STATE} from '../mario.constants';
import {display_mario, makeRowsFromGrid,remove_mario,change_mario_direction, change_game_state} from '../view';
class GameController {

 constructor() {
    this.mario = new Mario(0,0,DIRECTION.UP)
    this.game =  new Game(this.mario) ;
 }

  keyPressEvent = (event) => {    
   return change_mario_direction(this.mario, event)
 }

 onClickEvent = (event) =>{
     change_game_state(this.game, event)
     if(this.game.state === GAME_STATE.IN_PROGRESS) {
         this.play()
     }
 }

  play () {
    makeRowsFromGrid(this.game.grid,this.game.mario)
    change_mario_direction(this.mario)
    const frame = () => {
        if (this.game.state == GAME_STATE.PAUSED){
            alert("Paused")
            clearInterval(id)
        }
        let mario_i_old_loc = this.game.mario.i;
        let mario_j_old_loc = this.game.mario.j;
        this.game.mario.takeStep();
        this.game.compute_new_state()
        if(mario_i_old_loc!== this.game.mario.i || mario_j_old_loc!== this.game.mario.j){
            remove_mario(mario_i_old_loc,mario_j_old_loc)
            display_mario(this.game.mario)
            }
        if(this.game.state == GAME_STATE.END){
            alert("Game over")
            clearInterval(id)
        }else if(this.game.state == GAME_STATE.MARIO_ATE_MUSHROOM) {
            this.game.mario.incrementSpeed();
            let old_mario = this.game.mario;
            this.game = new Game(old_mario)
            makeRowsFromGrid(this.game.grid,this.game.mario)
        }
            }  
    var id = setInterval(frame, 100);
    }
}

export default GameController
