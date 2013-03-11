var commuteArt = {
	drawingSpace: ''
	, center: {
		vertical: ($(window).height() / 2)
		, horizontal: ($(window).width() / 2)
	}

	, initializeCanvas: function(){
		//append the canvas element to the DOM and size it
		$('body').append('<canvas height="' + $(window).height() + '" width="' + $(window).width() + '" id="drawing"></canvas>');

		//welcome to the world!
		commuteArt.drawingSpace = document.getElementById('drawing').getContext('2d');
	}

	, hideIntro: function(){
		var heading = $('.heading');

		//is the header visible?
		if(heading.attr('display') !== 'none'){
			//yes hide it
			heading.hide();
		}
	}

	, drawMotion: function(event){
		var ctx = commuteArt.drawingSpace
			, xPosition = event.accelerationIncludingGravity.x * 42
			, yPosition = event.accelerationIncludingGravity.y * 42
			, zPosition = event.accelerationIncludingGravity.z * 10;

		//default so we have some visible dot no matter what
		//	not having this can result in invisible dots
		if(zPosition < 2){
			zPosition = 2;
		}

		//check that we have crossed some threshold of amplitude
		//	otherwise you end up with tons and tons of little dots
		//	in the same place
		if(xPosition > 21 || yPosition > 21 || zPosition > 5){
			//hide the header
			commuteArt.hideIntro();

			ctx.beginPath();
			ctx.fillStyle = 'rgba(0,0,0,0.3)';
			ctx.arc(xPosition, yPosition, zPosition, 0, Math.PI*2, true);
			ctx.fill();
		}
	}
};

$(function(){
	//setup the space for the drawing to happen
	commuteArt.initializeCanvas();

	//onDeviceMotion do some drawing
	window.ondevicemotion = commuteArt.drawMotion;
});