
(function() {

    "use strict"

    var app = {
        init: function() {
            nav.hamburger()
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

    app.init()

})()
