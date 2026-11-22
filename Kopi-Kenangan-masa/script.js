const navMenu = document.getElementById("navMenu");
const menuToggle = document.getElementById("menuToggle");
const contactForm = document.getElementById("contactForm");

// Buka/tutup sidebar pada layar kecil
menuToggle.addEventListener("click", (event) => {
  event.stopPropagation();
  navMenu.classList.toggle("is-open");
});

// Tutup sidebar saat pengguna mengklik di luar area menu
document.addEventListener("click", (event) => {
  if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
    navMenu.classList.remove("is-open");
  }
});

// Tutup sidebar otomatis setelah memilih tautan navigasi
navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("is-open");
  });
});

// Simulasi pengiriman formulir kontak
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Terima kasih! Pesan Anda telah kami terima.");
  contactForm.reset();
});