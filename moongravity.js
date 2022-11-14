
'render invisible';

// Declare a new Image object 
var player = new Image();
// Position the ship at the bottom of the canvas in the center.
player.x = canvas.width / 2;
player.y = canvas.height - 75;
// Set the name of the image to display.
player.name = 'astronaut';
// Set the width and height.
player.width = 50;
player.height = 50;
// Set the name and center property.
player.center = true;

// Declare a new array for storing bad objects
var badObjects = [];

// Remember the number of frames that have occurred.
var frameCount = 40;

// Animate the program.
function animate() {
   // Create an ocean with the background function.
   background('steelblue');
   // Draw the ship;
   player.draw();

   // Add a frame to the frameCount.
   frameCount++;

   // Make a new iceberg every 40 frames.
   if (frameCount > 40) {
      // Declare and position the icebadGuy.
      var b = new Image();
      b.x = random(0, canvas.width - 50);
      b.y = -50;
      // Set the name of the image to display.
      b.name = 'bear_icon.png';
      // Set the width and height.
      b.width = 100;
      b.height = 100;
      // Set the center property.
      b.center = true;

      // Add the b iceberg to the array.
      badObjects.push(b);

      // Reset the frame count.
      frameCount = 0;
      // Close the if statement.
   }

   // Loop through the list of bad objects in the array
   for (var i = 0; i < badObjects.length; i++) {
      // Save some typing.
      var badGuy = badObjects[i];

      // Draw the icebadGuy.
      badGuy.draw();

      // Move the iceberg down and left or right.
      badGuy.x += random(-3, 3);
      badGuy.y += 3;

      // Check if the iceberg is touching the player.
      var hit = collide(ship, berg);
      // Is the berg touching the ship?
      if (hit) {
         // Yes it is. We're sunk.
         write(100, 100, "We're sunk!");
         // End the game.
         stop();
         // Close the if statement.
      }
      // Close the for loop.
   }

   // Move the ship in all four directions.
   switch (keyboard.key) {
         // Is the up arrow pressed?
      case 'ArrowUp':
         // Move the ship up the canvas.
         player.y--;
         // Match found. End the switch statement.
         break;
         // Is the down arrow pressed?
      case 'ArrowDown':
         // Move the ship down.
         player.y++;
         // Match found. End the switch statement.
         break;
         // Is the left arrow pressed?
      case 'ArrowLeft':
         // Move the ship left.
         player.x--;
         // Match found. End the switch statement.
         break;
         // Is the right arrow pressed?
      case 'ArrowRight':
         // Move the ship right.
         player.x++;
         // Close the switch statement.
   }

   // Check if the Olympic has reached the top of the canvas.
   if (player.y - player.height / 2 < 0) {
      // It has. Safety!
      write(100, 100, "We're safe!");
      // End the voyage.
      stop();
      // Close the if statement.
   }
   // Close the animate function.
}