window.onload = function()
{
        window.mobileAndTabletcheck = function() {
          var check = false;
          (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
          return check;
        };
        
        var language = $('body').attr('lang');
        var currentFlag = $('#'+language+'-flag').detach();
        $('.flag-container .flag-inner').prepend(currentFlag);
        
        if (!mobileAndTabletcheck () && $(window).outerWidth() > 767) {
        
                $('.included-games').slick({
                    centerMode: false,
                    slidesToShow: 1,
                    lazyLoad: 'ondemand',
                    cssEase: 'ease-in-out',
                    speed: 200,
                    infinite: true,
                    slidesToScroll: 1,
                    arrows: false,
                    responsive: [
                      {
                        breakpoint: 768,
                        settings: {
                          arrows: false,
                          centerMode: true,
                          centerPadding: '0',
                          slidesToShow: 1
                        }
                      },
                      {
                        breakpoint: 480,
                        settings: {
                          arrows: false,
                          centerMode: true,
                          centerPadding: '0',
                          slidesToShow: 1
                        }
                      }
                    ]
                });
        }

        $('.individual-game-logo').on('click', function ()
        {
                if ($(this).hasClass('timeline'))
                {
                        window.location = $(this).attr('href');     
                }
                else
                {
                        $('.individual-game-logo').removeClass('active');
                        $(this).addClass('active');
                        var logoParent = $(this).parent();
                        var sortedList = $('.individual-game-logo', logoParent);
                        var gameSlot = $.inArray(this, sortedList);
                        
                        var slider = $('.included-games');
                        slider[0].slick.slickGoTo(gameSlot);
                }
        });
        
        if (!mobileAndTabletcheck ()) {
        
                $('.trailer-parent').on('init', function(){
                        $('.single-trailer-parent').removeClass('left-trailer').removeClass('right-trailer');
                        $('.single-trailer-parent[data-slick-index=-1] .trailer-house').addClass('left-trailer');
                        $('.single-trailer-parent[data-slick-index=1] .trailer-house').addClass('right-trailer');
                });
        }
        
        $('.trailer-parent').slick({
            centerMode: true,
            slidesToShow: 1,
            lazyLoad: 'ondemand',
            cssEase: 'ease-in-out',
            speed: 200,
            infinite: false,
            slidesToScroll: 1,
            arrows: true,
            adaptiveHeight: false,
                prevArrow: '<div class="slick-prev-arrow"></div>',
                nextArrow: '<div class="slick-next-arrow"></div>',
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '0',
                  slidesToShow: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '0',
                  slidesToShow: 1
                }
              }
            ]
        });
        
        
        
        // Detect objectFit support
        if('objectFit' in document.documentElement.style === false) {
          // assign HTMLCollection with parents of images with objectFit to variable
          var container = document.getElementsByClassName('legal-logo');
          // Loop through HTMLCollection
          for(var i = 0; i < container.length; i++) {
            // Asign image source to variable
            var imageSource = container[i].querySelector('img').src;
            // Hide image
            container[i].querySelector('img').src = '';
          }
        }
        
        $('body').append('<script>'+
                'var versaTag = {};'+
                'versaTag.id = "6562";'+
                'versaTag.sync = 0;'+
                'versaTag.dispType = "js";'+
                'versaTag.ptcl = "HTTP";'+
                'versaTag.bsUrl = "bs.serving-sys.com/BurstingPipe";'+
                'versaTag.activityParams = {'+
                '"Session":""'+
                '};'+
                'versaTag.retargetParams = {};'+
                'versaTag.dynamicRetargetParams = {};'+
                'versaTag.conditionalParams = {};'+
                '</script>'+
                '<script id="ebOneTagUrlId" src="http://ds.serving-sys.com/SemiCachedScripts/ebOneTag.js"></script>'+
                '<noscript>'+
                '<iframe src="http://bs.serving-sys.com/BurstingPipe?'+
                'cn=ot&amp;'+
                'onetagid=6562&amp;'+
                'ns=1&amp;'+
                'activityValues=$$Session=[Session]$$&amp;'+
                'retargetingValues=$$$$&amp;'+
                'dynamicRetargetingValues=$$$$&amp;'+
                'acp=$$$$&amp;"'+
                'style="display:none;width:0px;height:0px"></iframe>'+
                '</noscript>'
        );
        
        var pageSecondSection = $('.section')[1];
        
        var topofDiv = 225; //gets offset of header
  
        if (!mobileAndTabletcheck () && $(window).outerWidth() > 767) {
        
                $(window).scroll(function(){
                    if($(window).scrollTop() > (topofDiv)){
                       $(".fixed-main-navigation").fadeIn('slow');
                    }
                    else{
                       $(".fixed-main-navigation").fadeOut('slow');
                    }
                });
                
                $('.trailer-parent').on('afterChange', function(event, slick, currentSlide, direction){
                        $('.single-trailer-parent').removeClass('left-trailer').removeClass('right-trailer');
                        $('.single-trailer-parent[data-slick-index='+parseInt(currentSlide - 1)+'] .trailer-house').addClass('left-trailer');
                        $('.single-trailer-parent[data-slick-index='+parseInt(currentSlide + 1)+'] .trailer-house').addClass('right-trailer');
                });
        }
        
        $('.single-game-nav .nav-item, .fixed-single-game-nav .nav-item').on('click', function (e)
        {
                e.preventDefault();
                $.magnificPopup.close();
                var target = '#'+$(this).attr('data-target');
                $.smoothScroll({
                  scrollTarget: target,
                  offset: -200
                });
                return false;
        });
        
        $('.retailer-select').on('change', function ()
        {
                var retailerUrl = $(this).val();
                
                $('.buy.outbound').each(function ()
                {
                        if ($(this).hasClass('limited')) {
                            //code      
                        }
                        else
                        {
                                $(this).attr('href','');
                                $(this).attr('href',retailerUrl);
                        }
                });       
        });
        
        $('.avatars-slider').slick({
            centerMode: false,
            slidesToShow: 3,
            lazyLoad: 'ondemand',
            cssEase: 'ease-in-out',
            speed: 200,
            infinite: true,
            slidesToScroll: 1,
            arrows: true,
            adaptiveHeight: true,
                prevArrow: '<div class="slick-prev-arrow"></div>',
                nextArrow: '<div class="slick-next-arrow"></div>',
                focusOnSelect: false,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '0',
                  slidesToShow: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '0',
                  slidesToShow: 1
                }
              }
            ]
        });
        
        $('.medals-slider').slick({
            centerMode: false,
            slidesToShow: 3,
            lazyLoad: 'ondemand',
            cssEase: 'ease-in-out',
            speed: 200,
            infinite: true,
            slidesToScroll: 1,
            arrows: true,
            adaptiveHeight: true,
                prevArrow: '<div class="slick-prev-arrow"></div>',
                nextArrow: '<div class="slick-next-arrow"></div>',
                focusOnSelect: false,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '0',
                  slidesToShow: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '0',
                  slidesToShow: 1
                }
              }
            ]
        });
        
        
        $('.heroes-slider').slick({
            centerMode: true,
            slidesToShow: 3,
            lazyLoad: 'ondemand',
            cssEase: 'ease-in-out',
            speed: 200,
            infinite: true,
            slidesToScroll: 1,
            arrows: true,
            adaptiveHeight: true,
                prevArrow: '<div class="slick-prev-arrow"></div>',
                nextArrow: '<div class="slick-next-arrow"></div>',
                focusOnSelect: true,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '0',
                  slidesToShow: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '0',
                  slidesToShow: 1
                }
              }
            ]
        });
        
        $('.villains-slider').slick({
            centerMode: true,
            slidesToShow: 3,
            lazyLoad: 'ondemand',
            cssEase: 'ease-in-out',
            speed: 200,
            infinite: true,
            slidesToScroll: 1,
            arrows: true,
            adaptiveHeight: true,
                prevArrow: '<div class="slick-prev-arrow"></div>',
                nextArrow: '<div class="slick-next-arrow"></div>',
                focusOnSelect: true,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '0',
                  slidesToShow: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '0',
                  slidesToShow: 1
                }
              }
            ]
        });
        
        $('.xiii-slider').slick({
            centerMode: false,
            slidesToShow: 1,
            lazyLoad: 'ondemand',
            cssEase: 'ease-in-out',
            speed: 200,
            infinite: false,
            slidesToScroll: 1,
            arrows: true,
            adaptiveHeight: true,
                prevArrow: '<div class="slick-prev-arrow"></div>',
                nextArrow: '<div class="slick-next-arrow"></div>',
                focusOnSelect: true,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '0',
                  slidesToShow: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '0',
                  slidesToShow: 1
                }
              }
            ]
        });

        $('.character-text-slider').slick({
            centerMode: true,
            slidesToShow: 1,
            lazyLoad: 'ondemand',
            cssEase: 'ease-in-out',
            speed: 200,
            infinite: true,
            slidesToScroll: 1,
            arrows: false,
            adaptiveHeight: true,
            fade: true,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '0',
                  slidesToShow: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '0',
                  slidesToShow: 1
                }
              }
            ]
        });
        
        $('.worlds-slider').slick({
            centerMode: false,
            slidesToShow: 3,
            lazyLoad: 'ondemand',
            cssEase: 'ease-in-out',
            speed: 200,
            infinite: true,
            slidesToScroll: 3,
            arrows: true,
            adaptiveHeight: true,
                prevArrow: '<div class="slick-prev-arrow"></div>',
                nextArrow: '<div class="slick-next-arrow"></div>',
                focusOnSelect: false,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '0',
                  slidesToShow: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '0',
                  slidesToShow: 1
                }
              }
            ]
        });
        
        $('.heroes-slider').on('afterChange', function(event, slick, currentSlide, direction){
                var parentSlider = $('.single-character[data-slick-index='+currentSlide+']', this).parent().parent().parent().parent();
                $('.single-character').removeClass('active');
                $('.character-text-slider').removeClass('active');
                $('.single-character[data-slick-index='+currentSlide+']', parentSlider).addClass('active');
                var textSlider = $('.character-text-slider', parentSlider);
                $('.character-text-slider', parentSlider).addClass('active');
                textSlider[0].slick.slickGoTo(currentSlide);
        });
        
        $('.villains-slider').on('afterChange', function(event, slick, currentSlide, direction){
                var parentSlider = $('.single-character[data-slick-index='+currentSlide+']', this).parent().parent().parent().parent();
                $('.single-character').removeClass('active');
                $('.character-text-slider').removeClass('active');
                $('.single-character[data-slick-index='+currentSlide+']', parentSlider).addClass('active');
                var textSlider = $('.character-text-slider', parentSlider);
                $('.character-text-slider', parentSlider).addClass('active');
                textSlider[0].slick.slickGoTo(currentSlide);
        });
        
        $('.xiii-slider .single-character').on('click', function(){
                $('.single-character').removeClass('active');
                $(this).addClass('active');
                $('.character-text-slider').removeClass('active');
                $('.xiii .character-text-slider').addClass('active');
        });
        
        $('.uil-ring-css').removeClass('active');
        $('body').removeClass('still-loading');

};
