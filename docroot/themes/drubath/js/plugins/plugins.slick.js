(function ($) {

    var slickInit = function(){
    	// Slick
        // For full settings see http://kenwheeler.github.io/slick/#settings
        // Usage:
        /**
         *  <div class="slick">
         *      <div>your content</div>
         *      <div>your content</div>
         *      <div>your content</div>
         *  </div>
         */
        
        var slickCarousel = $('.slick');
        
        if (slickCarousel.length > 0) {
            slickCarousel.slick({
                autoplay: false,
                autoplaySpeed: 3000,
                dots: false,
                dotsClass: 'carousel-dots',
                fade: false,
                arrows: true,
                pauseOnHover: true,
                pauseOnDotsHover: false,
                rows: 1,
                speed: 300
            });
        }
    };

    // Document.ready
    $(function() {
        slickInit();
    });

})(jQuery);