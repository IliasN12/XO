function restart(){
    placed = [];
    let cellById = {}

    for (let cell of document.querySelectorAll("td")){
        cell.id = "cell" + akey;
        cellById[cell.id] = cell;
        akey++;
    }
    for (let cell in cellById){
        cellById[cell].innerHTML = '<img src="image/white.png" width="50" height="50">';
    }

    allcells = [];
    for (let arow of tab.rows){
        let rowlist = []
        for (let acol of arow.cells){
            rowlist.push(acol)
        }
        allcells.push(rowlist)
    }
}

function addsrow(){
    let cols = tab.rows[0].cells.length
    let newrow = tab.insertRow();
    for (let i = 0; i < cols; i++) {
        newrow.insertCell();
    }
}
function addscol(){
    for (let row of tab.rows){
        row.insertCell();
    }
}

function winner(X){
    if (X){
        green_score++;
        document.getElementById("greenscore").innerHTML = green_score;
    }
    else{
        red_score++;
        document.getElementById("redscore").innerHTML = red_score;
    }
    restart();
}
function resetCount(row, col){
    therow = row;
    thecol = col;
}

function checkwin(row, col){
    let animg = allcells[row][col].querySelector("img")
    
    let rows = allcells.length;
    let cols = allcells[row].length;

    won = 1
    resetCount(row, col);

/*      up1 = therow-1 >= 0;
        down1 = therow+1 < rows;
        right1 = thecol+1 < cols;
        left1 = thecol-1 >= 0;
*/

    while (therow+1 < rows && animg.src === allcells[therow+1][thecol].querySelector("img").src){
        won++;
        therow++;
    }
    resetCount(row, col);
    while (therow-1 >= 0 && animg.src === allcells[therow-1][thecol].querySelector("img").src){
        won++;
        therow--;
    }
    if (won >= how_in_line){
        winner(X);
    }
    resetCount(row, col);
    won = 1;
    /////////////////////////////////////////////////////////////////////////////////////////////
    while (thecol+1 < cols && animg.src === allcells[therow][thecol+1].querySelector("img").src){
        won++;
        thecol++;
    }
    resetCount(row, col);
    while (thecol-1 >= 0 && animg.src === allcells[therow][thecol-1].querySelector("img").src){
        won++;
        thecol--;
    }
    if (won >= how_in_line){
        winner(X);
    }
    resetCount(row, col);
    won = 1;
    //////////////////////////////////////////////////////////////////////////////////////////////
    while (therow+1 < rows && thecol+1 < cols && animg.src === allcells[therow+1][thecol+1].querySelector("img").src){
        won++;
        therow++;
        thecol++;
    }
    resetCount(row, col);
    while (therow-1 >= 0 && thecol-1 >= 0 && animg.src === allcells[therow-1][thecol-1].querySelector("img").src){
        won++;
        therow--;
        thecol--;
    }
    if (won >= how_in_line){
        winner(X);
    }
    resetCount(row, col);
    won = 1;
    //////////////////////////////////////////////////////////////////////////////////////////////
    while (therow-1 >= 0 && thecol+1 < cols && animg.src === allcells[therow-1][thecol+1].querySelector("img").src){
        won++;
        therow--;
        thecol++;
    }
    resetCount(row, col);
    while(therow+1 < rows && thecol-1 >= 0 && animg.src === allcells[therow+1][thecol-1].querySelector("img").src){
        won++;
        therow++;
        thecol--;
    }
    if (won >= how_in_line){
        winner(X);
    }
    resetCount(row, col);
    //////////////////////////////////////////////////////////////////////////////////////////////
}