const display = document.getElementById("status");
const body = document.body;
const submit = document.getElementById("submit");
const refresh = document.getElementById("refresh");

const char = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let captcha = "";
body.onload = function generateCaptcha() {
  const captchaLength = 6;
  for (let i = 0; i < captchaLength; i++) {
    const randomIndex = Math.floor(Math.random() * char.length);
    captcha += char.substring(randomIndex, randomIndex + 1);
  }
  document.getElementById("generator").value = captcha;
  display.innerText = "Captcha Generator";
};

submit.onclick = function checkInput() {
  const input = document.getElementById("client-text").value;
  if (input === "") {
    display.innerText = "Please enter the text shown below 👇";
  } else if (input == captcha) {
    display.innerText = "Matched👍";
  } else {
    display.innerText = "Not-Matched❌";
  }
};

refresh.onclick = function refreshCaptcha() {
  let newCaptcha = "";
  for (let i = 0; i < captcha.length; i++) {
    const randomIndex = char[Math.floor(Math.random() * char.length)];
    newCaptcha += randomIndex;
  }
  captcha = newCaptcha;
  document.getElementById("generator").value = captcha;
  display.innerText = "Captcha Generator";
};
