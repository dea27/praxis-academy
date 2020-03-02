//declar empty board
var board = "";

//use outter loop to control rows
for (var y = 1; y < 5; y++) {
    //use innerloop to generate the #'s horizonatlly
    for(var x = 1; x < 5; x++) {
        //if the row is even then put a space in front
        //of the board string and then generate the board
        // with the #'s
        if (y % 2 === 0) {
            board = " " + board;
            board += "#";
        }
        //else generate the board without a space in front
        //of the #'s
        else {
            board += "#";
        }
    }
    //generate a new line 
    board += "\n";
}

console.log(board);