(function () {
  const buttons = document.querySelectorAll(".btn-counter");
  let count = 0;

  const counter = document.querySelector(".counter-machine");
  const counterContainer = document.querySelector(".counter");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      if (button.classList.contains("decrease-btn")) {
        count--;
      } else if (button.classList.contains("increase-btn")) {
        count++;
      }
      counter.textContent = count;

      if (count > 0) {
        counterContainer.classList.add("positive");
        counterContainer.classList.remove("negative");
      } else if (count < 0) {
        counterContainer.classList.add("negative");
        counterContainer.classList.remove("positive");
      } else {
        counterContainer.classList.remove("negative", "positive");
      }
    });
  });
})();
