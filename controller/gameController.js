import Game from '../modal/game';
import Mario from '../modal/mario';
import {DIRECTION, GAME_STATE} from '../mario.constants';
import {display_mario, makeRowsFromGrid,remove_mario} from '../view';
class GameController {
    constructor(){
        
    }

    init() { 
    }

     play() {
        /// make grid
        let mario = new Mario(0,0,DIRECTION.UP)
        let game =   new Game(mario) ;
        
        makeRowsFromGrid(game.grid,game.mario)
        // loopeada

        
        var id = setInterval(frame, 100);
        function frame(){
            let mario_i_old_loc = game.mario.i;
            let mario_j_old_loc = game.mario.j;
            game.mario.takeStep();
            game.compute_new_state()
            if(game.state == GAME_STATE.END){
                alert("Game over")
                clearInterval(id)
            }else if(game.state == GAME_STATE.MARIO_ATE_MUSHROOM) {
                game.mario.incrementSpeed();
                let old_mario = game.mario;
                game = new Game(old_mario)
                makeRowsFromGrid(game.grid,game.mario)
            }
            remove_mario(mario_i_old_loc,mario_j_old_loc)
            display_mario(game.mario)
        }  
        
    }

}

export default GameController




// import Game from '../modal/game';
// import Mario from '../modal/mario';
// import {DIRECTION, GAME_STATE} from '../mario.constants';
// import {display_mario, makeRowsFromGrid,remove_mario} from '../view';
// class GameController {
//     constructor(){
        
//     }

//     init() { 
//         // this.checkGameState()
//     }

//     // checkGameState() {
//     //     while (this.state !== GAME_STATE.END){
//     //         this.game.mario.takeStep(); // add this in mario
//     //         this.game.marshroomLocation === mario // check the location
//     //     }
//     // }
//      play() {
//         /// make grid
//         debugger;
//         let mario = new Mario(0,0,DIRECTION.UP)
//         let game =   new Game(mario) ;
        
//         makeRowsFromGrid(game.grid,game.mario)
//         // loopeada
//         debugger;
//         while(game.state == GAME_STATE.IN_PROGRESS){
//             let mario_i_old_loc = game.mario.i;
//             let mario_j_old_loc = game.mario.j;
//             game.mario.takeStep();

//             game.compute_new_state()
//             if(game.state == GAME_STATE.END){
//                 alert("Game over")
//             }else if(game.state == GAME_STATE.MARIO_ATE_MUSHROOM) {
//                 game.mario.incrementSpeed();
//                 let old_mario = game.mario;
//                 game = new Game(old_mario)
//                 makeRowsFromGrid(game.grid,game.mario)
//             }
//             remove_mario(mario_i_old_loc,mario_j_old_loc)
//             display_mario(game.mario)
//             setTimeout(function(){console.log("timeout expired") }, game.mario.speed);

//         }
//             /// mario take a steps
//             /// check game state        
//                 /// game end ---> break
//                 /// mushroom khai --> speed bado , grid refresh ,  makeRowsFromGrid    
//             /// display mario   
//             /// key press input check karo
//                 // if yes --> change mario direction to key press

        
//     }

// }

// export default GameController
