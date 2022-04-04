import './styles/index.scss'
import $ from "jquery";


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
  })


})