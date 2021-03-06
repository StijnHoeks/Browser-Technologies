(function() {

    var app = {
        detect: function() {
            var sticky = document.getElementById('sticky');
            var searchbar = document.getElementById('filter');
            searchbar.classList.remove('hidden');
            app.navcur(sticky);
            cssSticky = CSS.supports('position', 'sticky');
            if ( !cssSticky ) {
                app.sticky(sticky);
            }
        },
        navcur: function() {
            var letter = document.getElementsByClassName('letter');
            var navLetter = document.querySelectorAll('aside a');
            var scrollBar = document.createElement('div')
            window.addEventListener('scroll', function() {
                for (var i = 0; i < letter.length; i++) {
                    var windowTop = window.scrollY;
                    var letterScrlT = letter[i].offsetTop;
                    if ( windowTop >= letterScrlT
                     ) {
                        navLetter[i].classList.add('cur')
                    }
                    else {
                        navLetter[i].classList.remove('cur')
                    }
                }
            });
        },
        sticky: function(sticky) {

            var letter = document.querySelectorAll('#contacts ul li h1');

            var waiting = false, endScrollHandle;
            window.addEventListener('scroll', function() {
                var windowTop = window.scrollY;
                if (waiting) {
                    return;
                }
                waiting = true;
                clearTimeout(endScrollHandle);
                for (var i = 0; i < letter.length; i++) {
                    var letterScrlT = letter[i].offsetTop;
                    if ( windowTop >= letterScrlT ) {
                        sticky.innerHTML = letter[i].innerHTML;
                        letter[i].classList.add('hide') 
                    }
                    else {
                        letter[i].classList.remove('hide')
                    }
                    if ( windowTop < letter[0].offsetTop ) {
                        sticky.innerHTML = '';
                    }
                }
                setTimeout(function () {
                    waiting = false;
                }, 50);
                endScrollHandle = setTimeout(function () {
                    scroll();
                }, 100);
            }); 
        }
    }




    app.detect()

})();