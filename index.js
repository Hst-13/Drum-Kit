console.log("Drum Kit");

var numberOfButtons = document.querySelectorAll(".button").length;

for (var j = 0; j < numberOfButtons; j++) {

document.querySelectorAll(".button")[j].addEventListener("click", function() {
	var buttonStyle = this.innerHTML;
	sound(buttonStyle);
	animation(buttonStyle);
});
}

var sound1 = new Audio('Sound/Crash.mp3');
var sound2 = new Audio('Sound/Clap.mp3');
var sound3 = new Audio('Sound/Cowbell.mp3');
var sound4 = new Audio('Sound/Snare.mp3');
var sound5 = new Audio('Sound/CH.mp3');
var sound6 = new Audio('Sound/OH.mp3');
var sound7 = new Audio('Sound/Tom2.mp3');
var sound8 = new Audio('Sound/Tom.mp3');
var sound9 = new Audio('Sound/Kick.mp3');

document.addEventListener("keypress", function(event) {
  sound(event.key);
  animation(event.key);
});

function sound(key) {
  switch (key) {
    case "w":
    sound1.play()
    break;

    case "a":
    sound2.play()
    break;

    case "s":
    sound3.play()
    break;

    case "d":
    sound4.play()
    break;

    case "j":
    sound5.play()
    break;

    case "k":
    sound6.play()
    break;

    case "h":
    sound7.play()
    break;

    case "f":
    sound8.play()
    break;

    case "l":
    sound9.play()
    break;

    default: console.log(key);
  }
}

function animation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  
  activeButton.classList.add("animation");
  
  setTimeout(function() {
    activeButton.classList.remove("animation");
  }, 100);
}
      