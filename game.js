var buttonColours =["red", "blue", "green", "yellow"];

var gamePattern=[];

var userClickedPattern=[];

//test 7 - game start
var started = false;
var level = 0;
$(document).keydown(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    started = true;
    nextSequence();
  }
});

//check function answer
function checkAnswer(currentLevel){
  if (userClickedPattern[currentLevel]===gamePattern[currentLevel]){
    console.log("Success!")
  } else {
    console.log("Wrong!")
  }
  // Check if the user has finished their sequence
   if (userClickedPattern.length === gamePattern.length) {
  // Wait for 1000 milliseconds before moving to the next sequence
  setTimeout(function () {
    nextSequence();
  }, 1000);
  } else {
  console.log("Wrong!");
  // Handle the case when the user's answer is incorrect
  }
  }



//detect button clicked
$(".btn").click(function(){
  var userChosenColour = $(this).attr("id")
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
})


//number random di kem voi color next Sequence
function nextSequence(){
  level++;
  $("#level-title").text("Level " + level);
  //why have to write this line twice?
  var randomNumber = Math.floor(Math.random()*4);
  console.log(randomNumber);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  //playSound function
  playSound(randomChosenColour);
  $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  //da co cai nay so we dont need animation.


  setTimeout(function () {
    userClickedPattern = [];
  }, 1000);
  started = false; 
  };

//play sound function
function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
//animate
function animatePress(currentColour){
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
      }
      

// //main - try
// $(document).on(keydown, function(){
//   nextSequence();
//   var level = 0;
//   $("h1").text("Level"+level)
//   level +=1; 



// $("#"+randomChosenColour).click(function playAudio(randomChosenColour){
//     var userChosenColour = "#"+randomChosenColour;
//      switch(randomChosenColour){
//         case"red":
//         var red = new Audio ("./sounds/red.mp3");
//         red.play();
//         break;
   
//         case"blue":
//         var blue = new Audio ("./sounds/blue.mp3");
//         blue.play();
//         break;
   
//         case"green":
//         var green = new Audio ("./sounds/green.mp3");
//         green.play();
//         break;
   
//         case"yellow":
//         var yellow = new Audio ("./sounds/yellow.mp3");
//         yellow.play();
//         break;

//         default: 
//         var wrong = new Audio("./sounds/wrong.mp3");
//         wrong.play();
// }

// }
// )




