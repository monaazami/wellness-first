$(function() {
	menu = $('nav ul');

	$('#openup').on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});

	$(window).resize(function() {
		var w = $(this).width();
		if (w > 480 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});

	$('nav li').on('click', function(e) {
		var w = $(window).width();
		if (w < 480) {
			menu.slideToggle();
		}
	});
	$('.open-menu').height($(window).height());
});

// Smooth Scrolling
$('.cf a').on('click', function(event) {
	if (this.hash !== '') {
		event.preventDefault();

		const hash = this.hash;

		$('html, body').animate(
			{
				scrollTop: $(hash).offset().top
			},
			800,
			function() {
				window.location.hash = hash;
			}
		);
	}
});




// form
$('textarea').blur(function () {
    $('#hire textarea').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('textarea + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('textarea + label + span').css({'opacity': 0});
        }
    });
});

$('#hire .field:first-child input').blur(function () {
    $('#hire .field:first-child input').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('.field:first-child input + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('.field:first-child input + label + span').css({'opacity': 0});
        }
    });
});

$('#hire .field:nth-child(2) input').blur(function () {
    $('#hire .field:nth-child(2) input').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('.field:nth-child(2) input + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('.field:nth-child(2) input + label + span').css({'opacity': 0});
        }
    });
});