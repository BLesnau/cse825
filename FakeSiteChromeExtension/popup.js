document.addEventListener( 'DOMContentLoaded', function () {
   window.onload = function () {
      var affirmations =
          [
              "You are pretty much the coolest person ever!",
              "How did you become so awesome?",
              "Nobody can compare to you!",
              "Your awesomeness is overwhelming!",
              "Who has two thumbs and is the coolest person in the world? You are!"
          ];

      var randNum = Math.floor( Math.random() * affirmations.length );
      document.getElementById( "textBox" ).innerHTML = affirmations[randNum];
   }
} );