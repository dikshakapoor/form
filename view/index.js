
import {KEY_CODE_TO_DIRECTION, MUSHROOM, POISON} from "../mario.constants"

const gridTable = document.getElementById("gridTable");

export const  change_mario_direction = (mario, event) => {
    if (event){
    let x = event.keyCode;
    let direction = KEY_CODE_TO_DIRECTION[x];
    if (!direction) return;
    mario.direction = direction;
    } 
    return null;
}

export function addImage(cell, imageType){
    var img = document.createElement('img'); 
    debugger
    if(imageType === MUSHROOM) {
        img.src = "https://pngimg.com/uploads/mario/mario_PNG75.png"; 
    }
    else if(imageType === POISON){
        img.src = "https://pngimg.com/uploads/poison/poison_PNG61.png";
    }
    else if (imageType === "MARIO"){
        img.src = 'https://pngimg.com/uploads/mario/mario_PNG127.png'; 
    }
    img.style.width = '20px';
    img.style.height = '20px';
    img.style.alignContent = "center";
    cell.appendChild(img);
}

export function makeRowsFromGrid(grid,mario) {
    gridTable.innerHTML=""
    for(let i = 0;i<grid.length;i++){
        let row = document.createElement("tr") 
        for(let j =0;j<grid[0].length;j++){
            let cell = document.createElement("td")
            let id = "cell_"+i+"_"+j
            cell.id = id
            if(grid[i][j] == "POISON"){
                addImage(cell,"POISON",i ,j)

            }else if( grid[i][j] == "MUSHROOM"){
                addImage(cell, "MUSHROOM", i ,j)
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
    cell.innerHTML = ""; // removing already present image if mario enter that block
    addImage(cell,"MARIO",mario.i ,mario.j)
}