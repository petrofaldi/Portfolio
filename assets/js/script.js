//scrool to elemen
function scrollKeElemen(id) {
  let elemen = document.getElementById(id);
  elemen.scrollIntoView({ behavior: "smooth" });
}

// Galeri
let slideIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  if (index >= slides.length) {
    slideIndex = 0;
  }
  if (index < 0) {
    slideIndex = slides.length - 1;
  }
  const offset = -slideIndex * 100;
  document.querySelector(".slider").style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

// Autoplay
setInterval(nextSlide, 5000); // Ganti gambar setiap 5 detik
