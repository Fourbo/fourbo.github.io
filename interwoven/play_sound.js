  function playSound(id) {
    const audio = document.getElementById(id);
    audio.currentTime = 0;
    audio.play();
  }