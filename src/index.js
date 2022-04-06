import './styles/index.scss'
import $ from "jquery";
import slickCarousel from 'slick-carousel'





$(document).ready(function (){
  $('.catalog-dropdown').on('click', function (){
    // $(this).preventDefault();
    $(this).next().slideToggle();
  })


  $('.bars').on('click', function (){
    $('body').toggleClass('overflow-hidden');
    $('.mobile-nav').fadeToggle();
  });

  $('.mobile-nav__close').on('click', function (){
    $('body').removeClass('overflow-hidden');
    $('.mobile-nav').fadeOut();
  });



  const slickSl = (showCount) => {
    $('.slider').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: showCount,
      slidesToScroll: 1,
      prevArrow: '<svg class="slick-arrow slick-prev" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"/></svg>',
      nextArrow: '<svg class="slick-arrow slick-next" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/></svg>',
    });
  };

  const slides = [1,2,3,4,5,6];

  const addSlider = () => {
    $('#slider').append('<div class="slider"></div>');
  };

  const addSlides = () => {
    slides.forEach((item) => {
      $('.slider').append(`<div class='slide'><div class="slide__inner border border-gray">${item}</div></div>`)
    })
  };

  const slideLock = () => {
    let currentFocus, nextFocus, prevFocus;

    const setForFocus = () => {
      nextFocus = currentFocus.closest('.slick-slide').next().find('.slide__inner');
      prevFocus = currentFocus.closest('.slick-slide').prev().find('.slide__inner');
      if (prevFocus.length == 0)
        prevFocus = null;
      if (nextFocus.length == 0)
        nextFocus = null;
    }

    $('.slide__inner').on('click', function() {
      if ($(this).hasClass('locked')) {
        $(this).toggleClass('locked');
        currentFocus = nextFocus = prevFocus = null;
      } else {
        if (typeof currentFocus !== "undefined" &&
          currentFocus !== null)
          currentFocus.toggleClass('locked');
        $(this).toggleClass('locked');
        currentFocus = $(this);
        setForFocus();
      }

    });

    $('.slick-next').on('click', function() {
      if (typeof currentFocus !== "undefined" &&
        currentFocus !== null &&
        typeof nextFocus !== "undefined" &&
        nextFocus !== null) {
        let next_text = Number(nextFocus.text());
        let cur_text = Number(currentFocus.text());
        currentFocus.text(next_text);
        nextFocus.text(cur_text);
        currentFocus.toggleClass('locked');
        nextFocus.toggleClass('locked');
        currentFocus = nextFocus;
        setForFocus();
      }
    });

    $('.slick-prev').on('click', function() {
      if (typeof currentFocus !== "undefined" &&
        currentFocus !== null &&
        typeof prevFocus !== "undefined" &&
        prevFocus !== null) {
        let prev_text = Number(prevFocus.text());
        let cur_text = Number(currentFocus.text());
        currentFocus.text(prev_text);
        prevFocus.text(cur_text);
        currentFocus.toggleClass('locked');
        prevFocus.toggleClass('locked');
        currentFocus = prevFocus;
        setForFocus();
      }
    });

  };

  const sliderInit = (showCount) => {
    addSlider();
    addSlides();
    slickSl(showCount);
  };


  if (window.matchMedia('(min-width: 768px)').matches) {
      sliderInit(3);
      slideLock();
    }

    else if (window.matchMedia('(min-width: 501px)').matches) {
      sliderInit(2);
      slideLock();
    }

    else if (window.matchMedia('(min-width: 0px)').matches) {
      sliderInit(1);
    }



  $( window ).resize(function (){
    if (window.innerWidth > 768 && window.innerWidth < 780) {
      $('.slider').remove();
      sliderInit(3);
      slideLock();
    }

    else if (window.innerWidth < 768 && window.innerWidth > 750) {
      $('.slider').remove();
      sliderInit(2);
      slideLock();
    }

    else if (window.innerWidth < 500 && window.innerWidth > 480) {
      $('.slider').remove();
      sliderInit(1);
    }

  });








})