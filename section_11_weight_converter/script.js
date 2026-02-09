const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const input = document.querySelector("input");
  const convertedWeight = document.getElementById("convertedWeight");
  let kgToPounds;

  if (isNaN(input.value) || input.value <= 0) {
    convertedWeight.classList.add("error");
    convertedWeight.innerHTML = "<p>Please enter a valid value.</p>";

    setTimeout(() => {
      convertedWeight.classList.remove("error");
      convertedWeight.innerHTML = "";
    }, 2500);

    input.value = "";
  } else {
    kgToPounds = (input.value * 2.20462).toFixed(2);
    convertedWeight.classList.remove("success");
    convertedWeight.innerHTML = `<p>${kgToPounds} Pounds</p>`;
    setTimeout(() => {
      convertedWeight.classList.remove("success");
      convertedWeight.innerHTML = "";
    }, 5000);

    input.value = "";
  }
});
