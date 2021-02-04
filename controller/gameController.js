import Game from '../modal/game';

class GameController {
    constructor(){
        this.game = new Game ;
        this.state = 'IN_PROGRESS';
    }

    init() { 
        this.checkGameState()
    }

    checkGameState() {
        while (this.state !== 'END'){
            
        }
    }

}