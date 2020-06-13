$(function(){

  // ハンバーガーメニュー
  $('.menu-trigger').on('click', function() {
    $(this).toggleClass('is-active');
    $('.header-nav').toggleClass('is-active');
  });

  // メインビジュアルテキストアニメーション
	$('.animation').textillate({
    selector: '.texts',	// 要素を指定
    loop: false,	// ループ繰り返し
    minDisplayTime: 3000,	// アニメーションの間隔時間
    initialDelay: 300,	// アニメーション開始までの遅延時間
    autoStart: true,	// アニメーションの自動スタート
    inEffects: [],	// エフェクト開始時のアニメーション設定
    outEffects: [ 'hinge' ],	// エフェクト終了時のアニメーション設定

    in: {
      effect: 'fadeInLeftBig',	// エフェクトの指定
      delayScale: 1.5,	// 遅延時間の指数
      delay: 50,	// 文字ごとの遅延時間
      sync: false,	// アニメーションをすべての文字に同時に適用
      shuffle: false, // 文字のランダム表示
      reverse: false,	// エフェクトを逆に再生（「sync:true」のときは不可）
      callback: function () {}	// コールバック関数
    },

    out: {
      effect: 'hinge',  
      delayScale: 1.5,  
      delay: 50,  
      sync: false,  
      shuffle: false,
      reverse: false,
      callback: function () {}
    },
    callback: function () {},
    type: 'char'
    });

});