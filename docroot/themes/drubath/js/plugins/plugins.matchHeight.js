(function ($) {

    var matchHeightInit = function(){
    	// MatchHeight
	    // For full settings see http://brm.io/jquery-match-height/
	    // Usage:
	    /**
	     *  <ul>
		 *		<li class="matchheight">these will be equal heights</li>
		 *		<li class="matchheight">these will be equal heights</li>
		 *		<li class="matchheight">these will be equal heights</li>
		 *	</ul>
	     */

    	var Elems = $('.matchheight');
    	
    	Elems.matchHeight();
    };

    // Document.ready
    $(function() {
        matchHeightInit();
    });

})(jQuery);