const qrFormEl = document.getElementById("qrForm");
const qrImage = document.getElementById("qrImage");
const qrContainerEl = document.getElementById("qrContainer");

const renderQRCode = (url) => {
    if (!url) return;
    qrImage.src = url;
    qrContainerEl.classList.add("show");
};

qrFormEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(qrFormEl);
    const text = formData.get("qrText").trim(); // Get user input

    if (!text) {
        alert("Please enter text to generate a QR code.");
        return;
    }

    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(text)}`;
    renderQRCode(qrCodeUrl);
});