window.onload = function () {
  let seconds = 0;
  let milliseconds = 0;

  let interval;

  const addSeconds = this.document.querySelector(".second");
  const addMilis = this.document.querySelector(".milli");

  const startButton = this.document.querySelector(".start");
  const stopButton = this.document.querySelector(".stop");
  const resetButton = this.document.querySelector(".reset");

  startButton.onclick = function () {
    clearInterval(interval);
    interval = setInterval(start, 10);
  };
  stopButton.onclick = function () {
    clearInterval(interval);
  };
  resetButton.onclick = function () {
    clearInterval(interval);
    seconds = 0;
    milliseconds = 0;
    addSeconds.innerHTML = "00";
    addMilis.innerHTML = "00";
  };

  function start() {
    milliseconds++;
    if (milliseconds >= 100) {
      seconds++;
      milliseconds = 0;
    }
    addMilis.innerHTML = milliseconds < 10 ? "0" + milliseconds : milliseconds;
    addSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;
  }
};
