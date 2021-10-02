var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern=[];
var started=false;
var level=0;


$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});


function nextSequence(){
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber= Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();

}

function animatePress(currentColour){

    $("."+ currentColour).addClass("pressed");
    setTimeout(function() {
        $("."+ currentColour).removeClass("pressed");
      }, 100);
}

$(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });
  

function checkAnswer(currentLevel){
    // if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
    //     console.log("success");
    //     if (userClickedPattern.length === gamePattern.length){
    //         setTimeout(function () {
    //             nextSequence();
    //           }, 1000);
    //     }
    // }
    // else{
    //     console.log("wrong");
    //     playSound("wrong");
    //     $("body").addClass("game-over");
    //     setTimeout(function () {
    //         $("body").removeClass("game-over");
    //       }, 2000);
    //     $("#level-title").text("Game over :/ Press any key to restart:P");
    //     checkAnswer();
    // }
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");
  
        if (userClickedPattern.length === gamePattern.length){
          setTimeout(function () {
            nextSequence();
          }, 1000);
        }
  
      } else {
  
        console.log("wrong");
  
        playSound("wrong");
  
        $("body").addClass("game-over");
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
  
        $("#level-title").text("Game Over, Press Any Key to Restart");
  
        //2. Call startOver() if the user gets the sequence wrong.
        startOver();
      }
}

function startOver(){
    level=0;
    gamePattern=[];
    started=false;
}

    








































// var userClickedPattern=[];
// userClickedPattern.push(userChosenColour);

// var gamePattern=[];
// gamePattern.push(randomChosenColour);

// var buttonColours = ["red", "blue", "green", "yellow"];

// var randomChosenColour= buttonColours[randomNumber];

// var randomNumber=nextSequence();
// function nextSequence(){
// return Math.floor(Math.random() * 4);

// }

// $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
// $("#" + randomChosenColour).click(makeSound);
// function makeSound(){
//     switch(randomChosenColour){
//         case "red":
//             var red= new Audio('sounds/red.mp3');
//             red.play();
//             break;
//         case "yellow":
//             var yellow= new Audio('sounds/yellow.mp3');
//             yellow.play;
//             break;
//         case "blue":
//             var blue= new Audio('sounds/blue.mp3');
//             blue.play;
//             break;
//         case "green":
//             var green= new Audio('sounds/green.mp3');
//             green.play;
//             break;
//         default:
//             var wrong= new Audio('sounds/wrong.mp3');
//             wrong.play;
//             break;
//     }
// }



// $("button").click(function(clickedEvent){
//     var userChosenColour= clickedEvent.attr("Id");

// })
// console.log(userClickedPattern);