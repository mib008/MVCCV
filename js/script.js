"use strict";

require.config({
    baseUrl: "js/",
    paths: {
        angular: "../libs/angular/angular",
        domReady: "../libs/domReady",
        jquery: "../libs/jquery-1.11.3/jquery-1.11.3.min"
    },
    shim: {
        angular: {
            exports: "angular"
        }
    }

});

require(['app', 'bootstrap', 'animationVer2'], function (app, bootstrap, animation) {
    // define route
    // app.config(['$routeProvider', function ($routeProvider) {}]);
    
    var button = document.getElementById("goTopBtn");
    button.style.display = "none";
    
    var printButton = document.getElementById("printBtn");

    var enableAnimeFlag = true;
    
    window.onscroll = function () {
        var top = document.documentElement.scrollTop || document.body.scrollTop;
        
        if (button) {
            if (top > 50) {
                button.style.display = "block";
            } else if (top === 0) {
                if (animation) {
                    enableAnimeFlag = true;
                }
            } else {
                button.style.display = "none";
                button.setAttribute("scrollSpeed", "20");
                button.setAttribute("scrolling", "false");
            }
        }
        
        if (animation && enableAnimeFlag) {
            if (animation.setUpTitleAnimation)
                animation.setUpTitleAnimation();
            if (animation.setUpTitle)
                animation.setUpTitle();
            if (animation.setUpSectionContent)
                animation.setUpSectionContent();
        }
    };
    
    printButton.onclick = function () {
        if (animation && animation.clear) {
            animation.clear();
        }
        
        window.print();
    };

    function windowScrolling (isClick) {
        var button = document.getElementById("goTopBtn");
        var scrollSpeed = parseFloat(button.getAttribute("scrollSpeed"));
        var scrolling = button.getAttribute("scrolling");
        
        if (isClick) {
            scrolling = "false";
        }
        
        if (scrolling === "true") {
            return;
        }
        
        button.setAttribute("scrolling", "false");
        
        console.log("Speed: " + scrollSpeed);
        
        button.setAttribute("scrollSpeed", (scrollSpeed * 1.1).toString());
        
        if ((document.documentElement.scrollTop || document.body.scrollTop) >= 50) {
            window.scrollBy(0, -scrollSpeed);
            setTimeout(windowScrolling, 20);
        } else {
            window.scrollTo(0, 0);
            button.setAttribute("scrolling", "true");
        }
    };

    button.onclick = function () {
        enableAnimeFlag = false;

        windowScrolling(-1);
    }
});



//require(['renderEngine'], function (engine) {
//    var bgCanvas = document.getElementById("bgCanvas");
//    var cxt = engine.initRender({
//        canvas: bgCanvas,
//        fps:24
//    });


//    var x = bgCanvas.width / 2;
//    var y = bgCanvas.height / 2;

//    cxt.fillStyle = "#6bbec8";

//    cxt.lineWidth = 5;

//    cxt.beginPath();
//    moveTo(x, y);

//    setTimeout(function () {
//        cxt.lineTo(x + 20, y + 10);
//        cxt.stroke();

//        setTimeout(function () {
//            cxt.lineTo(x + 70, y + 10);
//            cxt.stroke();

//            setTimeout(function () {
//                cxt.lineTo(x + 20, y - 10);
//                cxt.stroke();

//                setTimeout(function () {
//                    cxt.lineTo(x + 70, y - 10);
//                    cxt.stroke();
//                }, 500);
//            }, 500);
//        }, 500);
//    }, 500);


//});


