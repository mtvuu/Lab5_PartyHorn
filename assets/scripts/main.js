// main.js

volumeSlider = document.getElementById("volume-slider");
volumeNumber = document.getElementById("volume-number");
hornSound = document.getElementById("horn-sound");
volumeImage = document.getElementById("volume-image");
honkButton = document.getElementById("honk-btn");

volumeSlider.oninput = () => {
  volumeNumber.value = volumeSlider.value;
  hornSound.volume = volumeSlider.value/100;
  if (volumeNumber.value == 0) {
    honkButton.disable = true;
    volumeImage.src = "./assets/media/icons/volume-level-0.svg";
  } 
  else if (volumeNumber.value < 34) {
    honkButton.disable = false;
    volumeImage.src = "./assets/media/icons/volume-level-1.svg";
  } 
  else if (volumeNumber.value < 67) {
    honkButton.disable = false;
    volumeImage.src = "./assets/media/icons/volume-level-2.svg";
  } 
  else if (volumeNumber.value <= 100) {
    honkButton.disable = false;
    volumeImage.src = "./assets/media/icons/volume-level-3.svg";
  }
};

volumeNumber.oninput = () => {
  volumeSlider.value = volumeNumber.value;
  hornSound.volume = volumeNumber.value/100;
  if (volumeNumber.value == 0) {
    honkButton.disable = true;
    volumeImage.src = "./assets/media/icons/volume-level-0.svg";
  } 
  else if (volumeNumber.value < 34) {
    honkButton.disable = false;
    volumeImage.src = "./assets/media/icons/volume-level-1.svg";
  } 
  else if (volumeNumber.value < 67) {
    honkButton.disable = false;
    volumeImage.src = "./assets/media/icons/volume-level-2.svg";
  } 
  else if (volumeNumber.value <= 100) {
    honkButton.disable = false;
    volumeImage.src = "./assets/media/icons/volume-level-3.svg";
  }
};

audioSelection = document.getElementById("audio-selection");
airHorn = document.getElementById("radio-air-horn");
carHorn = document.getElementById("radio-car-horn");
partyHorn = document.getElementById("radio-party-horn");
soundImage = document.getElementById("sound-image");

honkButton.onclick = () => {
  hornSound.play();
};

audioSelection.oninput = () => {
  if (airHorn.checked) {
    soundImage.src = "./assets/media/images/air-horn.svg";
    hornSound.src = "./assets/media/audio/air-horn.mp3";
  }
  else if (carHorn.checked) {
    soundImage.src = "./assets/media/images/car.svg";
    hornSound.src = "./assets/media/audio/car-horn.mp3";
  }
  else if (partyHorn.checked) {
    soundImage.src = "./assets/media/images/party-horn.svg";
    hornSound.src = "./assets/media/audio/party-horn.mp3";
  }
};