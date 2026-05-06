document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let message = form.querySelector(".form-message");
    if (!message) {
      message = document.createElement("p");
      message.className = "form-message";
      form.appendChild(message);
    }

    message.textContent = "접수 화면 시안입니다. 실제 운영 시 전화, 이메일, 카카오채널 또는 서버 폼으로 연결하세요.";
    message.classList.add("show");
  });
});
