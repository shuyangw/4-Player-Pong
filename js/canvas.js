var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");
ctx.strokeStyle = "#FFFFFF";
var rectStartX = 400;

init();

function rect(){
	//arg1 = startX, arg2 = startY
	//arg3 = horizontal length, arg4 = vertical length
	ctx.rect(rectStartX-35,860,70,20);	
}

function line(){
	ctx.moveTo(0,0);
	ctx.lineTo(200,100);
}

document.addEventListener('mousemove', function(event){
	ctx.beginPath();
	var pos = getMousePos(c, event);
	if(pos.x > 55 && pos.x < 735){
		rectStartX = pos.x
	}
	ctx.clearRect(0, 0, 800, 900);
	ref();
});

// document.addEventListener('keydown', function(event){
// 	ctx.beginPath();
// 	if(event.keyCode == 65 /* a pressed */){
// 		if(rectStartX > 20){
// 			rectStartX -= 5;
// 		}
// 	}
// 	else if(event.keyCode == 68 /* d pressed */){
// 		if(rectStartX < 780){
// 			rectStartX += 5;
// 		}
// 	}
	
// 	ctx.clearRect(0, 0, 800, 900);
// 	ref();
// });

function ref(){
	rect();
	ctx.stroke();
}

function init(){
	ref();
}

function loop(){
	while(true){
		ctx
	}
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}