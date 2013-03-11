var commuteArt = {
	drawingSpace: ''
	, center: {
		vertical: ($(window).height() / 2)
		, horizontal: ($(window).width() / 2)
	}
	, initializeCanvas: function(){
		//append the canvas element to the DOM and size it
		$('body').append('<canvas height="' + $(window).height() + '" width="' + $(window).width() + '" id="drawing"></canvas>');
	}

	, hideIntro: function(){
		var heading = $('.heading');

		if(heading.attr('display') !== 'none'){
			heading.hide();
		}
	}
};

$(function(){
	commuteArt.initializeCanvas();

	//welcome to the world!
	commuteArt.drawingSpace = document.getElementById('drawing').getContext('2d');

	window.ondevicemotion = function(event) {
		var ctx = commuteArt.drawingSpace
			, xPosition = event.accelerationIncludingGravity.x * 42
			, yPosition = event.accelerationIncludingGravity.y * 42
			, zPosition = event.accelerationIncludingGravity.z * 10;

			//default so we have some visible dot no matter what
			if(zPosition < 2){
				zPosition = 2;
			}

			if(xPosition > 21 || yPosition > 21 || zPosition > 10){
				//hide the header
				commuteArt.hideIntro();

				ctx.beginPath();
				ctx.fillStyle = 'rgba(0,0,0,0.3)';
				ctx.arc(xPosition, yPosition, zPosition, 0, Math.PI*2, true);
				ctx.fill();
			}
	}
});