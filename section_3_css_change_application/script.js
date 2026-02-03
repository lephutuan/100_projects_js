const inputs = document.querySelectorAll(".controls input");

inputs.forEach((inputs) => inputs.addEventListener("change", handleUpdate));

function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix,
  );
}
