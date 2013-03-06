var accelArt = {
	drawingSpace: undefined
	, initializeCanvas: function(){
		//append the canvas element to the DOM and size it
		$('body').append('<canvas height="' + $(window).height() + '" width="' + $(window).width() + '" id="drawing"></canvas>');
	}
};

$(function(){
	accelArt.initializeCanvas();

	//welcome to the world!
	accelArt.drawingSpace = document.getElementById('drawing').getContext('2d');

	//set our begining spot as the middle of the screen

	window.ondevicemotion = function(event) {
		var ctx = accelArt.drawingSpace
			, xPosition = event.acceleration.x * Math.floor((Math.random()*100)+10)
			, yPosition = event.acceleration.y * Math.floor((Math.random()*100)+10)
			, zPosition = event.accelerationIncludingGravity.z * Math.floor((Math.random()*50)+5);

			ctx.beginPath();
			ctx.moveTo(yPosition,zPosition);
			ctx.arc(xPosition,yPosition,zPosition,0,Math.PI*2,true);
			// ctx.lineTo(xPosition * zPosition, yPosition * (1.5 * zPosition));
			// ctx.lineTo(yPosition - zPosition, xPosition * (-1 * zPosition));
			// ctx.closePath();
			ctx.fill();
	}
});