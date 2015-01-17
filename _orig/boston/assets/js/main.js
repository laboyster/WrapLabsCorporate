//Begin Sticky Nav
$(window).load(function () {
    $("#navigation").sticky({ topSpacing: 0 });
});
//End Sticky Nav

// Begin tooltip for socials init */

function tooltipInit() {
    jQuery("[data-toggle='tooltip']").tooltip();
}

jQuery(document).ready(function () {
    if(jQuery("body").hasClass('post-template')){
        jQuery("#navigation").addClass('navbar-fixed-top');
    }
});


jQuery(document).ready(function () {
    tooltipInit();
});

$(document).ready(function () {
    $('.btn-scroll[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash, $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});

function scrollToTop(i) {
    if (i == 'show') {
        if (jQuery(this).scrollTop() != 0) {
            jQuery('#toTop').fadeIn();
        } else {
            jQuery('#toTop').fadeOut();
        }
    }
}

jQuery(window).scroll(function () {
    scrollToTop('show');
});

//Begin Parallax

jQuery(window).load(function () {
    "use strict";

    /* parallax effect */
    jQuery("#MainHeader").parallax("50%", 0.4);
});

jQuery(window).resize(function () {
    setTimeout(function () {
        jQuery("#MainHeader").parallax("20%", 0.4, true);
    }, 500);
}); //End Parallax


// Begin Gmap3 Maps
// helper - validate data attr
function validateDataAttr($attr) {
    "use strict";
    return $attr !== undefined;

}

// init gmap - Asynchronous Loading
function initmap() {
    "use strict";
    jQuery(".googleMap").each(function () {
        var atcenter = "";
        var $this = jQuery(this);
        var location = $this.data("location");
        var text = $this.data("text");

        var offset = 0;

        if (validateDataAttr($this.data("offset"))) {
            offset = $this.data("offset");
        }

        if (validateDataAttr(location)) {

            $this.gmap3({
                marker: {
                    //latLng: [40.616439, -74.035540],
                    address: location,
                    options: {
                        visible: false
                    },
                    callback: function (marker) {
                        atcenter = marker.getPosition();
                    }
                },
                map: {
                    options: {
                        //maxZoom:11,
                        zoom: 17,
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                        // ('ROADMAP', 'SATELLITE', 'HYBRID','TERRAIN');
                        scrollwheel: false,
                        disableDoubleClickZoom: false,
                        mapTypeControlOptions: {
                            //mapTypeIds: [google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.HYBRID],
                            //style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                            //position: google.maps.ControlPosition.RIGHT_CENTER
                            mapTypeIds: []
                        }
                    }
                    /*events: {
                     idle: function () {
                     if (!$this.data('idle')) {
                     $this.gmap3('get').panBy(0, offset);
                     $this.data('idle', true);
                     }
                     }
                     }*/
                },
                overlay: {
                    //latLng: [40.616439, -74.035540],
                    address: location,
                    options: {
                        content: '<div class="googleMap-description"><div class="googleMap-triangle"><div class="googleMap-triangle-inside"></div></div>' + text + '</div>',
                        offset: {
                            y: -60,
                            x: 20
                        }
                    }
                }
                //},"autofit"
            });

            // center on resize
            google.maps.event.addDomListener(window, "resize", function () {
                //var userLocation = new google.maps.LatLng(53.8018,-1.553);
                $this.gmap3('get').setCenter(atcenter);
                $this.gmap3('get').panBy(0, 0);
            });

            // set height
            $this.css("min-height", $this.data("height") + "px");
        }

    });
}

function loadScript() {
    "use strict";
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' + 'callback=initmap';
    document.body.appendChild(script);
}

window.onload = loadScript;

// End Gmap3 Maps

/* flexslider */

$(document).ready(function(){
(function(){
    var $gallery = $('.post-template .gallery');
    $gallery.each(function(){
        var $this = $('this');
        $this.css({'display' : 'none'});

        var flexMarkup = {};
        flexMarkup.start =
            '<div class="flexslider">' +
                '<ul class="slides">';
        flexMarkup.middle = '';
        flexMarkup.end =
            '</ul>' +
                '</div>';

        $('img', this).each(function(){
            flexMarkup.middle +=
                '<li>' +
                    $(this).wrap("<div/>").parent().html() +
                    '</li>';
        });

        flexMarkup.full = flexMarkup.start + flexMarkup.middle + flexMarkup.end;
        $(flexMarkup.full).insertAfter(this);

        $(this).css({'display' : 'none'});
    });
})();

    /* flexslider */
    jQuery('.blog .flexslider').flexslider({
        animation: "slide",
        touch: true,
        prevText: "",
        nextText: "",
        smoothHeight: true
    });

    jQuery('.flexslider-with-video').flexslider({
        animation: "slide",
        smoothHeight: true,
        touch: true,
        directionNav: false,
        manualControls: '.flex-control-nav li a'
    });

    jQuery('.fullscreen-flexslider').flexslider({
        animation: "slide",
        smoothHeight: true,
        touch: true,
        directionNav: true,
        prevText: "",
        nextText: "",
        manualControls: '.flex-control-nav li a'
    });

    jQuery('.fullscreen-slider-slogan').flexslider({
        animation: "fade",
        smoothHeight: true,
        touch: true,
        directionNav: false,
        controlNav: false
    });

});

/* Begin Video */

jQuery(document).ready(function () {
    // Target your .container, .wrapper, .post, etc.
    $(".blog-post").fitVids();
    $("#MainHeader").fitVids();
});
/* End Video */

/* Begin Animations */

jQuery(document).ready(function () {
    if (jQuery().appear) {
        jQuery('.initAnimate .animated').appear(function () {
            jQuery(this).each(function () {
                jQuery(this).addClass('activate');
                jQuery(this).addClass($(this).data('fx'));
            });
        }, {accY: -150});
    }
});

/* End Animation */


/* Change cover */

/* cover image */
jQuery(document).ready(function () {
    (function(){
        var $contentCover = $('.post-template [alt="cover"]');
        var $cover = $('#MainHeader');
        if($contentCover.length) {
            $contentCover = $($contentCover[0]);
            var $src = $contentCover.attr('src');
            $contentCover.css({'display' : 'none'});
            $cover.css({'background-image' : 'url(' + $src + ')'});
        }
    })();
});

//Begin PieChart
jQuery('.pie-chart').each(function () {
    var $t = jQuery(this);

    var scaleColor = $t.attr('data-scalecolor');
    var trackColor = "transparent";

    $t.easyPieChart({
        animate: $t.attr('data-animate'),
        barColor: $t.attr('data-barcolor'),
        trackColor: trackColor,
        scaleColor: scaleColor == 'false' ? false : scaleColor,
        lineCap: $t.attr('data-linecap'),
        lineWidth: $t.attr('data-linewidth'),
        size: $t.attr('data-size')
    });
});

//End PieChart

// Remove empty paragraphs

jQuery(document).ready(function () {
    // Trimming white space
    $('p').filter(function () { return $.trim(this.innerHTML) == "" }).remove();

    // Without trimming white space
    $('p').filter(function () { return this.innerHTML == "" }).remove();
});