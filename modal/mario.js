import { GRID_SIZE ,OPPOSITE_DIRECTION_MAP,DIRECTION} from "../mario.constants";

class Mario {
    constructor (i =0, j=0 , direction){
        this.i = i;
        this.j = j;
        this.speed = 10; 
        this.direction = direction;
        this.speed_counter = 0;
    }

    incrementSpeed () {
        this.speed = Math.max(this.speed-1,0)
    }

    takeStep(){
        if(this.speed_counter < this.speed){
            this.speed_counter = this.speed_counter+1;
            return;
        }
        this.speed_counter = 0;

        let increment_i = 0;
        let increment_j = 0;

        if(this.direction == DIRECTION.UP )
        {
                increment_i = -1
        }else if(this.direction == DIRECTION.DOWN){
                increment_i= 1

        }else if(this.direction == DIRECTION.LEFT){
                increment_j = -1
        }else{
            increment_j = 1
        }
        let new_i = this.i + increment_i
        let new_j = this.j + increment_j

        if(new_i<0 || new_j<0 || new_i>=GRID_SIZE || new_j>=GRID_SIZE){
            this.direction = OPPOSITE_DIRECTION_MAP[this.direction]
        }else{
            this.i = new_i;
            this.j = new_j;
        }
    }
   

}

export default Mario