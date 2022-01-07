var numberOfButtons = document.querySelectorAll(".button").length;

for (var j = 0; j < numberOfButtons; j++) {

document.querySelectorAll(".button")[j].addEventListener("click", function() {
	var buttonStyle = this.innerHTML;
	sound(buttonStyle);
	animation(buttonStyle);
});
}

document.addEventListener("keypress", function(event) {
  sound(event.key);
  animation(event.key);
});

function sound(key) {
  switch (key) {
    case "w":
    var sound1 = new Audio('Sound/Crash.wav');
    sound1.play();
    break;

    case "a":
    var sound2 = new Audio('Sound/Clap.wav');
    sound2.play();
    break;

    case "s":
    var sound3 = new Audio('Sound/Cowbell.wav');
    sound3.play();
    break;

    case "d":
    var sound4 = new Audio('Sound/Snare.wav');
    sound4.play()
    break;

    case "j":
    var sound5 = new Audio('Sound/CH.wav');
    sound5.play();
    break;

    case "k":
    var sound6 = new Audio('Sound/OH.wav');
    sound6.play();
    break;

    case "h":
    var sound7 = new Audio('Sound/Tom2.wav');
    sound7.play();
    break;

    case "F":
    var sound8 = new Audio('Sound/Tom.wav');
    sound8.play();
    break;

    case "l":
    var sound9 = new Audio('Sound/Kick.wav');
    sound9.play();
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
      