
$(window).load(function() {
  $(".preloader-sa").slideUp()
  $("#body_").removeClass("over_");
});
$(document).ready(function(){

//~~~~~~~~~~~~~nav~~~~~~~~

if ($(window).width() <= 767){

  $(".all_sections").click(function(){
    $(".ul_sub_menu").slideToggle("500")
  })

}
// ~~~~~~~~~~start slider~~~~~~~~
$('.slider .owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    rtl:true,
    rtl: $("html").attr("dir") == "rtl" ? true : false,
    navText: ["<i class='fas fa-angle-right'></i>", "<i class='fas fa-angle-left'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
// ~~~~~~~~~~start products~~~~~~~~~~
$('.new .owl-carousel').owlCarousel({
  loop:true,
  nav:true,
  margin:15,
  stagePadding: 10,
  rtl:true,
  rtl: $("html").attr("dir") == "rtl" ? true : false,
  navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
  responsive:{
      0:{
          items:2,
          stagePadding: 0,
      },
      600:{
          items:4
      },
      1000:{
          items:5
      }
  }
});

});

  //~~~~~~~~~~~~~nav~~~~~~~~

const menu_ = document.getElementById("nav_");
const btn_C_menu = document.getElementById("bars_");
const close_ = document.getElementById("close_");
const body_ = document.getElementById("body_");

btn_C_menu.addEventListener("click", function() {
  menu_.classList.add("open_");
  body_.classList.add("over_");
});

close_.addEventListener("click", function(){
  menu_.classList.remove("open_");
  body_.classList.remove("over_");

});