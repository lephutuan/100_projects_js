const input = document.querySelector("input");
let firstThreeDigits = "";
let previousValue = "";
input.addEventListener("input", (e) => {
  const inputValue = e.target.value;

  if (inputValue.length === 4 && previousValue.length < inputValue.length) {
    firstThreeDigits = inputValue.substring(0, 3);
    input.value = `+(${firstThreeDigits}) - ${inputValue[inputValue.length - 1]}`;
  }
  previousValue = inputValue;
});
