

$("button").on("click", function () {
    if (isWinner == false) {
        if (isValidMove == true) {
            playGame()
        } else {

        }
    } else {
        gameOver()
    }
})

let turn = 1;
function playGame() {
    let id = $(this).attr('id');
    if (turn ==  1) {
        $(`${id}`).addClass("fa fa-globe");
        //$(this).attr("class", "bi bi-x-lg");
        $("#player-turn").text("Player 2 - O Turn");
        turn = 2;
    } else {
        $(this).attr("class", "bi bi-circle");
        $("#player-turn").text("Player 1 - X Turn");
        turn = 1;
    }
}

//isValidMove()
//gameOver() 
let isValidMove = true;
let isWinner = false;

console.log($('body'));