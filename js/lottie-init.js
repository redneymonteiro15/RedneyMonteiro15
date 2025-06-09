document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.lottie').forEach(function (el) {
    const path = el.getAttribute('data-animation');

    lottie.loadAnimation({
      container: el,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: path
    });
  });
});
