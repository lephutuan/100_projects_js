function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById("generateButton").addEventListener("click", function() {
  const min = 1;
  const max = 100;
  const randomNumber =generateRandomNumber(min, max);
  document.getElementById("result").innerText = randomNumber;
});