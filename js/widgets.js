$(document).ready(function(){
   $( "#accordion" ).accordion();
});

$(document).ready(function(){
   $( "#tabs" ).tabs();
});

$(document).ready(function(){
   $( "#datepicker" ).datepicker();
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
        loop:true,
        autoplay: true,
        autoplayTimeout: 3000,
        nav: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
  });
});


$(document).ready(function(){
    $("#gallery").unitegallery({
        gallery_theme: "tiles",
        tiles_type: "nested"
    });
});

$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
});

$(document).ready(function() {
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
});