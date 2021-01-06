// $(document).ready(function(){

// $('.items').slick({
// // infinite: true,
// slidesToShow: 2,
// // slidesToScroll: 4,
// // rows: 1,
// swipeToSlide: true
// });
// });
$(document).ready(function(){

$('.items1').slick({
infinite: true,
slidesToShow: 4,
slidesToScroll: 2
});
});

$(".comment").shorten({
    "showChars" : 20,
    "moreText"  : "Xem thêm",
    "lessText"  : "Rút gọn",
});