
(function() {

    "use strict"

    var app = {
        init: function() {


        }
    }
    /*var api = {
        init: function() {
            this.request();
        },
        request: function() {
            // api_key=dbuOrGB7xoks2WobqPacpFP6fODFIU7gR0rStswa
            var self = this;
            var request = new XMLHttpRequest();
            request.open('GET', 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=dbuOrGB7xoks2WobqPacpFP6fODFIU7gR0rStswa', true);

            request.onload = function() {
                if (request.status >= 200 && request.status < 400) {
                    var rawData = JSON.parse(request.responseText).photos;
                    collection.clean(rawData);
                } else {
                    api.error();
                }
            };
            request.onerror = function() {
                api.error();
            };
            request.send(); 
        },
        error: function(rawData) {

        }
    }
    var collection = {
        clean: function(rawData) {

            var data = rawData.filter( function(currentValue, index, arr){
                if ( index/2 % 1 === 0 ) { 
                    return currentValue
                }
            });
            template.main(data);

        }
    }
    var template = {
        main: function(data) {
            for (var i = 0; i < data.length; i++) {
                var sec = document.querySelector('section');
                var a = document.createElement("a");
                var h = document.createElement("h1");
                var p = document.createElement("p");
                var img = document.createElement("img");
                a.setAttribute('href','index.html')
                img.setAttribute('src',data[i].img_src);
                h.innerHTML = data[i].camera.full_name;
                p.innerHTML = data[i].img_src;
                a.appendChild(img);
                a.appendChild(h);
                a.appendChild(p);
                sec.appendChild(a); 
            }
        },
        detail: function() {

        }
    }
    var render = {
        main: function() {

        },
        detail: function() {

        }
    }*/

    //app.init()

})()
