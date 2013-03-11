var commuteArt = {
	drawingSpace: undefined
	, center: {
		vertical: ($(window).height() / 2)
		, horizontal: ($(window).width() / 2)
	}
	, initializeCanvas: function(){
		//append the canvas element to the DOM and size it
		$('body').append('<canvas height="' + $(window).height() + '" width="' + $(window).width() + '" id="drawing"></canvas>');
	}

	, hideIntro: function(){
		$('.heading').hide();
	}
};

$(function(){
	commuteArt.initializeCanvas();

	//welcome to the world!
	commuteArt.drawingSpace = document.getElementById('drawing').getContext('2d');

	setTimeout('commuteArt.hideIntro()', 1000);

	//set our begining spot as the middle of the screen

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
				ctx.beginPath();
				ctx.fillStyle = 'rgba(0,0,0,0.3)';
				ctx.arc(xPosition, yPosition, zPosition, 0, Math.PI*2, true);
				ctx.fill();
			}
	}
});