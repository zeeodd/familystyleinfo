jQuery(document).ready(function ($) {

  // Header fixed and Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
      $('#header').addClass('header-fixed');
    } else {
      $('.back-to-top').fadeOut('slow');
      $('#header').removeClass('header-fixed');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs
  new WOW().init();

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function (e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function (e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function (e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smoth scroll on page hash links
  $('a[href*="#"]:not([href="#"])').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (!$('#header').hasClass('header-fixed')) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1000, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Coming Soon Shake
  $(".appbtn").click(function() {
    $("#comingsoon").addClass("animated");
    $("#comingsoon").addClass("shake");
    setTimeout(function() {
      $("#comingsoon").removeClass("animated");
      $("#comingsoon").removeClass("shake");
    }, 1100);
  });

  // Scroll Magic
  window.onscroll = function changeNav() {

    const OFFSET = 40;

    var navBar = document.getElementById('nav-menu-container');
    var navBarHeight = navBar.getBoundingClientRect().height;

    var heroSection = document.getElementById('hero');
    var heroSectionTop = heroSection.getBoundingClientRect().top;

    var aboutSection = document.getElementById('about');
    var aboutSectionTop = aboutSection.getBoundingClientRect().top - OFFSET;

    var featureSection = document.getElementById('features');
    var featureSectionTop = featureSection.getBoundingClientRect().top - OFFSET;

    var downloadSection = document.getElementById('download');
    var downloadSectionTop = downloadSection.getBoundingClientRect().top - OFFSET;

    var teamSection = document.getElementById('team');
    var teamSectionTop = teamSection.getBoundingClientRect().top - OFFSET;

    if (aboutSectionTop <= navBarHeight) {
      document.getElementById('aboutNav').classList.add('sfHover', 'menu-active');
    } else if (aboutSectionTop >= navBarHeight) {
      document.getElementById('aboutNav').classList.remove('sfHover', 'menu-active');
    }

    if (featureSectionTop <= navBarHeight) {
      document.getElementById('featureNav').classList.add('sfHover', 'menu-active');
      document.getElementById('aboutNav').classList.remove('sfHover', 'menu-active');
    } else if (featureSectionTop >= navBarHeight) {
      document.getElementById('featureNav').classList.remove('sfHover', 'menu-active');
    }

    if (downloadSectionTop <= navBarHeight) {
      document.getElementById('downloadNav').classList.add('sfHover', 'menu-active');
      document.getElementById('aboutNav').classList.remove('sfHover', 'menu-active');
      document.getElementById('featureNav').classList.remove('sfHover', 'menu-active');
    } else if (downloadSectionTop >= navBarHeight) {
      document.getElementById('downloadNav').classList.remove('sfHover', 'menu-active');
    }

    if (teamSectionTop <= navBarHeight) {
      document.getElementById('teamNav').classList.add('sfHover', 'menu-active');
      document.getElementById('aboutNav').classList.remove('sfHover', 'menu-active');
      document.getElementById('featureNav').classList.remove('sfHover', 'menu-active');
      document.getElementById('downloadNav').classList.remove('sfHover', 'menu-active');
    } else if (teamSectionTop >= navBarHeight) {
      document.getElementById('teamNav').classList.remove('sfHover', 'menu-active');
    }

  }

});
