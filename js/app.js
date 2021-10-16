//mega-menu visibility
$('#product').hover(() => {
    $('.mega-menu').addClass('visible');
}, () => {
    $('.mega-menu').removeClass('visible');
})

$('.mega-menu').hover(function () {
    $(this).addClass('visible');
}, function () {
    $(this).removeClass('visible');
})

//////////////////////////////////
//navbar toggling
$('.user-nav').click(() => {
    $('.user-nav__toggle').toggleClass('close');
})
