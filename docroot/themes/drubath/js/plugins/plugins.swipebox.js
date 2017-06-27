(function ($) {

    var swipeboxInit = function(){
        // Swipebox
        // For full settings see http://brutaldesign.github.io/swipebox/#options
        // Usage:
        /**
         *  <a class="swipebox" href="*target*" target="_blank"></a>
         */

    	var swipeBox = $('.swipebox');

        if (swipeBox.length > 0) {
            swipeBox.swipebox({
                useCSS : true, // false will force the use of jQuery for animations
                useSVG : true, // false to force the use of png for buttons
                initialIndexOnArray : 0, // which image index to init when a array is passed
                hideCloseButtonOnMobile : false, // true will hide the close button on mobile devices
                hideBarsDelay : 3000, // delay before hiding bars on desktop
                videoMaxWidth : 1140, // videos max width
                beforeOpen: function() {}, // called before opening
                afterOpen: null, // called after opening
                afterClose: function() {}, // called after closing
                loopAtEnd: false // true will return to the first image after the last image is reached
            });
        }
    };

    // Document.ready
    $(function() {
        swipeboxInit();
    });

})(jQuery);