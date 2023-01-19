window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key="${e.code}"]`);
  const key = document.querySelector(`.key[data-key="${e.code}"]`);
  if (!key) return;
  key.classList.add("playing");

  console.log(key);
  if (!audio) return;
  audio.play();
  audio.currentTime = 0;
});
function removeTransition(e) {
  if (e.propertyName !== "transform") return;

  this.classList.remove("playing");
}
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
