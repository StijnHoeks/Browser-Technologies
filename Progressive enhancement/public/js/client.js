(function() {

    var app = {
        detect: function() {
            var sticky = document.getElementById('sticky');
            app.navcur(sticky)
            cssSticky = CSS.supports('position', 'sticky');
            if ( !cssSticky ) {
                app.sticky(sticky)
            }

        },
        navcur: function(sticky) {
            var letter = document.getElementsByClassName('letter');
            var aside = document.getElementsByTagName('aside');
            console.log(aside)
            var asideLetter = document.querySelectorAll('aside a');
            var scrollBar = document.createElement('div');
            scrollBar.setAttribute('id','scrollbar')
            aside.appendChild = scrollBar;

            var body = document.body, 
                html = document.documentElement;
            var docHeight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );

            window.addEventListener('scroll', function() {
                for (var i = 0; i < letter.length; i++) {
                    var windowTop = window.scrollY;

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