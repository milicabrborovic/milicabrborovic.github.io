$(window).on("scroll", function(ref) {
    ref.preventDefault();
    if($(window).scrollTop()) {
          $('nav').addClass('nascrol');
    }
    else {
          $('nav').removeClass('nascrol');
    }
    if($(window).scrollTop()>200){
        $(".strelica").show();
    }else{
        $(".strelica").hide();
    }
})

$(document).ready(function(){
    $("#slider").owlCarousel({
        margin:40,
        autoplay:true,
        loop:true,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:2
            },
            768:{
                items:4
            },
            1024:{
                items:8
            }
        }
    });
});