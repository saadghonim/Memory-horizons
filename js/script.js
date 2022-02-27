
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
    autoplay:true,
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
  autoplay:true,
  margin:15,
  stagePadding: 10,
  rtl:true,
  rtl: $("html").attr("dir") == "rtl" ? true : false,
  navText: ['<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="11px" height="20px"> <path fill-rule="evenodd"   d="M10.430,9.726 L1.373,0.672 C1.160,0.458 0.818,0.458 0.604,0.672 C0.391,0.884 0.391,1.226 0.604,1.439 L9.275,10.108 L0.604,18.777 C0.391,18.990 0.391,19.332 0.604,19.545 C0.709,19.650 0.850,19.706 0.987,19.706 C1.123,19.706 1.264,19.653 1.369,19.545 L10.426,10.491 C10.639,10.281 10.639,9.935 10.430,9.726 Z"/> </svg>',
  '<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="11px" height="20px"> <path fill-rule="evenodd"   d="M0.455,9.616 L9.758,0.549 C9.977,0.336 10.328,0.336 10.547,0.549 C10.767,0.763 10.767,1.105 10.547,1.319 L1.641,9.999 L10.547,18.679 C10.767,18.892 10.767,19.235 10.547,19.448 C10.440,19.553 10.295,19.609 10.155,19.609 C10.014,19.609 9.870,19.557 9.762,19.448 L0.459,10.381 C0.240,10.172 0.240,9.826 0.455,9.616 Z"/> </svg>'],
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