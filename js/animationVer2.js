"use strict";

define(['jquery'], function ($) {
    //alert($().jquery);

    function disableAnimation() {
        var userAgent = window.navigator.userAgent.toLowerCase();
        var appVersion = window.navigator.appVersion.toLowerCase();
        if (userAgent.indexOf('msie') !== -1) {
            if (appVersion.indexOf('msie 6.') !== -1) {
                return true;
            }
            else if (appVersion.indexOf('msie 7.') !== -1) {
                return true;
            }
            else if (appVersion.indexOf('msie 8.') !== -1) {
                return true;
            }
        }
        else if (userAgent.indexOf('iphone') !== -1) {
            return true;
        }
        else if (userAgent.indexOf('ipad') !== -1) {
            return true;
        }
        else if (userAgent.indexOf('ipod') !== -1) {
            return true;
        }
        else if (userAgent.indexOf('android') !== -1) {
            return true;
        }

        return false;
    };
    
    function setAnimeLeft() {
        var scrollTop = $(window).scrollTop();
        var position = $(this).offset().top;
        var offset = 1000;
        
        var top;
        //opacity
        if (scrollTop >= position - offset) {
            top = Math.floor(scrollTop - position + offset) / 200;
            $(this).css({ 'opacity': top });
        }
        else {
            $(this).css({ 'opacity': '0' });
        }
        
        //margin
        if (scrollTop >= position - offset) {
            top = Math.floor(scrollTop - position + offset);
            var left = -200 + Math.floor(top);
            if (left < 0) {
                $(this).css({ 'margin-left': left + 'px' });
            }
            else {
                $(this).css({ 'margin-left': '0' });
            }
        }
        else {
            $(this).css({ 'margin-left': -200 + 'px' });
        }
    };
    
    function setAnimeRight() {
        var scrollTop = $(window).scrollTop();
        var position = $(this).offset().top;
        var offset = 1000;
        
        var top;
        //opacity
        if (scrollTop >= position - offset) {
            top = Math.floor(scrollTop - position + offset) / 200;
            $(this).css({ 'opacity': top });
        }
        else {
            $(this).css({ 'opacity': 0 });
        }
        
        //margin
        if (scrollTop >= position - offset) {
            top = Math.floor(scrollTop - position + offset);
            var right = -200 + Math.floor(top);
            if (right < 0) {
                $(this).css({ 'margin-right': right + 'px' });
            }
            else {
                $(this).css({ 'margin-right': 0 });
            }
        }
        else {
            $(this).css({ 'margin-right': -200 + 'px' });
        }
    };
    
    function setUpTitleAnimation() {
        $('div.sectionTitle h2[name=title]').each(function() {
            var scrollTop = $(window).scrollTop();
            var position = $(this).offset().top;

            if (scrollTop >= position - 400 && scrollTop < position - 200) {
                $(this).css({ 'animation' : 'titleAnimeIn 1s forwards' });
            }
            else {
                $(this).css({ 'animation' : 'titleAnimeOut 1s forwards' });
            }
        });
    };
    
    function setUpTitle() {
        if (disableAnimation()) {
            return;
        }

        $('div.sectionTitle').each(setAnimeLeft);
    };
    
    function setUpSectionContent() {
        if (disableAnimation()) {
            return;
        }
        
        $('div.sectionContent[anime=true]').each(setAnimeRight);
    };

    function clear() {
        var clearFunc = function() {
            $(this).css({ 'margin-right': 0 });
            $(this).css({ 'margin-left': 0 });
            $(this).css({ 'opacity': 1 });
        };

        $('div.sectionTitle').each(clearFunc);
        $('div.sectionContent').each(clearFunc);
    };

    return {
        clear: clear,
        setUpTitleAnimation: setUpTitleAnimation,
        setUpTitle: setUpTitle,
        setUpSectionContent: setUpSectionContent
    };
});