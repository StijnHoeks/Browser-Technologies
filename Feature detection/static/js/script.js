
(function() {

    "use strict"

    var app = {
        init: function() {
            nav.hamburger()
        }
    }
    var detect =  {
        device: function() {
            /*if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                $('body').addClass('isMobile')
            }*/
        }
    }
    var sparkle = {

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

    app.init()

})()
