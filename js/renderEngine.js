define(function () {
    var fps;
    
    var render2D;
    
    function initRender(params) {
        var canvas = params.canvas;
        fps = params.fps | 24;
        
        var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        
        canvas.width = w;
        canvas.height = h;
        
        render2D = canvas.getContext("2d");
        
        return render2D;
    }    ;
    
    //function startAnime {
    //    if (!animatedObjs || animatedObjs.length <= 0) {
    //        return false;
    //    }
    
    //    var animeObj,
    //        worker;
    
    //    for (var i = 0; i < animatedObjs.length; i++) {
    //        animeObj = animatedObjs[i];
    
    //        worker = new RenderWorker();
    //        worker.rending(animeObj);
    //    }
    //};
    



    function createLineFrames(animatedObjs) {
        var frames = new [];

        var animatedObj = animatedObjs[0];
        
        // startX startY
        moveTo(animatedObj.startX, animatedObj.startY);

        // render2D.lineTo(x + 20, y + 10);
        // duration
        var framsCount = animatedObj.duration / 1000 * fps;

        var lineFun = function(x) {

            (x - animatedObj.startX) * (animatedObj.endY - animatedObj.startY) / (animatedObj.endX - animatedObj.startX) + animatedObj.startY;

        };

        var frame = {};
        for (var i = 0; i < framsCount; i++) {
            frame.nextPoint = function(point) {
                point.x = x + animatedObj.endX / framsCount;
                point.y = y + animatedObj.endY / framsCount;
            }

        }
    };

    
    //function startAnime(frames) {
    //    if (!frames || frames.length <= 0) {
    //        return false;
    //    }
        
    //    var frameIndex = 0;
        
    //    var timer = setInterval(function () {
    //        frames[frameIndex++].render();
            
    //        if (frameIndex >= frames.length) {
    //            clearInterval(timer);
    //        }
    //    }, 1000 / fps);
        
    //    return timer;
    //};
    
    function startAnime(frames) {
        if (!frames || frames.length <= 0) {
            return false;
        }
        
        var frameIndex = 0;
        
        var timer = setInterval(function () {
            frames[frameIndex++].render();
            
            if (frameIndex >= frames.length) {
                clearInterval(timer);
            }
        }, 1000 / fps);
        
        return timer;
    }    ;

    return {
        initRender: initRender,
        startAnime: startAnime
    };
});

//var RenderWorker = function (render2D) { this.render2D = render2D; };
//RenderWorker.prototype = {
//    createLineFrame: function (animeObj) {
//        var frame = this.render2D.lineTo(animeObj.startX, animeObj.startY);
        
        
        
//        return frame;
//    },
    
//    rending: function (animeObj) {
        
//        animeObj.stepsPerFrame
//    }

    
//}