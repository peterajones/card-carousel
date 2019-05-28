var startingItem = 4;

$(document).ready(function() {
    $('.carousel_data .carousel_item').each(function(){
        $('#carousel').append( $(this).find('.image').html() );
    });
    createCarousel();
    showCaption();
});

function createCarousel(){
    $('div#carousel').roundabout({
        startingChild: window.startingItem,
        childSelector: 'img',
        shape: 'lazySusan',
        tilt: -8.5,
        minOpacity:0.8,
        minScale: 0.45,
        duration: 1200,
        clickToFocus: true,
        clickToFocusCallback: showCaption
    });
    createCustomButtons();
}

function createCustomButtons(){

    $('.next_item').click(function(){
        hideCaption();
        $('div#carousel').roundabout('animateToNextChild', showCaption);
    });

    $('.prev_item').click(function(){
        hideCaption();
        $('div#carousel').roundabout('animateToPreviousChild', showCaption);
    });

    $('div#carousel img').click(function(){
        hideCaption();
    });
}

function hideCaption(){
    $('#captions').animate({'opacity':0}, 450);
}

function showCaption(){
    var childInFocus = $('div#carousel').data('roundabout').childInFocus;
    var setCaption = $('.carousel_data .carousel_item .caption:eq('+childInFocus+')').html();
    $('#captions').html(setCaption);
    var newHeight = $('#captions').height()+'px';
    $('.caption_container').animate({'height':newHeight}, 50, function(){
        $('#captions').animate({'opacity':1}, 600);
    });

}