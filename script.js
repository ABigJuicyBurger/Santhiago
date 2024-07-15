window.addEventListener("scroll", function () {
  const scrollPosition =
    window.pageYOffset || document.documentElement.scrollTop;
  const maxScroll =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollPercentage = scrollPosition / maxScroll;

  const waves = document.querySelectorAll(".wave");

  waves.forEach((wave) => {
    wave.style.opacity = 1 - scrollPercentage;
  });

  const body = document.querySelector("body");

  if (scrollPosition > 0) {
    body.style.backgroundColor = "blue";
  } else {
    body.style.backgroundColor = "red";
  }
});

// for (let i = 0; i < 10; i++) {
//   heading.style.opacity = i / 10;
// }
