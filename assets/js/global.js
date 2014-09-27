$(document).ready(function(){
    //On click function for submit button
    $('#postJson').on('click',function(){
        //cache text area data
        var var_data = $('#textarea').val();
        
        //erase anything in text area
        $('#textarea').val("");
        
        //ajax method
        $.ajax({
            //dataType required to return json encoded data from php
            dataType: 'json',
            url: 'domainNameLookup.php',
            type: 'POST',
            //var_PHP_data is variable that is sent to php
            data: {var_PHP_data: var_data},
            //alert user that the process may take time
            beforeSend: function(){
                $('#results').html('<p id = "load">Loading...This might take a second or two.</p>');
            },//remove user message
            complete: function(){
                $('#load').remove();
            },//sort through each link and append to screen in the form of link
            success: function(data){
                //alert(data);
                $.each(data, function(index){
                    $('#results').append('<a href=http://'+data[index]+'>' + data[index] + '</a><br/>');
                });
            },//error messages...not user friendly but logged for testing purposes
            error: function(e){
                $('#results').html(e.message);
            }
        });
        
    });
})









































function loadMap() {
    "use strict";
    function initialize() {
        var mapOptions = {
            center: new google.maps.LatLng(38.525299, -9.150030),
            zoom: 9,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
    }
    google.maps.event.addDomListener(window, 'load', initialize);
}


function singlePage() {
    "use strict";
    jQuery('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var target = this.hash,
        jQuerytarget = jQuery(target);

        var ytop = jQuerytarget.offset().top;
        ytop = ytop + -90;

        jQuery('html, body').stop().animate({
            'scrollTop': ytop
        }, 900, 'swing', function () {
            window.location.hash = target;
        });

        jQuery('.option').removeClass('active');
        jQuery(this).parent(".option").addClass('active');
    });
}

function ComingAnimations() {
    "use strict";
    jQuery('.coming > .span12').waypoint(function (event) {
        jQuery(this).each(function (index) {
            var jQuerythis = jQuery(this);
            jQuerythis.delay(0 * (index + 1)).queue(function () {
                jQuerythis.addClass('animated fadeInDownBig');
            });
        });
    });
    jQuery('div.coming form.special').waypoint(function (event) {
        jQuery(this).each(function (index) {
            var jQuerythis = jQuery(this);
            jQuerythis.delay(1100 * (index + 1)).queue(function () {
                jQuerythis.addClass('animated flipInX');
            });
        });
    });
}


function LandingAnimations() {
    "use strict";
    jQuery('.hero-unit.landing .iphone-hand').waypoint(function (event) {
        jQuery(this).each(function (index) {
            var jQuerythis = jQuery(this);
            jQuerythis.delay(0 * (index + 1)).queue(function () {
                jQuerythis.addClass('animated bounceInRight');
            });
        });
    });
    jQuery('.phone, #about').waypoint(function (event) {
        jQuery(this).each(function (index) {
            var jQuerythis = jQuery(this);
            jQuerythis.delay(350 * (index + 1)).queue(function () {
                jQuerythis.addClass('animated fadeInLeft');
            });
        });
    });
    jQuery('.list, #reviews').waypoint(function (event) {
        jQuery(this).each(function (index) {
            var jQuerythis = jQuery(this);
            jQuerythis.delay(350 * (index + 1)).queue(function () {
                jQuerythis.addClass('animated fadeInRight');
            });
        });
    });
    jQuery('#newsletter').waypoint(function (event) {
        jQuery(this).each(function (index) {
            var jQuerythis = jQuery(this);
            jQuerythis.delay(450 * (index + 1)).queue(function () {
                jQuerythis.addClass('animated fadeInLeft');
            });
        });
    });
    jQuery('.contact-info').waypoint(function (event) {
        jQuery(this).each(function (index) {
            var jQuerythis = jQuery(this);
            jQuerythis.delay(450 * (index + 1)).queue(function () {
                jQuerythis.addClass('animated fadeInRight');
            });
        });
    });
}

function HomeAnimations() {
    "use strict";
    jQuery('.hero-unit.landing .iphone-hand, .img-landing').waypoint(function (event) {
        jQuery(this).each(function (index) {
            var jQuerythis = jQuery(this);
            jQuerythis.delay(0 * (index + 1)).queue(function () {
                jQuerythis.addClass('animated bounceInRight'),
                jQuerythis.css('opacity','1');
            });
        });
    });
    jQuery('.p-btn.action').waypoint(function (event) {
        jQuery(this).each(function (index) {
            var jQuerythis = jQuery(this);
            jQuerythis.delay(800 * (index + 1)).queue(function () {
                jQuerythis.addClass('animated flipInX');
            });
        });
    });
    jQuery('.btn-cont .btn').waypoint(function (event) {
        jQuery(this).each(function (index) {
            var jQuerythis = jQuery(this);
            jQuerythis.delay(1500 * (index + 1)).queue(function () {
                jQuerythis.addClass('animated shake');
            });
        });
    });
    jQuery('.wide-newsletter').waypoint(function (event) {
        jQuery(this).each(function (index) {
            var jQuerythis = jQuery(this);
            jQuerythis.delay(200 * (index + 1)).queue(function () {
                jQuerythis.addClass('animated flipInX');
            });
        });
    });
    jQuery('.testimonials .quote').waypoint(function (event) {
        jQuery(this).each(function (index) {
            var jQuerythis = jQuery(this);
            jQuerythis.delay(200 * (index + 1)).queue(function () {
                jQuerythis.addClass('animated flipInY');
            });
        });
    });
}

function ErrorAnimations() {
    "use strict";
    jQuery('.error-page').waypoint(function (event) {
        jQuery(this).each(function (index) {
            var jQuerythis = jQuery(this);
            jQuerythis.delay(0 * (index + 1)).queue(function () {
                jQuerythis.addClass('animated flipInX');
            });
        });
    });
}


function fixDiv() {
    "use strict";
    var jQuerycache = jQuery('#getFixed');
    if (jQuery(window).scrollTop() > 100)
    {
        jQuerycache.css({
            'position': 'fixed',
            'top': '0px'
        });
    }
    else
    {
        jQuerycache.css({
            'position': 'relative',
            'top': 'auto'
        });
    }
}

function showTopButton() {
    "use strict";
    var jQuerybtn = jQuery('#back-to-top');
    if (jQuery(window).scrollTop() > 100)
    {
        jQuerybtn.css({
            'display': 'block'
        });
    }
    else
    {
        jQuerybtn.css({
            'display': 'none'
        });
    }
}









function loadXMLDoc()
{
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }

xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
        document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","load.txt",true);
xmlhttp.send();
}























jQuery(document).ready(function () {
    "use strict";
    jQuery('.navbar-inverse .brand, .navbar-inverse ul.nav, .navbar-inverse .navbar-text').waypoint(function (event) {
        jQuery(this).each(function (index) {
            var jQuerythis = jQuery(this);
            jQuerythis.delay(0 * (index + 1)).queue(function () {
                jQuerythis.addClass('animated bounceInDown'),
                jQuerythis.css('opacity', '1');
            });
        });
    });
    jQuery('.hero-unit.landing .promotext').waypoint(function (event) {
        jQuery(this).each(function (index) {
            var jQuerythis = jQuery(this);
            jQuerythis.delay(0 * (index + 1)).queue(function () {
                jQuerythis.addClass('animated bounceInLeft'),
                jQuerythis.css('opacity', '1');
            });
        });
    });
    jQuery('#back-to-top').click(function () {
        jQuery('html, body').animate({ scrollTop: 0 }, 'slow');
    });

    showTopButton();
    fixDiv();
});

jQuery(window).load(function () {
    "use strict";
    jQuery('.navbar-inverse .brand, .navbar-inverse ul.nav, .navbar-inverse .navbar-text').removeClass('animated bounceInDown');
    jQuery('.img-landing').removeClass('bounceInRight');
});


jQuery(window).scroll(function () {
    "use strict";
    fixDiv();
    showTopButton();
});


