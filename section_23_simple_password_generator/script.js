const copyButton = document.getElementById("copyButton");
const generateButton = document.getElementById("generateButton");
const passwordInput = document.getElementById("password");
const show = document.querySelector(".show");

generateButton.addEventListener("click", () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  const pwdLength = 12;
  let password = "";
  for (let i = 0; i < pwdLength; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length),
    );
  }
  passwordInput.value = password;
});

copyButton.addEventListener("click", () => {
  const passwordValue = passwordInput.value;
  if (passwordValue.trim() === "") {
    alert("Please generate a password first!");
    return;
  } else {
    navigator.clipboard.writeText(passwordValue).then(() => {
      show.innerHTML = "Your new Password is: <br> " + passwordValue;
      show.classList.add("active");
      setTimeout(() => {
        show.classList.remove("active");
      }, 2000);
      passwordInput.value = "";
    });
  }
});
