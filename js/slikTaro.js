$(document).ready(function(){
    $('.slider').slick({
        arrows: true,
        pauseOnFocus:true,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        dots: true,

        autoplay:true,
        pauseOnFocus:true,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        autoplaySpeed:2000,

        waitForAnimate:false,

        slidesToShow:2,
        centerMode:true, 
        responsive:[

             , {
                breakpoint: 920,
                settings: {
                    slidesToShow:1, 
                    arrows: false,

                }
            }

        ],
    });    
});



