(function ($) {
  "use strict";

  // :: Preloader Active Code
  $(window).on("load", function () {
    $(".pr-circle").fadeOut();
    $("#preloader").delay(550).fadeOut("slow");
  });

  // Sticky navbar and show back-top button
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 150) {
      $(".navbar").removeClass("sticky");
      $("#back-top").fadeOut(700);
    } else {
      $(".navbar").addClass("sticky");
      $("#back-top").fadeIn(700);
    }
  });

  // Add smooth scrolling to all links
  $("a.nav-link, a.current-link").on('click', function(event) {
    if (this.hash !== "" && location.pathname == "/") {
      event.preventDefault();
      var hash = this.hash;
      var scrollTop = $(hash).offset().top - 100;
      $('html, body').animate({
        scrollTop: scrollTop
      }, 800);
    }
  });

  jQuery(document).ready(function ($) {


    $(".navbar-toggler").click(function() {
      var navbar = $(".navbar-collapse");
      if (navbar.hasClass("opened")) {
        navbar.removeClass("opened");
        $("body").removeClass("navOpened");
        $(".navbar-toggler").removeClass("toggle-clicked");
      } else {
        navbar.addClass("opened");
        $("body").addClass("navOpened");
        $(".navbar-toggler").addClass("toggle-clicked");
      }
    });

    $(".nav-link").click(function() {
      $(".navbar-toggler").click();
    })

    $('.collapse').on('show.bs.collapse', function () {
      $(this).parent().addClass('active');
    });
  
    $('.collapse').on('hide.bs.collapse', function () {
      $(this).parent().removeClass('active');
    });

    var animateScroll = function (_this, event) {
      event.preventDefault();
      var id  = $(_this).attr('href'),
          top = $(id).offset().top-70;
      $('body,html').animate({scrollTop: top}, 1000);
    };


    var setModalSendContent = function (isBtn=false, title=undefined) {
      if (title === undefined) {
        var linkTxt = "Вернуться";
        var selectVal = isBtn ? "Junior-разработчик" : "Другое"
      } else {
        var linkTxt = "Вернуться к вакансии " + title;
        var selectVal = title;
      }

      $("#send-modal #back-to-modal").text(linkTxt);
      $("#send-modal .c-choice-dropdown select").val(selectVal).change();
      $("#send-modal .c-choice-dropdown select").trigger("click");
    };

    $(document).on("click", ".btn-primary", function () {
      $("#otherTxt").css("display", "none");
      var title = $(this).data('title');
      setModalSendContent(true, title);
    });

    $(document).on("click", "#otherVac", function () {
      $("#otherTxt").css("display", "block");
      setModalSendContent();
    });
  });
})(jQuery);