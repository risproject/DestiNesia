document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("scroll", function() {
      var navbar = document.querySelector(".navbar");
      if (window.scrollY > 25) { // Atur jarak scroll sesuai keinginan
        navbar.classList.add("navbar-backdrop");
      } else {
        navbar.classList.remove("navbar-backdrop");
      }
    });
  });