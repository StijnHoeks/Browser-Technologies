
(function() {

    "use strict"

    var app = {
        init: function() {
            nav.hamburger()
            detect.feature()
        }
    }
    var nav = {
        hamburger: function() { 
            var nav = document.getElementById('nav');
            var body = document.getElementById('body');
            nav.classList.add('enhanced');
            body.classList.add('enhanced')
            var hamburger = document.getElementById('hamburger');
            hamburger.addEventListener("click", function() {
                nav.classList.toggle('showmenu');
            })
        }
    }
    var detect =  {
        feature: function() {
            if ( !window.CSS && !CSS.supports('object-fit','contain')) {
                document.querySelectorAll('a>img').classList.add('fallback');
            }
        }
    }

    app.init()

})()
