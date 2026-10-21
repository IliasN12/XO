restart();
tab.addEventListener("click", function(event){
    let cell = event.target.closest("td");
    if (!cell) return;
    let img = cell.querySelector("img");
    if (img.src.includes("white.png")) {
        img.remove();
        if (X) {
            body.classList.remove("X");
            body.classList.add("O");
            cell.innerHTML = '<img src="image/red.png" width="50" height="50">';
            X = false;
        }else {
            body.classList.remove("O");
            body.classList.add("X");
            cell.innerHTML = '<img src="image/green.png" width="50" height="50">';
            X = true;
        }
    
        placed.push(cell);
        if (placed.length > (how_in_line*2+2)) {
            let oldcell = placed.shift();
            oldcell.innerHTML = '<img src="image/white.png" width="50" height="50">';
        }
        let row = cell.parentElement.rowIndex;
        let col = cell.cellIndex;
        checkwin(row, col);
    }
});
addrow.addEventListener("click", function(){
    addsrow();
    restart();
});
addcol.addEventListener("click", function(){
    addscol();
    restart();
});
addrowcol.addEventListener("click", function(){
    addsrow();
    addscol();
    restart();
});
line_win.addEventListener("change", function(){
    how_in_line = Number(line_win.value)
    if (how_in_line<3) how_in_line = 3;
    if (how_in_line>10) how_in_line = 10;
});