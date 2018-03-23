
(function() {

    "use strict"

    var app = {
        init: function() {
            nav.hamburger()
            fallback.body()
            enhance.body()
        }
    }
    var nav = {
        hamburger: function() { 
            var nav = document.getElementById('nav');
            nav.addEventListener("click", function() {
                nav.classList.toggle('showmenu');
            })
        }
    }
    var fallback = {
        body: function() {
            if ( !window.CSS && !CSS.supports('object-fit','contain')) {
                document.querySelectorAll('a>img').classList.add('fallback');
            }
        }
    }
    var enhance = {
        body: function() {
            var body = document.getElementById('body');
            body.classList.add('enhanced');
        }
    }

    app.init()

})()
