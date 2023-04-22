const qrFormEl = document.getElementById("qrForm");
const qrContainerEl = document.getElementById("qrContainer");
const qrImgEl = document.getElementById("qrImg");
const input_textEl = document.getElementById("input_text");

qrFormEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(qrFormEl);
  const text = formData.get("qrtext");
});

const renderQRCode = (url) => {
  if (!url) return;
  qrFormEl.src = url;
  qrContainerEl.classList.add("show");
};

qrFormEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(qrFormEl);
  const text = formData.get("qrtext");

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
  renderQRCode(qrCodeUrl);
});

input_textEl.addEventListener("keyup", () => {
  if (input_textEl.value.trim()) {
    qrContainerEl.classList.remove("show");
  }
});
