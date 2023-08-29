$(document).ready(function () {
  var footerContainer = $("#footer");
  function footer() {
    var links = $(
      '<div class="links"><span href="https://github.com/bmartinezr86/dynamic-jquery-blog"><a><i class="fa-brands fa-github"></i></a></span><span><a href="https://www.linkedin.com/in/bmartinezr86/"><i class="fa-brands fa-linkedin-in"></i></a></span></div>'
    );
    footerContainer.append(links);
  }

  footer();
});
