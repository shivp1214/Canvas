var canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
var color="cornflowerblue";
//creating a freaking circle named sue with a shoeeeee oh yahhh  #rhymer/rapper/blahhhhh
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
color=document.getElementById("color").value;
console.log(color);
width=document.getElementById("width").value;
radius=document.getElementById("radius").value;
mouse_x=e.clientX-canvas.offsetLeft;
mouse_y=e.clientY-canvas.offsetTop;
circle(mouse_x,mouse_y);
}
function circle(mouse_x,mouse_y){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width;
ctx.arc(mouse_x,mouse_y,radius,0,2*Math.PI);
ctx.stroke();
}
function clear_area(){
ctx.clearRect(0, 0, canvas.width, canvas.height);
}
