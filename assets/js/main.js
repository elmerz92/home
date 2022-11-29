/**
* Template Name: Personal - v2.5.1
* Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  const currentYear = new Date().getFullYear();
  const previousYear =  currentYear-2014;
  $('#date-experience').html(previousYear);

  // Nav Menu
  $(document).on('click', '.nav-menu a, .mobile-nav a', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var hash = this.hash;
      var target = $(hash);
      if (target.length) {
        e.preventDefault();

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if (hash == '#header') {
          $('#header').removeClass('header-top');
          $("section").removeClass('section-show');
          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
            $('.mobile-nav-overly').fadeOut();
          }
          return;
        }

        if (!$('#header').hasClass('header-top')) {
          $('#header').addClass('header-top');
          setTimeout(function() {
            $("section").removeClass('section-show');
            $(hash).addClass('section-show');

          }, 350);
        } else {
          $("section").removeClass('section-show');
          $(hash).addClass('section-show');
        }

        $('html, body').animate({
          scrollTop: 0
        }, 350);

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }

        return false;

      }
    }
  });

  // Activate/show sections on load with hash links
  if (window.location.hash) {
    var initial_nav = window.location.hash;
    if ($(initial_nav).length) {
      $('#header').addClass('header-top');
      $('.nav-menu .active, .mobile-nav .active').removeClass('active');
      $('.nav-menu, .mobile-nav').find('a[href="' + initial_nav + '"]').parent('li').addClass('active');
      setTimeout(function() {
        $("section").removeClass('section-show');
        $(initial_nav).addClass('section-show');
      }, 350);
    }
  }

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Skills section
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

  });

  // Initiate venobox (lightbox feature used in portofilo)
  $(document).ready(function() {
    $('.venobox').venobox({
      'share': false
    });
  });



  particlesJS("particles-js", {"particles":{"number":{"value":50,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":20,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":3,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});


  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });


  var sections = [
  		{	sentence: "is an passionate front-end developer living in Bogotá."
  		},
  		{	sentence: "is probably writing code right now."
  		},
  		{	sentence: "is learning more animations and practicing GSAP"
  		},
  		{	sentence: "looks inspiration on Codepen."
  		},
  		{	sentence: "is working on some Shopify store."
  		},
  		{	sentence: "it's looking forward to get better."
  		},
  		{	sentence: "who?"
  		},
  		{	sentence: "is practicing more Vue"
  		},
  		{	sentence: "love playing videogames."
  		},
  		{	sentence: "thanks you if you are still watching this messages."
  		},
  		{	sentence: "loves websites with animations and creative design."
  		},
  		{	sentence: "likes to work while listening music."
  		}
  	];
  var i = 0;
  var j = 0;
  var k = 0;
  var lengthSentence = 0;
  var lengthArray = sections.length;
  var forward = true;
  var beginning = "";
  var currentPart = "";
  var interval = 50; // interval letter
  var opening = false;
  var pauseEnd = 2500; // pause end sentence

  /* -----------------------
      TYPING
  -------------------------*/
  function writing(text){
  	lengthSentence = sections[i].sentence.length;
  	var body = $("body");
  	if(!opening){ // first part
  		setTimeout(function(){
  			if(k < beginning.length){
  				if(beginning[k] === "<"){
  					currentPart += ' <br id="brName">';
  					k=k+4;
  				}
  				currentPart += beginning[k];
  				text.html(currentPart);
  				k++;
  				writing(text);
  			}else if(k === (beginning.length)){
  				currentPart += "";
  				text.html(currentPart);
  				opening = true;
  				writing(text);
  			}
  		},interval);
  	}else if(opening){ // sentences
  		setTimeout(function(){
  			interval = 50;
  			if(j === lengthSentence){
  				forward = false;
  			}
  			if(j === lengthSentence-2){
  				$(".original").one().addClass("onScreen");
  			}
  			if( j === lengthSentence-1 && forward){
  				interval = pauseEnd;
  			}
  			if(j < lengthSentence && forward ){
  				if(sections[i].sentence[j] === "&"){
  					currentPart += "<strong>";
  				}else if(sections[i].sentence[j] === "%"){
  					currentPart += "</strong>";
  				}
  				else{
  					currentPart += sections[i].sentence[j];
  				}
  				text.html(currentPart);
  				j++;
  			}else if(j > 0 && !forward){
  				if(sections[i].sentence[j] === "&"){
  					currentPart = currentPart.slice(0, - 8);
  				}else if(sections[i].sentence[j] === "%"){
  					currentPart = currentPart.slice(0, - 9);
  				}
  				else{
  					currentPart = currentPart.slice(0, - 1);
  				}
  				text.html(currentPart);
  				j--;
  			}else if(j === 0){
  				forward = true;
  				i++;
  			}
  			if(i === lengthArray){
  				i = 0;
  			}
  			writing(text);
  		}, interval);
  	}
  }

  $(document).ready(function(){
  	/*--------------------
  		TYPING
  	----------------------*/
  	var firstTimer = 1000;
  	var text = $(".jstext");
  	setTimeout(function(){
  		writing(text);
  	}, firstTimer);

  });

})(jQuery);
