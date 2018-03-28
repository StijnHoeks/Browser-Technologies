(function() {

    var app = {
        detect: function() {
            app.navcur()
            cssSticky = CSS.supports('position', 'sticky');
            if( !cssSticky ) { app.sticky() }
        },
        navcur: function() {

        },
        sticky: function() {

            var navLetter = document.querySelectorAll('aside a');
            var letter = document.querySelectorAll('#contacts ul li h1');
            var sticky = document.getElementById('sticky');
            var raf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;

            window.addEventListener('scroll', function() {
                var stickyTop = window.scrollY;
                for (var i = 0; i < letter.length; i++) {
                    var letterScrlT = letter[i].offsetTop;
                    if ( stickyTop >= letterScrlT && raf ) {
                        sticky.innerHTML = letter[i].innerHTML;
                        letter[i].classList.add('hide')
                        navLetter[i].classList.add('cur')
                    }
                    else {
                        letter[i].classList.remove('hide')
                        navLetter[i].classList.remove('cur')
                    }
                    if ( stickyTop < letter[0].offsetTop ) {
                        sticky.innerHTML = '';
                    }
                }
            }); 
        }
    }

    app.detect()

})();