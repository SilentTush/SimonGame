var buttonColors = ['red','blue','green','yellow'];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;


function nextSequence(){
    userClickedPattern = [];
    level++;
    $("h1").text("Level "+ level);
    var randomNo = Math.floor((Math.random())*4);
    var randomChoosenColor = buttonColors[randomNo];
    gamePattern.push(randomChoosenColor);
    $("#"+randomChoosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChoosenColor);
}


$(".btn").click(function (){
        var userChoosenColor = $(this).attr("id");
        userClickedPattern.push(userChoosenColor);
        animatePress(userChoosenColor);
        playSound(userChoosenColor);
        checkAnswer(userClickedPattern.length-1);
})

function playSound(name){
    switch(name){
    case "red" : var red = new Audio(src="sounds/red.mp3");
                red.play();
                break;
    case "blue"  : var blue  = new Audio(src="sounds/blue.mp3");
                blue.play();
                break;
    case "green" : var green = new Audio(src="sounds/green.mp3");
                green.play();
                break;
    case "yellow" : var yellow = new Audio(src="sounds/yellow.mp3");
                yellow.play();
                break;
                case "wrong" :             var wrong =  new Audio(src="sounds/wrong.mp3");
                wrong.play();

}
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    }, 100)
}


//start 
start();

function start(){
    $("body").keydown(function(){
        if(started === false){
            nextSequence();
            started = true;
        }
    }
    )
}


// checking 
function checkAnswer(currentLevel){
        if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
            if (userClickedPattern.length === gamePattern.length){
                setTimeout(function () {
                  nextSequence();
                }, 1000);
        }
    }
        else{
            playSound("wrong");
            $("h1").text("Game Finished, Press any key to restart");
            console.log("no");
            $("body").addClass("game-over");
            setTimeout(function(){
                $("body").removeClass("game-over");
            },200)
            started = false;
            gamePattern = [];
            level = 0;
            start();
        }
    }
