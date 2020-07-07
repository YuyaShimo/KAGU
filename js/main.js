$(function(){

  // ハンバーガーメニュー
  $('.menu-trigger').on('click', function() {
    $(this).toggleClass('is-active');
    $('.header-nav').toggleClass('is-active');
  });

  // メインビジュアルテキストアニメーション
	// $('#animation').textillate({
  //   selector: '.texts',	// 要素を指定
  //   loop: false,	// ループ繰り返し
  //   minDisplayTime: 3000,	// アニメーションの間隔時間
  //   initialDelay: 300,	// アニメーション開始までの遅延時間
  //   autoStart: true,	// アニメーションの自動スタート
  //   inEffects: [],	// エフェクト開始時のアニメーション設定
  //   outEffects: [ 'hinge' ],	// エフェクト終了時のアニメーション設定

  //   in: {
  //     effect: 'fadeInLeftBig',	// エフェクトの指定
  //     delayScale: 1.5,	// 遅延時間の指数
  //     delay: 50,	// 文字ごとの遅延時間
  //     sync: false,	// アニメーションをすべての文字に同時に適用
  //     shuffle: false, // 文字のランダム表示
  //     reverse: false,	// エフェクトを逆に再生（「sync:true」のときは不可）
  //     callback: function () {}	// コールバック関数
  //   },

  //   out: {
  //     effect: 'hinge',  
  //     delayScale: 1.5,  
  //     delay: 50,  
  //     sync: false,  
  //     shuffle: false,
  //     reverse: false,
  //     callback: function () {}
  //   },
  //     callback: function () {},
  //     type: 'char'
  //   });

    // ヘッダープルダウンメニュー
    $(".slide").hover(
      function() {
        $(this)
          .find(".second-item")
          .stop(true)
          .slideDown(800);
      },
      function() {
        $(this)
          .find(".second-item")
          .slideUp(800);
      }
    );

    // トップへ戻るボタン
    let pagetop = $('#page_top');
    pagetop.hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
        pagetop.fadeIn();
      } else {
        pagetop.fadeOut();
      }
     });
    pagetop.click(function () {
      $('body, html').animate({ scrollTop: 0 }, 500);
      return false;
    });

    // フロントページヒーロースライダー

    // 取り扱い家具詳細ページスライダー
    $('.slider').on('init',function(){
      $('.slide-content').addClass('on');
    });     
    $('.slider').slick({
      autoplay:true,
      autoplaySpeed:5000,
      dots:true
    });
    $('.slider').on('beforeChange',function(){
      $('.slide-content').removeClass('on');
    }); 
    $('.slider').on('afterChange',function(){
      $('.slide-content').addClass('on');
    }); 

    // スムーズスクロール
    $('a[href^="#"]').click(function(){
      let adjust = 50;
      let speed = 1000;
      let href= $(this).attr("href");
      let target = $(href == "#" || href == "" ? 'html' : href);
      let position = target.offset().top - adjust;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
    });

    //マウスホバー時の画像アニメーション
    let move = -20;
    let zoom = 1.3;
  
    $('.theme-img').hover(function() {       
      width = $('.theme-img').width() * zoom;
      height = $('.theme-img').height() * zoom;
          
      $(this).find('img').stop(false,true).animate({'width':width, 'height':height, 'top':move, 'left':move}, {duration:200});
    },
    function() {
      $(this).find('img').stop(false,true).animate({'width':$('.theme-img').width(), 'height':$('.theme-img').height(), 'top':'0', 'left':'0'}, {duration:100});  
    });

    //取り扱い家具カラーのホバーアニメーション
    $('.color-item').hover(function() {  
      $(this).find('.color-icon').stop(false,true).animate({'top':'180px'},{queue:false,duration:300});
      $(this).find('.caption').stop(false,true).fadeIn(700);      
    },
    function() {
      $(this).find('.color-icon').stop(false,true).animate({'top':'0px'},{queue:false,duration:300}); 
      $(this).find('.caption').stop(false,true).fadeOut(200);      
    });
});