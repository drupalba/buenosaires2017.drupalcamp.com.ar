(function ($) {

    var chosenInit = function(){
    	// Chosen
        // For full settings see https://harvesthq.github.io/chosen/
        
        var betterSelect = $('select');
        
        if (betterSelect.length > 0) {
            betterSelect.chosen({
                disable_search_threshold: 10,
                no_results_text: "No results found",
                width: "100%"
            });
        }
    };

    // Document.ready
    $(function() {
        chosenInit();
    });

})(jQuery);