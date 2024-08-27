// lp1_js

//ハンバーガーボタン
var hamburger = $('.drawer-menu-container');
// OPEN/CLOSEボタンをクリックしたら
$('.hamburger-button').on('click', function () {
    console.log('click');
    // .hamburgerの表示・非表示を繰り返す
    hamburger.toggleClass('drawer-menu-active');
});
// 画面幅のサイズが変わったら
$(window).on('resize', function () {
    // console.log('resize');
    // ハンバーガーメニューを閉じる
    hamburger.removeClass('drawer-menu-active');
});

//スムーススクロール　参考：https://125naroom.com/web/2899