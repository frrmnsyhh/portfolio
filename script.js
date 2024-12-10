// --------------------------------------------------------------------------------

// SAPAAN SESUAI WAKTU

const sapaElement = document.getElementById("sapa");

// Dapatkan jam saat ini (format 24 jam)
const sekarang = new Date();
const jam = sekarang.getHours();

// Tentukan sapa berdasarkan jam
let sapa = "";

if (jam >= 4 && jam < 12) {
  sapa = "Hai👋🏻, Selamat Pagi!"; // Jam 04:00 - 11:59
} else if (jam >= 12 && jam < 15) {
  sapa = "Hai👋🏻, Selamat Siang!"; // Jam 12:00 - 14:59
} else if (jam >= 15 && jam < 18) {
  sapa = "Hai👋🏻, Selamat Sore!"; // Jam 15:00 - 17:59
} else {
  sapa = "Hai👋🏻, Selamat Malam!"; // Jam 18:00 - 03:59
}

// Tampilkan sapa di halaman
sapaElement.textContent = sapa;

// --------------------------------------------------------------------------------

// EFEK NGETIK

const txtElement = ["Pelajar", "Web Desainer", "Video Editor"];
let count = 0;
let txtIndex = 0;
let currentTxt = "";
let words = "";

(function ngetik() {
  if (count == txtElement.length) {
    count = 0;
  }

  currentTxt = txtElement[count];

  words = currentTxt.slice(0, ++txtIndex);
  document.querySelector(".ketikan").textContent = words;

  if (words.length == currentTxt.length) {
    count++;
    txtIndex = 0;
  }

  setTimeout(ngetik, 350);
})();

// --------------------------------------------------------------------------------

// PROFILE PICT BERGERAK

const image = document.getElementById("moving-image");

let position = 5;
let direction = 1;

function moveImage() {
  position += direction * 0.1;

  if (position > 10 || position < 0) {
    direction *= -1;
  }
  image.style.transform = `translateY(${position}px)`;

  requestAnimationFrame(moveImage);
}

moveImage();

const ThirdImage = document.querySelector(".img-hero:nth-child(3)");

let thirdImageposition = 0;
let thirdImagedirection = 1;

function moveThirdImage() {
  thirdImageposition += thirdImagedirection * 0.1;

  if (thirdImageposition > 10 || thirdImageposition < 0) {
    thirdImagedirection *= -1;
  }
  ThirdImage.style.transform = `translateY(${thirdImageposition}px)`;

  requestAnimationFrame(moveThirdImage);
}

moveThirdImage();

// --------------------------------------------------------------------------------

// ALERT BUTTON CONTACT

const kirimPesanButton = document.getElementById("kirim-pesan");
const namaInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const pesanInput = document.getElementById("pesan");

kirimPesanButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (
    namaInput.value === "" ||
    emailInput.value === "" ||
    pesanInput.value === ""
  ) {
    alert("Mohon isi semua kolom terlebih dahulu.");
  } else {
    alert("Maaf, Fitur pengiriman pesan masih dalam pengembangan.");
  }
});
