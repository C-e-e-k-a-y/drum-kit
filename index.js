var buttonList = document.querySelectorAll(".drum");
var soundsList = ['tom-1.mp3', 'tom-2.mp3', 'tom-3.mp3', 'tom-4.mp3', 'snare.mp3', 'crash.mp3', 'kick-bass.mp3'];
var objectList = [];

for (var i = 0; i < buttonList.length; i++) {
    (function(index) {
      buttonList[index].addEventListener("click", function() {
        var soundObject = objectList[index];
        soundObject.play();
        this.style.color = "white";
        setTimeout(() => {
          this.style.color = "#DA0463";
        }, 200);
      });
    })(i);
  
    var object = new Audio('sounds/' + soundsList[i]);
    objectList.push(object);
  }

  // adding event listeners to the windows for keypress
  document.addEventListener('keypress', function(event) {
    // Get the key that was pressed
    var key = event.key;
  
    // Map keys to sounds
    var keyMap = {
      'w': 'tom-1.mp3',
      'a': 'tom-2.mp3',
      's': 'tom-3.mp3',
      'd': 'tom-4.mp3',
      'j': 'snare.mp3',
      'k': 'crash.mp3',
      'l': 'kick-bass.mp3',
    };
  
    // Check if the pressed key is mapped to a sound
    var soundKey = keyMap[key];
    if (soundKey) {
      // Play the corresponding sound
      var soundIndex = soundsList.indexOf(soundKey);
      objectList[soundIndex].play();

      // make the button flick
      buttonList[soundIndex].style.color = "white";
      setTimeout(() => {
        buttonList[soundIndex].style.color = "#DA0463";
      }, 200);
    }
  });
