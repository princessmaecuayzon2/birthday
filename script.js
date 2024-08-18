const countdownContainer = document.querySelector('.countdown-container');
const birthdayMessageElement = document.querySelector('.birthday-message');
const birthdayAudio = document.getElementById('birthdayAudio');
const startButton = document.getElementById('startButton');
const targetDate = new Date('2024-08-19T01:48:00'); // Set the target date

function updateCountdown() {
const now = new Date();
const timeRemaining = targetDate - now;
 if (timeRemaining <= 0) {
 endCountdown();
} else {
const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
 const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
 const seconds = Math.floor((timeRemaining / 1000) % 60);

        document.getElementById('hours').textContent = padZero(hours);
        document.getElementById('minutes').textContent = padZero(minutes);
        document.getElementById('seconds').textContent = padZero(seconds);
    }
}

function endCountdown() {
    countdownContainer.style.display = 'none';
    birthdayAudio.pause();
    birthdayAudio.currentTime = 0;
    birthdayMessageElement.style.display = 'block';
}

function padZero(value) {
    return value < 10 ? '0' + value : value;
}

startButton.addEventListener('click', function() {
    birthdayAudio.play();
    setInterval(updateCountdown, 1000);
});

