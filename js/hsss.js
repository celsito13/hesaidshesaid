$(document).ready(function() {

	/*============================
	WAYPOINTS
	============================*/

	/*=== Animated Texts ===*/

	function onScrollInit( items, trigger ) {
		items.each( function() {
			var osElement = $(this),
			osAnimationClassDown = osElement.attr('data-os-animation-down'),
			osAnimationClassUp = osElement.attr('data-os-animation-up'),
			osAnimationDelay = osElement.attr('data-os-animation-delay');
			osAnimationDuration = osElement.attr('data-os-animation-duration');

			osElement.css({
				'-webkit-animation-delay':     osAnimationDelay,
				'-moz-animation-delay':        osAnimationDelay,
				'animation-delay':             osAnimationDelay,
				'-webkit-animation-duration':  osAnimationDuration,
				'-moz-animation-duration':     osAnimationDuration,
				'animation-duration':          osAnimationDuration,
			});

			var osTrigger = ( trigger ) ? trigger : osElement;

			osTrigger.waypoint(function(direction) {
				if (direction == 'down') {
					osElement.addClass('animated').addClass(osAnimationClassDown).removeClass(osAnimationClassUp);
				}
				if (direction == 'up') {
					osElement.addClass(osAnimationClassUp).removeClass(osAnimationClassDown);
				}
			},{
				offset: '40%'
			});
		});
	}

	onScrollInit( $('.os-animation') );

	/*============================
	HEADER OVERLAY
	============================*/

	(function() {
	var triggerBttn = document.getElementById( 'trigger-overlay' ),
		overlay = document.querySelector( 'div.overlay' ),
		closeBttn = overlay.querySelector( '.overlay-close' );
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		support = { transitions : Modernizr.csstransitions };

	function toggleOverlay() {
		if( classie.has( overlay, 'open' ) ) {
			classie.remove( overlay, 'open' );
			classie.add( overlay, 'close' );
			var onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				classie.remove( overlay, 'close' );
			};
			if( support.transitions ) {
				overlay.addEventListener( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}
		}
		else if( !classie.has( overlay, 'close' ) ) {
			classie.add( overlay, 'open' );
		}
	}

	triggerBttn.addEventListener( 'click', toggleOverlay );
	closeBttn.addEventListener( 'click', toggleOverlay );
	
	})();

	/*=== Close Overlay after clicking navigation item ===*/

	$("nav ul li a").click(function(){
		setTimeout(function() {
		$("div.overlay").removeClass("open");
		}, 700);
	});

	/*============================
	SMOOTH SCROLL
	============================*/

	$('.overlay ul li').smoothScroll(500);

	/*============================
	SKROLLR
	============================*/

	var s = skrollr.init();

});