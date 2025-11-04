
// Script JavaScript sederhana untuk website Ujang Ayub
console.log("Website Ujang Ayub berhasil dimuat.");

// Contoh animasi fade-in untuk elemen
document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade");
    fadeElements.forEach(el => {
        el.style.opacity = 1;
    });
});
