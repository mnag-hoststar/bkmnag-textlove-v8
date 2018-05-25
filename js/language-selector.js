// ----------------------------------------
// Text Love: JS > Language Selector
// ----------------------------------------

$(document).ready(function() {
	
	// ------------------------------
	// Changes to the header when a language selector is present.
	// ------------------------------
	
	function languageSelector() {
    	if ($('.language-selector')) {
    	    var languageSelectorHeight = $('.language-selector').outerHeight();
    	    
			$('.template__header').css('margin-top', languageSelectorHeight+'px');
			$('.widget.extendednavigation a.pull').css('margin-top', languageSelectorHeight+'px');
			
			$('.widget[data-widget-type="feature"] .widget-overlay').css('margin-top', languageSelectorHeight+'px');
    	}
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