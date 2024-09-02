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
    // ドロワーメニューを閉じる
    hamburger.removeClass('drawer-menu-active');
});

//SmartTab
//タブ
$('#smarttab').smartTab({
    enableUrlHash: false
});



//スムーススクロール
$(function () {
    $('a[href^="#"]').click(function () {
        hamburger.removeClass('drawer-menu-active');
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        var speed = 500;
        $("html, body").animate({
            scrollTop: position
        }, speed, "swing");
        return false;
    });
});