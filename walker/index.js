/* global $, sessionStorage */

$(document).ready(runProgram);      // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {          // an object that holds the keys
      "LEFT": 37,      // left arrow
      "UP": 38,        // up arrow
      "RIGHT": 39,     // right arrow
      "DOWN": 40       // down arrow
  };

  // Game Item Objects
    var positionX = 0;      // initial x position of the box
    var speedX = 0;         // initial x speed of the box
    var positionY = 0;      // initial y position of the box
    var speedY = 0;         // initial y speed of the box
  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);     // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                             // makes the game register "keydown" events and respond to them  // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);                                 // makes the game register "keyup" events and respond to them

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  
  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {             // calls repositionGameItem & redrawGameItem
    repositionGameItem();
    redrawGameItem();
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {                   // performs "keydown" events
    if (event.which === KEY.LEFT){                  // sets off a certain set of code if the left arrow key is pressed
        speedX = -5;                                // the speed of the box when left arrow is pressed
        console.log("left pressed");                // prints "left pressed" when left arrow pressed
    } else if (event.which === KEY.UP){             // sets off a certain set of code if the up arrow key is pressed
        speedY = -5;                                 // the speed of the box when up arrow is pressed
        console.log("up pressed");                  // prints "up pressed" when up arrow pressed
    } else if (event.which === KEY.RIGHT){          // sets off a certain set of code if the right arrow key is pressed
        speedX = 5;                                 // the speed of the box when right arrow is pressed
        console.log("right pressed");               // prints "right pressed" when right arrow pressed
    } else if (event.which === KEY.DOWN){           // sets off a certain set of code if the down arrow key is pressed
        speedY = 5;                                // the speed of the box when down arrow is pressed
        console.log("down pressed");                // prints "down pressed" left arrow when pressed
    }
}

  function handleKeyUp(event) {                     // performs "keyup" events //resets speedX and speedY //stops the box
    speedX = 0;
    speedY = 0;
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function repositionGameItem(){    // function that updates the position of the box
    positionX += speedX;        // update the position of the box along the x-axis
    positionY += speedY;        // update the position of the box along the y-axis
}
  
  function redrawGameItem(){                    // redraws box in new location
    $("#gameItem").css("left", positionX);      // draws the box in the new location, positionX pixels away from the "left"
    $("#gameItem").css("top", positionY);       // draws the box in the new location, positionY pixels away from the "top"
}
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

}