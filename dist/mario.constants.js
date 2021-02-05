export const POISON = "POISON";
export const MUSHROOM = "MUSHROOM";
export const GRID_SIZE = 10;

export const DIRECTION = {
    LEFT : 'LEFT',
    RIGHT: 'RIGHT',
    UP: 'UP',
    DOWN : 'DOWN',
}

export const GAME_STATE = {
    END: 'END',
    IN_PROGRESS: 'IN_PROGRESS',
    MARIO_ATE_MUSHROOM: 'MARIO_ATE_MUSHROOM',
    PAUSED: 'PAUSED'
}

export const KEY_CODE_TO_DIRECTION={
    37: DIRECTION.LEFT,
    38: DIRECTION.UP,
    39: DIRECTION.RIGHT,
    40: DIRECTION.DOWN
}


export const OPPOSITE_DIRECTION_MAP ={
    LEFT : 'RIGHT',
    RIGHT: 'LEFT',
    UP: 'DOWN',
    DOWN : 'UP',
}
