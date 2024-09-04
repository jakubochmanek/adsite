document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("carousel");
  const radios = document.querySelectorAll(".radio-carousel");

  const imageWidth = 600 + 64; // 600px szerokości + 64px odstępu
  let currentIndex = 0;

  // Obsługa kliknięcia na radio inputy
  radios.forEach((radio, index) => {
    radio.addEventListener("change", () => {
      currentIndex = index;
      updateCarouselPosition();
    });
  });

  function updateCarouselPosition() {
    const offset = -currentIndex * imageWidth;
    carousel.style.transform = `translateX(${offset}px)`;
  }

  // Inicjalizacja stanu - zaznaczenie pierwszego radia
  radios[0].checked = true;
  updateCarouselPosition();
});
