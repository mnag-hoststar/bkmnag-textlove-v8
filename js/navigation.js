// -------------------------------------
// Text Love: JS > Navigation
// -------------------------------------

// ------------------------------
// Changes to the header when it's not at the top of the page.
// ------------------------------

$(window).on('scroll', function () {
	var scrollTop = $(window).scrollTop();

	if (scrollTop > 100) {
		$('.template__header').addClass('template__header--small');
	} else {
		$('.template__header').removeClass('template__header--small');
	}
});


$(document).ready(function () {
		
	// ------------------------------
	// Change navigation if it matches tablet size.
	// ------------------------------

	// Toggles class open to display/hide the whole navigation.

	$('.navigation-toggle').click(function () {
		$('.widget[data-widget-type="extendednavigation"]').toggleClass('open');
	});

	// Toggles class open to display/hide folders.

	$('.navigation-item.folder').each(function () {
		$(this).click(function () {
			$(this).parent('.navigation-item.folder').toggleClass('open');
		});
	});

	$('.extendednavigation__navigation-toggle').click(function () {
		$('html').toggleClass('nav-open');
	});

	// ------------------------------
	// Hides other submenus when a main menu point with a submenu is clicked.
	// ------------------------------

	$(".navigation-item").click(function () {
		$(this).siblings(".navigation-item").removeClass("folder-open open");
	});
	
	// ------------------------------
	// Changes to the header when it's not at the top of the page.
	// ------------------------------

	function scrollListener() {
		var languageSelectorHeight = $('.language-selector').outerHeight();
		var scrollTop = $(window).scrollTop();
		
		if (languageSelectorHeight == undefined) {
			languageSelectorHeight = 0;
		}
		
		if (scrollTop > languageSelectorHeight) {
			$('.template__header').addClass('template__header--scrolled');
		} else {
			$('.template__header').removeClass('template__header--scrolled');
		}
	}
	
	scrollListener();

	$(window).on('scroll', function () {
		scrollListener();
	});
	
    $(document).bind("DOMSubtreeModified",function(){
		$(window).resize(function() {
			scrollListener();
		});
    });
	
	// ------------------------------
	// Header and Section Functions
	// ------------------------------

	// distance variables

	function contentFromTopDistance() {
		var languageSelectorHeight = $('.language-selector').outerHeight();
		var navigationHeight = $('.template__header').outerHeight();
		var footerHeight = $('.template__footer').outerHeight();
	
		// header distance from top changes when a language selector is present

		if (languageSelectorHeight == undefined) {
			languageSelectorHeight = 0;
			var languageAndNavigationHeight = navigationHeight;
		} else {
			var languageAndNavigationHeight = languageSelectorHeight+navigationHeight;
		}
		
		// section distance from top
		
		$('section.template').css('min-height', navigationHeight+'px');
		$('header.template__header').css('margin-top', languageSelectorHeight+'px');
		$('.feature__content-wrap').css('padding-top', navigationHeight+20+'px');
	}

	contentFromTopDistance();
	
	$(document).bind("DOMSubtreeModified",function(){
		$(window).resize(function() {
			contentFromTopDistance();
		});
	});
});

// ------------------------------
// Feature Overlay Corrections
// The overlay of the feature should be below the header.
// ------------------------------

$(window).resize(function () {
	var headerHeight = $('.template__header').outerHeight();
	var featureOverlayTopDistance = $('.widget[data-widget-type="feature"] .widget-overlay').attr('style', 'top: ' + headerHeight + 'px');
});