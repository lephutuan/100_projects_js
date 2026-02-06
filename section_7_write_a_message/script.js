function showMessageContent(message) {
  const messageContent = document.querySelector(".message-content");
  messageContent.textContent = `"${message}" - Your message has been sent successfully!`;
}

function showInvalidMessage() {
  const messageContent = document.querySelector(".invalid-message");
  messageContent.style.display = "block";
  setTimeout(() => {
    messageContent.style.display = "none";
  }, 2000);
}

function handleSubmit(event) {
  event.preventDefault();
  const messageInput = document.querySelector(".message");
  const message = messageInput.value.trim();
  if (message === "") {
    showInvalidMessage();
  } else {
    showMessageContent(message);
    messageInput.value = "";
  }
}
(function () {
  const form = document.querySelector("#form");
  form.addEventListener("submit", handleSubmit);
})();
