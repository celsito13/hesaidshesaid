$(document).ready(function() {

	/*============================
	WAYPOINTS
	============================*/

	/*=== Animated Texts ===*/

	function onScrollInit( items, trigger ) {
		items.each( function() {
			var osElement = $(this),
			osAnimationOffset = osElement.attr('data-os-animation-offset'),
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

	/*=== Top Label ===*/

	function onScrollInit_toplabel( items, trigger ) {
		items.each( function() {
			var osElement = $(this),
			osAnimationOffset = osElement.attr('data-os-animation-offset'),
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
				offset: '20%'
			});
		});
	}

	onScrollInit_toplabel( $('.os-label-animation') );

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

	$('.overlay ul li a').smoothScroll({offset: -60});

	/*============================
	SKROLLR
	============================*/

	var s = skrollr.init();

	/*============================
	WAVESURFER
	============================*/

	/*=== Number Exchange Waveform ===*/

	var number_exchange = Object.create(WaveSurfer);

	number_exchange.init({
	    container: '#wave',
	    waveColor: '#4487c7',
	    progressColor: '#eb5d4b'
	});

	/* number_exchange.on('ready', function () {
	    number_exchange.play();
	}); */

	number_exchange.load('audio/number_exchange.mp3');

	/*=== Play Function Number Exchange ===*/

	var GLOBAL_ACTIONS = {
	    'play_number_exchange': function () {
	        number_exchange.playPause();
	    },
	};

	/*=== Data Action Query Selector ===*/

	[].forEach.call(document.querySelectorAll('[data-action]'), function (el) {
        el.addEventListener('click', function (e) {
            var action = e.currentTarget.dataset.action;
            if (action in GLOBAL_ACTIONS) {
                e.preventDefault();
                GLOBAL_ACTIONS[action](e);
            }
        });
    });

	/*=== Toggle Play/Pause buttons ===*/

    var playButton = document.querySelector('#play');
    var pauseButton = document.querySelector('#pause');
    number_exchange.on('play', function () {
        playButton.style.display = 'none';
        pauseButton.style.display = '';
    });
    number_exchange.on('pause', function () {
        playButton.style.display = '';
        pauseButton.style.display = 'none';
    });

});