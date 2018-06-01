// ----------------------------------------
// Text Love: JS > Language Selector
// ----------------------------------------

$(document).ready(function() { 
	
	// ------------------------------
	// Changes to the header when a language selector is present.
    // Changes to the language selector when it's not at the top of the page.
	// ------------------------------
	
	function languageSelector() {
    	if ($('.language-selector')) {
    	    var languageSelectorHeight = $('.language-selector').outerHeight();
    	    var navigationHeight = $('.template__header').outerHeight();
    	    if (languageSelectorHeight==undefined) {
    	        var languageAndNavigationHeight = navigationHeight;
    	    } else {
    	        var languageAndNavigationHeight = languageSelectorHeight+navigationHeight;
    	    }
    	    
			$('.template__header').css('margin-top', languageSelectorHeight+'px');
			$('.widget.extendednavigation a.pull').css('margin-top', languageSelectorHeight+'px');
			
			$('.widget[data-widget-type="feature"] .widget-overlay').css('margin-top', languageSelectorHeight+'px');
			
			$('.template__content').css('padding-top', languageAndNavigationHeight+'px');
    	}
    
        $(window).on('scroll', function () {
        	var scrollTop = $(window).scrollTop();
        
        	if (scrollTop > 100) {
        		$('.language-selector').addClass('language-selector--small');
        	} else {
        		$('.language-selector').removeClass('language-selector--small');
        	}
        });
	}
	

	// ------------------------------
    // Changes by the editor are saved in the style elmement with the class js-compiled-styles.
	// ------------------------------
	
	languageSelector();
	
    $(document).bind("DOMSubtreeModified",function(){
		languageSelector();
		$(window).resize(function() {
			languageSelector();
		});
    });
});