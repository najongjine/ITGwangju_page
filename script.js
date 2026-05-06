document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let message = form.querySelector(".form-message");
    if (!message) {
      message = document.createElement("p");
      message.className = "form-message";
      form.appendChild(message);
    }

    const label = form.dataset.message || "임시 화면입니다. 실제 개발에서는 Supabase 테이블 저장, 파일 업로드, 알림 발송과 연결하면 됩니다.";
    message.textContent = label;
    message.classList.add("show");
  });
});
