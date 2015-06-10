$(document).ready(function() {

	/*========================================================
	WAYPOINTS
	========================================================*/

	/*=== "He" Animated Texts ===*/

	function onScrollInit_he( items, trigger ) {
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
					he_said_text_message_sound.play();
				}
				if (direction == 'up') {
					osElement.addClass(osAnimationClassUp).removeClass(osAnimationClassDown);
				}
			},{
				offset: '40%'
			});
		});
	}

	onScrollInit_he( $('.os-animation-he') );

	/*=== "She" Animated Texts ===*/

	function onScrollInit_she( items, trigger ) {
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
					she_said_text_message_sound.play();
				}
				if (direction == 'up') {
					osElement.addClass(osAnimationClassUp).removeClass(osAnimationClassDown);
				}
			},{
				offset: '40%'
			});
		});
	}

	onScrollInit_she( $('.os-animation-she') );

	/*=== Intro Label Animation ===*/

	function onScrollInit_introlabel( items, trigger ) {
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
				offset: '13%'
			});
		});
	}

	onScrollInit_introlabel( $('.os-intro-label-animation') );

	/*=== Intro Text Animation ===*/

	function onScrollInit_introText( items, trigger ) {
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

	onScrollInit_introText( $('.os-intro-text-animation') );

	/*=== Audio Label Animation ===*/

	function onScrollInit_audio( items, trigger ) {
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

	onScrollInit_audio( $('.os-audio-label-animation') );

	/*=== Map Line Animation ===*/

	function onScrollInit_mapline( items, trigger ) {
		items.each( function() {
			var osElement = $(this);

			var osTrigger = ( trigger ) ? trigger : osElement;

			osTrigger.waypoint(function(direction) {
				if (direction == 'down') {
					osElement.attr("class", "the_line_animation os-line-animation dash");
				}
				if (direction == 'up') {
					osElement.attr("class", "the_line_animation os-line-animation dash_out");
				}
			},{
				offset: '50%'
			});
		});
	}

	onScrollInit_mapline( $('.os-line-animation') );

	/*========================================================
	FOOD ICON ANIMATIONS
	========================================================*/

	$('.show_eggs_icon').click(function(){
		$('img.show_food_icon_image').removeClass('show_food_icon_image');
		$('.eggs_icon').addClass('show_food_icon_image');

		$('li a.active_icon_toggle').removeClass('active_icon_toggle');
		$(this).addClass('active_icon_toggle');
	});

	$('.show_pancakes_icon').click(function(){
		$('img.show_food_icon_image').removeClass('show_food_icon_image');
		$('.pancakes_icon').addClass('show_food_icon_image');

		$('li a.active_icon_toggle').removeClass('active_icon_toggle');
		$(this).addClass('active_icon_toggle');
	});

	$('.show_chicken_icon').click(function(){
		$('img.show_food_icon_image').removeClass('show_food_icon_image');
		$('.chicken_icon').addClass('show_food_icon_image');

		$('li a.active_icon_toggle').removeClass('active_icon_toggle');
		$(this).addClass('active_icon_toggle');
	});

	/*========================================================
	HEADER OVERLAY
	========================================================*/

	(function() {
	var triggerBttn = document.getElementsByClassName( 'trigger-overlay' ),
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

	for(var i=0;i<triggerBttn.length;i++){
        triggerBttn[i].addEventListener('click', toggleOverlay, false);
    }

	closeBttn.addEventListener( 'click', toggleOverlay );
	
	})();

	/*=== Close Overlay after clicking navigation item ===*/

	$("nav ul li a").click(function(){
		setTimeout(function() {
		$("div.overlay").removeClass("open");
		}, 700);
	});

	/*========================================================
	SMOOTH SCROLL
	========================================================*/

	$('body a').smoothScroll({speed: 2000, offset: -60});

	$('.overlay ul li a').smoothScroll({offset: -60});

	/*========================================================
	SKROLLR
	========================================================*/

	var s = skrollr.init( {
		smoothScrolling: true,
	});

	/*========================================================
	HOWL.JS
	========================================================*/

	/*=== Text Message Sounds ===*/

	var he_said_text_message_sound = new Howl({
		urls: ['audio/he_said_message.mp3']
	});

	var she_said_text_message_sound = new Howl({
		urls: ['audio/she_said_message.mp3']
	});

	/*========================================================
	WAVESURFER
	========================================================*/

	/*========================================================
	NUMBER EXCHANGE AUDIO
	========================================================*/

	/*=== Waveform ===*/

	var number_exchange = Object.create(WaveSurfer);

	number_exchange.init({
	    container: '#number_exchange_audio',
	    waveColor: '#4487c7',
	    progressColor: '#eb5d4b',
	    cursorColor: '#ffffff'
	});

	number_exchange.load('audio/number_exchange.mp3');

	/*=== Auto Play Audio On Scroll ===*/

	$('#number_exchange_audio').waypoint(function(direction) {
		if (direction == 'down') {
			number_exchange.play();
	    }
	},{
		offset:'40%',
	});

	/*=== Stop Audio When User Scrolls Past Player ===*/

	$('#number_exchange_audio').waypoint(function(direction) {
		if (direction == 'down') {
			number_exchange.pause();
	    }
	},{
		offset:'0',
	});

	/*=== Play / Pause Audio On Click Of Icon ===*/

	$("#number_exchange a.play_pause_audio").click(function(){

		number_exchange.playPause();

	});

	/*=== Toggle Play / Pause ===*/

	number_exchange.on('play', function () {
		$("#number_exchange a.play_pause_audio .play_icon").css("display","none");
        $("#number_exchange a.play_pause_audio .pause_icon").css("display","block");
    });
    number_exchange.on('pause', function () {
        $("#number_exchange a.play_pause_audio .play_icon").css("display","block");
        $("#number_exchange a.play_pause_audio .pause_icon").css("display","none");
    });

	/*========================================================
	FIRST IMPRESSIONS AUDIO
	========================================================*/

    /*=== Waveform ===*/

	var first_impressions = Object.create(WaveSurfer);

	first_impressions.init({
	    container: '#first_impressions_audio',
	    waveColor: '#4487c7',
	    progressColor: '#eb5d4b',
	    cursorColor: '#ffffff'
	});

	first_impressions.load('audio/first_impressions.mp3');

	/*=== Auto Play Audio On Scroll ===*/

	$('#first_impressions_audio').waypoint(function(direction) {
		if (direction == 'down') {
			first_impressions.play();
	    }
	},{
		offset:'40%',
	});

	/*=== Stop Audio When User Scrolls Past Player ===*/

	$('#first_impressions_audio').waypoint(function(direction) {
		if (direction == 'down') {
			first_impressions.pause();
	    }
	},{
		offset:'0',
	});

	/*=== Play / Pause Audio On Click Of Icon ===*/

	$("#first_impressions a.play_pause_audio").click(function(){

		first_impressions.playPause();

	});

	/*=== Toggle Play / Pause ===*/

	first_impressions.on('play', function () {
		$("#first_impressions a.play_pause_audio .play_icon").css("display","none");
        $("#first_impressions a.play_pause_audio .pause_icon").css("display","block");
    });
    first_impressions.on('pause', function () {
        $("#first_impressions a.play_pause_audio .play_icon").css("display","block");
        $("#first_impressions a.play_pause_audio .pause_icon").css("display","none");
    });

    /*========================================================
	CUDDLE ROOM AUDIO
	========================================================*/

    /*=== Waveform ===*/

	var cuddle_room = Object.create(WaveSurfer);

	cuddle_room.init({
	    container: '#cuddle_room_audio',
	    waveColor: '#4487c7',
	    progressColor: '#eb5d4b',
	    cursorColor: '#ffffff'
	});

	cuddle_room.load('audio/cuddle_room.mp3');

	/*=== Auto Play Audio On Scroll ===*/

	$('#cuddle_room_audio').waypoint(function(direction) {
		if (direction == 'down') {
			cuddle_room.play();
	    }
	},{
		offset:'40%',
	});

	/*=== Stop Audio When User Scrolls Past Player ===*/

	$('#cuddle_room_audio').waypoint(function(direction) {
		if (direction == 'down') {
			cuddle_room.pause();
	    }
	},{
		offset:'0',
	});

	/*=== Play / Pause Audio On Click Of Icon ===*/

	$("#cuddle_room a.play_pause_audio").click(function(){

		cuddle_room.playPause();

	});

	/*=== Toggle Play / Pause ===*/

	cuddle_room.on('play', function () {
		$("#cuddle_room a.play_pause_audio .play_icon").css("display","none");
        $("#cuddle_room a.play_pause_audio .pause_icon").css("display","block");
    });
    cuddle_room.on('pause', function () {
        $("#cuddle_room a.play_pause_audio .play_icon").css("display","block");
        $("#cuddle_room a.play_pause_audio .pause_icon").css("display","none");
    });

    /*========================================================
	NIGHT CAP AUDIO
	========================================================*/

    /*=== Waveform ===*/

	var night_cap = Object.create(WaveSurfer);

	night_cap.init({
	    container: '#night_cap_audio',
	    waveColor: '#4487c7',
	    progressColor: '#eb5d4b',
	    cursorColor: '#ffffff'
	});

	night_cap.load('audio/night_cap.mp3');

	/*=== Auto Play Audio On Scroll ===*/

	$('#night_cap_audio').waypoint(function(direction) {
		if (direction == 'down') {
			night_cap.play();
	    }
	},{
		offset:'40%',
	});

	/*=== Stop Audio When User Scrolls Past Player ===*/

	$('#night_cap_audio').waypoint(function(direction) {
		if (direction == 'down') {
			night_cap.pause();
	    }
	},{
		offset:'0',
	});

	/*=== Play / Pause Audio On Click Of Icon ===*/

	$("#night_cap a.play_pause_audio").click(function(){

		night_cap.playPause();

	});

	/*=== Toggle Play / Pause ===*/

	night_cap.on('play', function () {
		$("#night_cap a.play_pause_audio .play_icon").css("display","none");
        $("#night_cap a.play_pause_audio .pause_icon").css("display","block");
    });
    night_cap.on('pause', function () {
        $("#night_cap a.play_pause_audio .play_icon").css("display","block");
        $("#night_cap a.play_pause_audio .pause_icon").css("display","none");
    });

    /*========================================================
	BACKSTRETCH
	========================================================*/

	/*=== Number Exchange ===*/

	$("#number_exchange").backstretch([
	   "img/number_exchange_1.png",
	   "img/number_exchange_2.png",
	   "img/number_exchange_3.png"    
	], {duration: 4000, fade: 1000});

	/*=== First Impressions ===*/

	$("#first_impressions").backstretch([
	   "img/first_impression_1.png",
	   "img/first_impression_2.png",
	   "img/first_impression_4.png"    
	], {duration: 4000, fade: 1000});

	/*=== Cuddle Room ===*/

	$("#cuddle_room").backstretch([
	   "img/cuddle_room_1.png",
	   "img/cuddle_room_2.png"   
	], {duration: 4000, fade: 1000});

	/*=== Night Cap ===*/

	$("#night_cap").backstretch([
	   "img/night_cap_1.png",
	   "img/night_cap_2.png",
	   "img/night_cap_3.png",
	   "img/night_cap_4.png",
	   "img/night_cap_5.png"   
	], {duration: 4000, fade: 1000});

	/*========================================================
	VIDE
	========================================================*/

	/*=== Intro Video ===*/

	$('#intro_video_container').vide('video/intro_video', {
	  muted: true,
	  loop: true,
	  autoplay: true,
	  position: '50% 50%', // Similar to the CSS `background-position` property.
	  posterType: 'detect', // Poster image type. "detect" — auto-detection; "none" — no poster; "jpg", "png", "gif",... - extensions.
	  resizing: true // Auto-resizing, read: https://github.com/VodkaBears/Vide#resizing
	});

	/*=== Conclusion Video ===*/

	$('#conclusion_video_container').vide('video/conclusion_video', {
	  muted: true,
	  loop: true,
	  autoplay: true,
	  position: '50% 50%', // Similar to the CSS `background-position` property.
	  posterType: 'detect', // Poster image type. "detect" — auto-detection; "none" — no poster; "jpg", "png", "gif",... - extensions.
	  resizing: true // Auto-resizing, read: https://github.com/VodkaBears/Vide#resizing
	});


});