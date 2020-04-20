(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

  $("#selectNZD").click(() => {
    $("#currency-options").children().removeClass("selected")
    $("#selectNZD").addClass("selected")
    $("#currency-info").children().hide()
    $(".nzd-info").show()
  })

  $("#selectAUD").click(() => {
    $("#currency-options").children().removeClass("selected")
    $("#selectAUD").addClass("selected")
    $("#currency-info").children().hide()
    $(".aud-info").show()
  })

  $("#selectUSD").click(() => {
    $("#currency-options").children().removeClass("selected")
    $("#selectUSD").addClass("selected")
    $("#currency-info").children().hide()
    $(".usd-info").show()
  })

  $("#selectSING").click(() => {
    $("#currency-options").children().removeClass("selected")
    $("#selectSING").addClass("selected")
    $("#currency-info").children().hide()
    $(".sing-info").show()
  })

  $("#selectGBP").click(() => {
    $("#currency-options").children().removeClass("selected")
    $("#selectGBP").addClass("selected")
    $("#currency-info").children().hide()
    $(".gbp-info").show()
  })

  $("#selectEUR").click(() => {
    $("#currency-options").children().removeClass("selected")
    $("#selectEUR").addClass("selected")
    $("#currency-info").children().hide()
    $(".eur-info").show()
  })

  // Small Package Pricing

  $("#smSelectNZD").click(() => {
    $("#currency-options-sm").children().removeClass("selected")
    $("#smSelectNZD").addClass("selected")
    $("#currency-info-sm").children().hide()
    $(".nzd-info-sm").show()
  })

  $("#smSelectAUD").click(() => {
    $("#currency-options-sm").children().removeClass("selected")
    $("#smSelectAUD").addClass("selected")
    $("#currency-info-sm").children().hide()
    $(".aud-info-sm").show()
  })

  $("#smSelectUSD").click(() => {
    $("#currency-options-sm").children().removeClass("selected")
    $("#smSelectUSD").addClass("selected")
    $("#currency-info-sm").children().hide()
    $(".usd-info-sm").show()
  })

  $("#smSelectSING").click(() => {
    $("#currency-options-sm").children().removeClass("selected")
    $("#smSelectSING").addClass("selected")
    $("#currency-info-sm").children().hide()
    $(".sing-info-sm").show()
  })

  $("#smSelectGBP").click(() => {
    $("#currency-options-sm").children().removeClass("selected")
    $("#smSelectGBP").addClass("selected")
    $("#currency-info-sm").children().hide()
    $(".gbp-info-sm").show()
  })

  $("#smSelectEUR").click(() => {
    $("#currency-options-sm").children().removeClass("selected")
    $("#smSelectEUR").addClass("selected")
    $("#currency-info-sm").children().hide()
    $(".eur-info-sm").show()
  })

})(jQuery); // End of use strict
