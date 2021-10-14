$(function() {

    let start = $("div#start");
    let end = $("div#end");

    let hasStarted = false;

    let maze = $("div#maze");
    let boundaries = $("div.boundary");


    let status = $("h2#status");

    start.click(startGame);

    function startGame() {
        hasStarted = true;
        status.empty().text("Move mouse to End in order to win the game.");
        boundaries.removeClass("youlose");

        boundaries.mouseenter(function() {
            if (hasStarted) {
                loseGame();
            }
        });

        maze.mouseleave(function() {
            if (hasStarted) {
                loseGame();
            }
        });

        end.mouseenter(function() {
            if (hasStarted) {
                winGame();
            }
        });
    }

    winGame = function() {
        hasStarted = false;
        status.empty().text("You win! :]");
    }

    loseGame = function() {
        hasStarted = false;
        boundaries.addClass("youlose");
        status.empty().text("Sorry! You lost. :[");

    }
});