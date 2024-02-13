// Canvas - Fishing Scene

//Canvas Setup
var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

//top-left corner (0,0)
//top-right corner (400,0)
//botton-left corner (0,400)
//bottom-right corner (400,400)

// Sky
ctx.fillStyle = "Lightblue";
ctx.fillRect(0, 0, 400, 400);
//Water
ctx.fillStyle = "blue";
ctx.fillRect(0, 250, 400, 300);
//Pier landing
ctx.fillStyle = "brown";
ctx.fillRect(0, 200, 250, 30);
//Pier posts 1
ctx.strokeStyle = "brown";
ctx.lineWidth = 10;

ctx.beginPath();
ctx.moveTo(10, 150);
ctx.lineTo(10, 400);
ctx.stroke();
//Pier post 2
ctx.strokeStyle = "brown";
ctx.lineWidth = 10;

ctx.beginPath();
ctx.moveTo(60, 150);
ctx.lineTo(60, 400);
ctx.stroke();

//Pier post 3
ctx.strokeStyle = "brown";
ctx.lineWidth = 10;

ctx.beginPath();
ctx.moveTo(100, 150);
ctx.lineTo(100, 400);
ctx.stroke();
//Pier post 4
ctx.strokeStyle = "brown";
ctx.lineWidth = 10;

ctx.beginPath();
ctx.moveTo(160, 150);
ctx.lineTo(160, 400);
ctx.stroke();
// Sun
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(75, 50, 20, 0, 2 * Math.PI);
ctx.fill();
//Fish head 1
ctx.lineWidth = 10;
ctx.fillStyle = "red";

ctx.beginPath();
ctx.arc(225, 300, 10, 0, 2 * Math.PI);
ctx.fill();

//Fish head 2
ctx.lineWidth = 10;
ctx.fillStyle = "pink";
ctx.beginPath();
ctx.arc(300, 350, 10, 0, 2 * Math.PI);
ctx.fill();

//Fish Tail for pink fish
ctx.fillStyle = "pink";
ctx.beginPath();
ctx.moveTo(300, 350);
ctx.lineTo(320, 340);
ctx.lineTo(320, 360);
ctx.lineTo(300, 350);
ctx.fill();
// Fish Tail for red fish
ctx.fillStyle = "red";
ctx.beginPath();
ctx.moveTo(225, 300);
ctx.lineTo(245, 290);
ctx.lineTo(245, 310);
ctx.lineTo(225, 300);
ctx.fill();

//Stick man

//Head
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.lineWidth = 3;
ctx.arc(250, 140, 15, 0, 2 * Math.PI);
ctx.stroke();

//Torso
ctx.beginPath();
ctx.moveTo(248, 155);
ctx.lineTo(243, 195);
ctx.stroke();

//Upper Leg
ctx.beginPath();
ctx.moveTo(243, 195);
ctx.lineTo(265, 205);
ctx.stroke();

// Lower Leg
ctx.beginPath();
ctx.moveTo(265, 205);
ctx.lineTo(270, 230);
ctx.stroke();

//Arm
ctx.beginPath();
ctx.moveTo(246, 170);
ctx.lineTo(280, 180);
ctx.stroke();

//Fishing pole
ctx.strokeStyle = "grey";
ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(275, 190);
ctx.lineTo(350, 100);
ctx.stroke();

//fishing line
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(350, 100);
ctx.lineTo(350, 300);
ctx.stroke();

//Cloud Image
var cloudImg = document.getElementById("cloudEl");
ctx.drawImage(cloudImg, 100, 50, 90, 90);
ctx.drawImage(cloudImg, 200, 0, 90, 90);

// Text
ctx.font = "15px Arial";
ctx.fillStyle = "white";
ctx.fillText("Art by Jeevan", 300, 390);
