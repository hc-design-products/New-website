// Open Sidenav
(function ($) {
  ("use strict");

  // burgerMenu
  (function () {
    $(".js-colorlib-nav-toggle").on("click", function (event) {
      event.preventDefault();
      var $this = $(this);

      if ($("body").hasClass("slideout")) {
        $this.removeClass("active");
        $("body").removeClass("slideout");
      } else {
        $this.addClass("active");
        $("body").addClass("slideout");
      }
    });
  })();

  // Click outside of offcanvass
  var mobileMenuOutsideClick = function () {
    $(document).click(function (e) {
      var container = $("#colorlib-aside, .js-colorlib-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("slideout")) {
          $("body").removeClass("slideout");
          $(".js-colorlib-nav-toggle").removeClass("active");
        }
      }
    });

    $(window).scroll(function () {
      if ($("body").hasClass("slideout")) {
        $("body").removeClass("slideout");
        $(".js-colorlib-nav-toggle").removeClass("active");
      }
    });
  };
  mobileMenuOutsideClick();
})(jQuery);

/**
 * Template Name: PhotoFolio
 * Updated: Jul 27 2023 with Bootstrap v5.3.1
 * Template URL: https://bootstrapmade.com/photofolio-bootstrap-photography-website-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
document.addEventListener("DOMContentLoaded", () => {
  ("use strict");

  /**
   * Preloader
   */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      setTimeout(() => {
        preloader.classList.add("loaded");
      }, 1000);
      setTimeout(() => {
        preloader.remove();
      }, 2000);
    });
  }

  /**
   *Typer
   */
  function typeStyle() {
    var foo = jQuery("#typer");
    foo.typer(["a happy", " a product", "a UX "]);
  }

  // Call the typeStyle function
  typeStyle();

  /**
   * Initiate glightbox
   */
  // const glightbox = GLightbox({
  //   selector: ".glightbox",
  // });

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper(".slides-1", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /**
   * Init swiper slider with 3 slides at once in desktop view
   */
  new Swiper(".slides-3", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40,
      },

      1200: {
        slidesPerView: 3,
      },
    },
  });

  /**
   * Animation on scroll function and init
   */
  //   function aos_init() {
  //     AOS.init({
  //       duration: 1000,
  //       easing: "ease-in-out",
  //       once: true,
  //       mirror: false,
  //     });
  //   }
  //   window.addEventListener("load", () => {
  //     aos_init();
  //   });
});

/**
 * Switch between G1 G2
 */

$(document).ready(function () {
  // Set the default view (show gallery1 and hide gallery2)
  $("#gallery1").show();
  $("#gallery2").hide();

  // Function to handle link selection
  function selectLink(link) {
    $(".nav-g a").removeClass("selected-link"); // Remove the class from all links
    link.addClass("selected-link"); // Add the class to the selected link
  }

  // Add event listeners to the "switch to gallery" links
  $("#switchToGallery1").click(function (event) {
    event.preventDefault(); // Prevent the default link behavior
    $("#gallery2").fadeOut(300, function () {
      $("#gallery1").fadeIn(300);
      selectLink($("#switchToGallery1")); // Select the clicked link
    });
  });

  $("#switchToGallery2").click(function (event) {
    event.preventDefault(); // Prevent the default link behavior
    $("#gallery1").fadeOut(300, function () {
      $("#gallery2").fadeIn(300);
      selectLink($("#switchToGallery2")); // Select the clicked link
    });
  });
});

/**
 * Page Transition
 */

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("colorlib-main").style.opacity = 1; // Set opacity to 1 to trigger the fade-in effect
});

/**
 * Dropdown
 */

// JavaScript to toggle the dropdown when the button is clicked
const dropdownButton = document.querySelector(".dropdown-button");
const dropdownContent = document.querySelector(".dropdown-content");

dropdownButton.addEventListener("click", function () {
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
});
