$(function(){
  $('.blog-info').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    dots:true,
  });
  //feature part
  $('.feat-right-main').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    autoplaySpeed: 2000,
    speed:2000,
    centerMode:true,
    vertical:true,
    dots:true,
    centerPadding:0,
  });

//banner image 
  $('.banner-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:'.left',
    nextArrow:'.right',
    speed:1000,
  });

      //brand part  
      $('.brand-main').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow:'.left3',
        nextArrow:'.right3',
        centerPadding:false,
        autoplay:true,
         focusOnSelect: true,
        autoplaySpeed: 2000,
      });

//service part//

///
      //counter part goes here

$('.counter').counterUp({
  delay: 10,
  time: 1000
});


//back to top

$('.back-to-top') .click(function(){
  $('html , body').animate({scrollTop:0} ,1500);


});

$(window).scroll(function(){

  var scrolling = $(this).scrollTop();
  if ( scrolling > 200 ){
      $('.back-to-top').fadeIn(500);
  }
 else{
  $('.back-to-top').fadeOut(500);
 }
 

});

//preloader part 

$(window).on('load' , function(){
$('.preloader') .delay(1800).fadeOut(1000);





});

$(function(){

  $('.venobox').venobox(); 




});


//animation scroll js
var html_body = $('html, body');
$('nav a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 0
            }, 1500);
            return false;
        }
    }
});

//animation scroll js
var html_body = $('html, body');
$('.end-menu a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 0
            }, 1500);
            return false;
        }
    }
});




    });