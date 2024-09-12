document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("carousel");
  const radios = document.querySelectorAll(".radio-carousel");
  let currentIndex = 0;

  const fixedGapWidth = 8;

  // Image width check
  function getImageWidth() {
    const image = carousel.querySelector("img");
    const imageWidth = image.offsetWidth;

    console.log("imageWidth:", imageWidth);
    console.log("fixedGapWidth:", fixedGapWidth);

    return imageWidth + 2 * fixedGapWidth;
  }

  function updateCarouselPosition() {
    const imageWidth = getImageWidth();
    const offset = -currentIndex * imageWidth;

    console.log("imageWidth (with double gap):", imageWidth);
    console.log("currentIndex:", currentIndex);
    console.log("offset:", offset);

    carousel.style.transform = `translateX(${offset}px)`;
  }

  // Radio inputs change
  radios.forEach((radio, index) => {
    radio.addEventListener("change", () => {
      currentIndex = index;
      updateCarouselPosition();
    });
  });

  // First input set
  radios[0].checked = true;
  updateCarouselPosition();

  window.addEventListener("resize", updateCarouselPosition);
});
