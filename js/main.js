$(function(){
  
  // ハンバーガーメニュー
  $('.menu-trigger').on('click', function() {
    $(this).toggleClass('is-active');
    $('.header-nav').toggleClass('is-active');
  });

});