(function ($) {

    // Overlay
    // Usage:
    /*
        <a class="overlay" href="#uniqueID" title="** title text **">** link text **</a>

        <div id="uniqueID" class="overlay__insert hidden">
            ** overlay content **

            <span class="overlay__close">Close</span>
        </div>
     */

    var Window = $(window),
        Wrapper = $('#js-wrapper'),
        olContainer = $('#js-olContainer'),

        // Overlay
        overLay = function(){
            var Body = $('body'),
                insert = $(olContainer).find('div.overlay__insert'),
                insertL = insert.length;

            // Hide overlay when we've got the height of the inserts
            olContainer.hide();

            Body
                // open overlay
                .on('click','.overlay',function(e){
                    
                    var // grab name of block from href
                        target = $(this).attr('href'),
                        // thanks Drupal... remove erronous /
                        toLoad = target.replace('/','');

                    // hide any open inserts
                    insert.addClass('hidden');
                    // set linked insert to be open
                    $(toLoad).removeClass('hidden');

                    Body.addClass('freeze');

                    olContainer.fadeIn();

                    insertPos($(toLoad));
                    
                    return false;
                })
                // Stop closing the overlay if clicking inside insert                
                .on('click','.overlay__insert',function(e){
                    e.stopPropagation();
                })
                // close overlay
                .on('click','.overlay__close',function(e){
                    olContainer.fadeOut();
                    $(this).find('.overlay__insert').addClass('hidden');
                    Body.removeClass('freeze');
                    return false;
                })
                // close overlay
                .on('click','#js-olContainer',function(e){
                    $(this).fadeOut();
                    $(this).find('.overlay__insert').addClass('hidden');
                    Body.removeClass('freeze');
                    return false;
                })
                // close on Esc keyup
                .keyup(function(e) {
                  if (e.keyCode == 27){
                    olContainer.fadeOut();
                    $(this).find('.overlay__insert').addClass('hidden');
                    Body.removeClass('freeze');
                  }
                });

        },

        // Set position of insert
        insertPos = function(insert){
            var insertH = insert.outerHeight() / 2,
                wHeight = Window.height() / 2,
                insertPos = (wHeight - insertH) + 'px';

            if (wHeight < insertH){
                insert.css({'top':'2em'});
            } else {
                insert.css({'top':insertPos});
            }
        },

        // Move inserts to overlay container
        moveInserts = function(){
            var Inserts = Wrapper.find('.overlay__insert');
            
            Inserts.detach();
            olContainer.append(Inserts);
        },

        Ready = function(){
            moveInserts();
            overLay();
        };


    // ------- Document.ready
    $(function() {
        Ready();
    });

})(jQuery);