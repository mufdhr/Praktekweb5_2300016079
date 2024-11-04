document.addEventListener("DOMContentLoaded", function () {
    // Mendapatkan elemen tombol hamburger dan menu mobile
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const mobileMenu = document.getElementById("mobile-menu");
  
    // Mengecek apakah elemen ditemukan
    if (hamburgerBtn && mobileMenu) {
      // Menambahkan event listener untuk klik pada tombol hamburger
      hamburgerBtn.addEventListener("click", function () {
        // Toggle class "hidden" pada elemen mobileMenu
        mobileMenu.classList.toggle("hidden");
      });
    } else {
      console.error("Element tidak ditemukan. Pastikan ID elemen benar.");
    }
  });