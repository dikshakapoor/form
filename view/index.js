
import {KEY_CODE_TO_DIRECTION} from "../mario.constants"
const container = document.getElementById("container");
const gridTable = document.getElementById("gridTable");
console.log(container);

document.addEventListener('keypress', function(event){alert(event.keyCode+" ")});

export function change_mario_direction(event){
    let x = event.keyCode;
    let direction = KEY_CODE_TO_DIRECTION[x];
    // console.log("KEY PRESS : "+direction+" OLD DIRECTION : "+mario.direction)
    console.log("KEY PRESS : "+direction)
    // mario.direction = direction;
}

// gridTable.addEventListener("keypress",change_mario_direction)



export function makeRowsFromGrid(grid,mario) {

    
    gridTable.innerHTML=""

   

    for(let i = 0;i<grid.length;i++){
        let row = document.createElement("tr")
        
        for(let j =0;j<grid[0].length;j++){
            let cell = document.createElement("td")
            let id = "cell_"+i+"_"+j
            cell.id = id
            // console.log("Creating : "+id)
            if(grid[i][j] == "POISON"){
                cell.innerHTML = "P"
            }else if( grid[i][j] == "MUSHROOM"){
                cell.innerHTML = "M"
            }else{
                cell.innerHTML="&nbsp;"
            }
            
            row.append(cell)
        }
        gridTable.append(row)        
    }      
    display_mario(mario)
    };

export function remove_mario(i,j){
    let cell = document.getElementById("cell_"+i+"_"+j)
    cell.innerHTML="&nbsp;"
}

export function display_mario(mario){
    let cell = document.getElementById("cell_"+mario.i+"_"+mario.j)
    cell.innerHTML="~M~"
}