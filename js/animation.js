"use strict";

define([], function () {
    
    var startAnimeLine = -1000;
    
    var disableAnimation = navigator.userAgent.indexOf("MSIE") > 0 ||
        navigator.userAgent.indexOf("rv:11.0") > 0 ||
        navigator.userAgent.indexOf("Firefox") > 0;
    
    console.log("navigator.userAgent:" + navigator.userAgent);
    
    function doTitleAnimation() {
        var titles = document.getElementsByName("title");
        for (var i = 0; i < titles.length; i++) {
            var currentTitle = titles[i];
            
            var distance = document.body.scrollTop - currentTitle.offsetParent.offsetTop;
            // console.log("Current title: " + currentTitle.innerHTML + " currentTitle.offsetParent.offsetTop : " + currentTitle.offsetParent.offsetTop + " document.body.scrollTop: " + document.body.scrollTop);
            // console.log(i + " - Current title: " + currentTitle.innerHTML + " distance: " + distance);
            // console.log("document.body.clientWidth: " + document.body.clientWidth);
            
            if (distance < 0 && distance > startAnimeLine) {
                // currentTitle.style.background = "blue";
                currentTitle.style.animation = "titleAnimeIn 1s forwards";

            } else {
                // currentTitle.style.background = "none";
                currentTitle.style.animation = "titleAnimeOut 1s forwards";
            }
        }
    };
    
    function doContentAnimation(isFirst) {
        var contents = document.getElementsByClassName("sectionContent");
        for (var j = 0; j < contents.length; j++) {
            var currentContent = contents[j];
            
            var distance2 = document.body.scrollTop - currentContent.offsetParent.offsetTop;
            if (isFirst) {
                if (j >= 2)
                currentContent.style.animation = "sectionContentAnimeOut 1s forwards";
            } else {
                if (distance2 > startAnimeLine) {
                    currentContent.style.animation = "sectionContentAnimeIn 1s forwards";
                } else {
                    currentContent.style.animation = "sectionContentAnimeOut 1s forwards";
                }
            }
        }
    };
    
    function doContentTitleAnimation(isFirst) {
        var sectionTitles = document.getElementsByClassName("sectionTitle");
        for (var j = 0; j < sectionTitles.length; j++) {
            var currentsectionTitle = sectionTitles[j];
            
            var distance2 = document.body.scrollTop - currentsectionTitle.offsetParent.offsetTop;
            
            if (isFirst) {
                if (j >= 2)
                currentsectionTitle.style.animation = "sectionTitleAnimeOut 1s forwards";
            } else {
                if (distance2 > startAnimeLine) {
                    currentsectionTitle.style.animation = "sectionTitleAnimeIn 1s forwards";
                } else {
                    currentsectionTitle.style.animation = "sectionTitleAnimeOut 1s forwards";
                }
            }
        }
    };
    
    function undoAnimationFrame() {
        var titles = document.getElementsByName("title");
        var contents = document.getElementsByClassName("sectionContent");
        var sectionTitles = document.getElementsByClassName("sectionTitle");
        for (var i = 0; i < titles.length; i++) {
            var currentTitle = titles[i];
            currentTitle.style.animation = undefined;
        }
        
        for (var j = 0; j < contents.length; j++) {
            var currentContent = contents[j];
            currentContent.style.animation = undefined;
        }
        
        for (var k = 0; k < sectionTitles.length; k++) {
            var currentsectionTitle = sectionTitles[j];
            currentsectionTitle.style.animation = undefined;
        }
    };
    

    if (disableAnimation) {
        return {
            doTitleAnimation: function() {},
            doContentAnimation: function () { },
            doContentTitleAnimation: function () { },
            undoAnimationFrame: function() { }
        };
    } else {
        return {
            doTitleAnimation: doTitleAnimation,
            doContentAnimation: doContentAnimation,
            doContentTitleAnimation: doContentTitleAnimation,
            undoAnimationFrame: undoAnimationFrame
        };
    }
});