$(document).ready(function(){
    $('.ss-slide').slick({
        slidesToShow: 5,
        arrows: false,
        dots: true,
        centerMode: true,
    });

    $('.fdbk-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.fdbk-person'
      });
      $('.fdbk-person').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.fdbk-text',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: "0",
        adaptiveHeight: true,
        prevArrow: ".feedback-prev",
        nextArrow: ".feedback-next",
      });
      

    new VenoBox({
        selector: '.my-video-links',
        spinner: 'wave',
    });

    new VenoBox({
        selector: '.my-image-links',
        numeration: true,
        infinigall: true,
        share: true,
        spinner: 'rotating-plane'
    });
  });
          