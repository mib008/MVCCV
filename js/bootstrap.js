"use strict";

define(['angular', 'domReady', 'appControllers', 'animation'], function (angular, domReady, appControllers, animation) {
    domReady(function () {
        angular.bootstrap(document, ['MyApp']);

        //setTimeout(function() {
        //    if (document.body.clientWidth > 767) {

        //        animation.doTitleAnimation();

        //        animation.doContentTitleAnimation(true);

        //        animation.doContentAnimation(true);
        //    }
        //}, 100);
    });
});