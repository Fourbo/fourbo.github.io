    const buttons = document.querySelectorAll('button[data-sound]');
    const audioPlayer = document.getElementById('audioPlayer');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const soundFile = button.getAttribute('data-sound');
        audioPlayer.src = soundFile;
        audioPlayer.currentTime = 0;
        audioPlayer.play();
      });
    });