(function () {
  "use strict";

  $(document).ready(function () {

    $("#ev-nav").navigation({
      offCanvasSide: "right",
      effect: "slide"
    });
    $('.side-slider').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false
    });

    $('.count-wrap').tilt({
      perspective: 1000,
    });

    $(function () {
      $('.unveiled-navigation').unveiledNavigation({
        unveilAtBottom: false,
        unveilAtTop: true,
        acceleration: 10,
        topClass: 'at-top',
      });

      $('.match-height').matchHeight();
    });

    if ($('#map').length) {
      var map = new GMaps({
        el: '#map',
        lat: -12.043333,
        lng: -77.028333,
        zoomIn: 130,
      });

      map.addMarker({
        lat: -12.043333,
        lng: -77.028333,
        zoomIn: 130,
        title: 'Lima',
        infoWindow: {
          content: '<p>HTML Content</p>'
        }
      });
    }
    if ($('#hero-slider').length) {
      jQuery('#hero-slider').show().revolution({

        /* options are 'auto', 'fullwidth' or 'fullscreen' */
        sliderLayout: 'fullscreen',
        minHeight: "900",
        delay: 8000,

        /* basic navigation arrows and bullets */
        navigation: {
          arrows: {
            enable: true,
            style: 'hades',
            tmp: '<div class="tp-arr-allwrapper"><div class="tp-arr-imgholder"></div></div>',
          },
          bullets: {
            enable: false,
          }
        }
      });
    }

    var $nav = $('.nav');

    var _this = this;

    $nav.each(function () {
      var $this = $(this),
        $active = $this.find('a.active'),
        $field = $('<h6 class="nav-current">' + $active.html() + '</h6>');

      $this.wrapAll('<div class="nav-wrapper"></div>')

      $this.before($field);

      $field.on('click', function () {
        if (!$this.is('.open')) $this.stop(true, true).slideDown(250).addClass('open');
        else $this.stop(true, true).slideUp(150).removeClass('open');
      });

      $this.on('click', 'a', function () {
        $field.html($(this).html());
      });

      $('body').on('click', function (event) {
        var $target = $(event.target);

        if (!$target.closest($field).length && $this.is('.open')) {
          $this.stop(true, true).slideUp(150).removeClass('open');
        }
      });
    });

    /* ---------------------------------------------
             CONTACT FORM
             --------------------------------------------- */
    $('.contact-form').on('submit', function (e) {
      e.preventDefault();
      var $this = $(this);

      $('button[type="submit"]', this).attr('disabled', 'disabled');
      $('.ast_loader', this).fadeIn();

      var form_data = $this.serialize();

      var required = 0;
      $(".required", this).each(function () {
        if ($(this).val() === '') {
          $(this).addClass('reqError');
          required += 1;
        } else {
          if ($(this).hasClass('reqError')) {
            $(this).removeClass('reqError');
            if (required > 0) {
              required -= 1;
            }
          }
        }
      });

      if (required === 0) {
        $.ajax({
          type: 'POST',
          url: 'ajax/mail.php',
          data: {
            form_data: form_data
          },
          success: function (data) {
            $('button[type="submit"]', $this).removeAttr('disabled');
            $('.ast_loader', $this).fadeOut();

            $this.remove('.ast_con_message');
            $('.ast_con_message', $this).fadeIn().html('Congratulation! Message successfully sent.');
            setTimeout(function () {
              $('.ast_con_message', $this).fadeOut().html('');
            }, 5000);
          }
        });
      } else {
        $('button[type="submit"]', $this).removeAttr('disabled');
        $('.ast_loader', $this).fadeOut();
        $('.ast_con_message', $this).fadeOut().html('');
      }

    });
    $(".required").on('keyup', function () {
      $(this).removeClass('reqError');
    });
    if ($('.counter').length) {
      $('.counter').counterUp();
    }

    var openclick = $('.open-offcanvas');
    var closeclick = $('.closebtn')
    openclick.on('click', function (e) {
      e.preventDefault();
      $('#mySidenav').fadeIn();
      document.getElementById("innar-side").style.right = "0";
    });
    closeclick.on('click', function (e) {
      e.preventDefault();
      $('#mySidenav').fadeOut();
      document.getElementById("innar-side").style.right = "-350px";
    });
    $(document).click(function () {
      $('#mySidenav').fadeOut();
      document.getElementById("innar-side").style.right = "-350px";
    });
    $(".sidenav-menu").click(function (e) {
      e.stopPropagation();
    });
    $(".open-offcanvas").click(function (e) {
      e.stopPropagation();
    });

    $('.close-overlay').click(function (e) {
      $('.search-overlay').fadeOut();
      e.preventDefault();
    });
    $('.open-search').click(function (e) {
      $('.search-overlay').fadeIn();
      e.preventDefault();
    });
    $('.shopping-click').click(function (e) {
      $('.dropdown-cart').toggle();
      e.preventDefault();
    });
    $(document).click(function () {
      $('.dropdown-cart').fadeOut();
    });
    $(".shopping-click").click(function (e) {
      e.stopPropagation();
    });
    if (jQuery('#parallax_wrap').length) {
      var parallax_wrap = document.getElementById('parallax_wrap');
      var parallaxInstance = new Parallax(parallax_wrap);
    }
  });
  var btn = $('#top-button');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, '300');
  });

  // Sticky Nav
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 20) {
      $("#top-nav").addClass("ev-nav-fixed");
    } else {
      $("#top-nav").removeClass("ev-nav-fixed");
    }
  });

  (function ($, window, document, undefined) {
    'use strict';

    // init cubeportfolio
    $('#js-grid-masonry').cubeportfolio({
      layoutMode: 'grid',
      animationType: 'slideDelay',
      gapHorizontal: 0,
      gapVertical: 0,
      gridAdjustment: 'responsive',
      plugins: {
        loadMore: {
          element: '#js-loadMore-juicy-projects',
          action: 'click',
          loadItems: 5,
        },
        sort: {
          element: '#js-sort-juicy-projects',
        }
      },
      mediaQueries: [{
        width: 1500,
        cols: 5,
      }, {
        width: 1100,
        cols: 4,
      }, {
        width: 800,
        cols: 3,
      }, {
        width: 480,
        cols: 2,
        options: {
          caption: '',
          gapHorizontal: 10,
          gapVertical: 10,
        }
      }],
      caption: 'zoom',
      displayType: 'fadeIn',
      displayTypeSpeed: 100,

      // lightbox
      lightboxDelegate: '.cbp-lightbox',
      lightboxGallery: true,
      lightboxTitleSrc: 'data-title',
      lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
    });
  })(jQuery, window, document);


  function makeTimer() {

    //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");
    let endTime = new Date("06 June 2020 9:00:00 GMT+01:00");
    endTime = (Date.parse(endTime) / 1000);

    let now = new Date();
    now = (Date.parse(now) / 1000);

    let timeLeft = endTime - now;

    let days = Math.floor(timeLeft / 86400);
    let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }

    $("#days").html(days + "<span>Días</span>");
    $("#hours").html(hours + "<span>Horas</span>");
    $("#minutes").html(minutes + "<span>Min.</span>");
    $("#seconds").html(seconds + "<span>Seg.</span>");

  }

  setInterval(function () {
    makeTimer();
  }, 1000);

  // Preloader
  if ($('.preloader').length) {
    $(window).on('load', function () { // makes sure the whole site is loaded
      $('.cp-preloader').fadeOut('slow');
      $('.preloader').delay(400).fadeOut('slow');
    });
  }
})()
