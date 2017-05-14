var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");
ctx.strokeStyle = "White"

function rect(){
	ctx.rect(20,20,150,100);
}

function line(){
	ctx.moveTo(0,0);
	ctx.lineTo(200,100);
}

rect();
line();

ctx.stroke();