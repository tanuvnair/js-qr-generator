const primary = document.querySelector(".primary-color");
const secondary = document.querySelector(".secondary-color");
const sizes = document.querySelector(".sizes");
const qrText = document.querySelector(".qr-text");
const qrCode = document.querySelector("#qrCode");
const download = document.querySelector(".download");
const share = document.querySelector(".share")

primary.addEventListener("input", handlePrimaryColor());
secondary.addEventListener("input", handleSecondaryColor());
sizes.addEventListener("change", handleSizes());
qrText.addEventListener("input", handleQRText());
share.addEventListener("click", handleShare());

const defaultUrl = "https://www.tanuvnair.com",
    colorPrimary = "#000000",
    colorSecondary = "#ffffff",
    text = defaultUrl,
    size = 100;

function handlePrimaryColor(e) {
    colorPrimary = e.target.value;
    generateQRCode(); 
}

function handleSecondaryColor(e) {
    colorSecondary = e.target.value;
    generateQRCode(); 
}

function handleSizes(e) {
    size = e.target.value;
    generateQRCode();
}

function handleQRText(e) {
    const value = e.target.value;
    text = value;
    if(!value) {
        text = defaultUrl;
    } else {
        generateQRCode();
    }
}

async function generateQRCode() {
    qrCode.innerHTML = "";
    new generateQRCode("qrCode", {
        text,
        colorPrimary,
        colorSecondary,
        height: size,
        width: size
    });
}