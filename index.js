// import {makeRows} from './view';
import GameController from './controller/gameController';

const gameController = new GameController();
gameController.play();
document.addEventListener("keyup", gameController.keyPressEvent)
