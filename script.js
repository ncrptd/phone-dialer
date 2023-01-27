let hours = document.querySelector('.hour');
let minutes = document.querySelector('.minutes');
let audio = new Audio('sound/dial.mp3');
let keypad = document.querySelector('.keypad');
function getTime() {
  let now = new Date();

  let hrs = now.getHours();
  hours.innerText = hrs;
  let mins = now.getMinutes();
  if (mins < 10) {
    mins = '0' + mins;
  }
  minutes.innerText = mins;
}
getTime();
setInterval(() => {
  getTime();
}, 1000);

keypad.addEventListener('click', (event) => {
  let target = event.target.closest('.bubble');
  if (!target) return;
  audio.play();
});
