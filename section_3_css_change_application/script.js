const inputs = document.querySelectorAll(".css-controller input");

inputs.forEach((inputs) => inputs.addEventListener("input", handleUpdate));

function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix,
  );
}
