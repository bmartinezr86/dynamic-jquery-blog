$(document).ready(function () {
  function scrollUp() {
    if (window.innerWidth > 760) {
      var scroll =
        '<div class="scroll-up"><i class="fa-solid fa-angle-up"></i></div>';
      $("body").append(scroll);
      window.addEventListener("scroll", function () {
        const scrollButton = document.querySelector(".scroll-up");

        if (window.scrollY > 300) {
          scrollButton.style.display = "block";
        } else {
          scrollButton.style.display = "none";
        }
      });

      document
        .querySelector(".scroll-up")
        .addEventListener("click", function () {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
  }
  scrollUp();
});
