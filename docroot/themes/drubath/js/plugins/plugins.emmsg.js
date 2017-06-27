(function ($) {

	// Emergency Message
    var emergMessage = $('#js-emMsg'),

        hideMessage = function(){
            var hideMsg = emergMessage.find('.emmsg__close');

            hideMsg.on('click', function(){
                emergMessage.velocity("fadeOut", { duration: 500 });
                Cookies.set('emClosed','hideThatJazz',{ expires: 7 });
                return false;
            });
        },

        cookies = function(){
            var cookie = Cookies.get('emClosed');

            if (cookie == 'hideThatJazz'){
                emergMessage.remove();
            } else {
                emergMessage.show();
            }
        };

        // ---- 
        // Prep functions to run
        // ---- 

        Ready = function(){
            hideMessage();
            cookies();
        };


    // ----
    // Run everything
    // ----

    // Document.ready
    $(function() {
        Ready();
    });

})(jQuery);