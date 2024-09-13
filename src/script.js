document.addEventListener("DOMContentLoaded", function () {
  const passengerCars = document.getElementById("passengerCarsButton");
  const deliveryCars = document.getElementById("deliveryCarsButton");

  passengerCars.addEventListener("click", () => {
    passengerCars.style.color = "#0147FF";
    passengerCars.style.textDecoration = "underline";
    passengerCars.style.fontWeight = "600";

    deliveryCars.style.color = "#000000";
    deliveryCars.style.textDecoration = "none";
    deliveryCars.style.fontWeight = "normal";
  });

  deliveryCars.addEventListener("click", () => {
    deliveryCars.style.color = "#0147FF";
    deliveryCars.style.fontWeight = "600";
    deliveryCars.style.textDecoration = "underline";

    passengerCars.style.color = "#000000";
    passengerCars.style.textDecoration = "none";
    passengerCars.style.fontWeight = "normal";
  });

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
