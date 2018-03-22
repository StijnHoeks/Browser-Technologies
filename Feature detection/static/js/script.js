
(function() {

    "use strict"

    var app = {
        init: function() {
            nav.hamburger()
            detect.device()
            detect.feature()
        }
    }
    var nav = {
        hamburger: function() {

            var nav = document.getElementById('nav');
            var hamburger = document.getElementById('hamburger');

            hamburger.addEventListener("click", function() {
                nav.classList.toggle('showmenu');
            })

        }
    }
    var detect =  {
        device: function() {
            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                $('body').addClass('isMobile')
            }
        },
        feature: function() {
            if (window.CSS && CSS.supports('object-fit','contain')) {
                document.querySelectorAll('a>img').classList.add('fallback');
            }
        }
    }
    var sparkle = {

    }

    app.init()

})()
