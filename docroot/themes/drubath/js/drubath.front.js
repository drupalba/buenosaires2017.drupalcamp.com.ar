(function ($) {

	// Homepage only

    var // General purpose vars
        htmlBody = $('html,body'),
        Window = $(window),
        Document = $(document),
        Wrapper = $('#js-wrapper'),

        // ---- 
        // Prep functions to run
        // ---- 

        Ready = function(){

        },

        Load = function(){

        },

        Unload = function(){

        };


    // ----
    // Run everything
    // ----

    // Document.ready
    $(function() {
        Ready();
    });

    // When page is loaded
    Window.load(function() {
        Load();
    });

    // When leaving page
    Window.unload(function() {
        Unload();
    });

})(jQuery);