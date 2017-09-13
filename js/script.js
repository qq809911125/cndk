$(document).ready(function(){

	// homepage tabs

	$('.tab-content .tab:first').show();

	$(document).on('click', '.tab-title > a', function(){
		tabID = $(this).attr('href');

		$('.tab-title.active').removeClass('active');
		$('.tab-content .tab').hide();

		$('.tab-content .tab'+tabID).show();
		$(this).parent('.tab-title').addClass('active');
		return false;
	});

	// responsive tab transform

	if ( $(window).width() < 769 ) {
		$('.home-tabs .row').hide(0);

		$('.tab').each(function(){
			tabID = $(this).attr('id');

			if ( tabID == 'design-tab' ) {
				$(this).before('<div class="tab-title design-tab active"><a href="#design-tab"><span class="tab-icon"></span>Design</a></div>');
			} else if ( tabID == 'development-tab' ) {
				$(this).before('<div class="tab-title development-tab"><a href="#development-tab"><span class="tab-icon"></span>Development</a></div>');
			} else if ( tabID == 'marketing-tab' ) {
				$(this).before('<div class="tab-title marketing-tab"><a href="#marketing-tab"><span class="tab-icon"></span>Marketing</a></div>');
			}
		});
	}

	// dropdown menu

	$('.mainmenu .menu-item').has('.submenu').addClass('has-submenu');
	if ( $(window).width() > 991 ) {
		$('.mainmenu .menu-item').mouseenter(function(){
			$(this).find('.submenu').stop().fadeIn(250);
		});
		$('.mainmenu .menu-item').mouseleave(function(){
			$(this).find('.submenu').stop().fadeOut(250);
		});
	} else {
		$('.mainmenu .menu-item.has-submenu').click(function(){
			$(this).find('.submenu').stop().slideToggle(250);
			return false;
		});
	}

	// responsive menu

	$('.menu-toggle').click(function(){
		$(this).next('.mainmenu').slideToggle(250);
		return false;
	});

	// entry animation

	wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 50,
		mobile: false,
		live: true
    })
    wow.init();

    // form input focus class

    $('.contact-form .hover .textbox').focus(function(){
    	$('.hover.active').removeClass('active');
    	$(this).parent('.hover').addClass('active');
    });
    $('.contact-form .hover .textbox').blur(function(){
    	$('.hover.active').removeClass('active');
    });

    $('.form .textbox *').focus(function(){
		$('.textbox.active').removeClass('active');
    	$(this).parent('.textbox').addClass('active')
    });
    $('.form .textbox *').blur(function(){
		$('.textbox.active').removeClass('active');
    });

});
