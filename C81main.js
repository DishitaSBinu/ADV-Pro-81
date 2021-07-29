var canvas=document.getElementById("my_canvas");
var draw=canvas.getContext("2d");
color="yellow";
draw.beginPath();
draw.strokeStyle = color;
draw.lineWidth = 3;
draw.arc(200, 200, 40, 0 , 2*Math.PI);
draw.stroke();

canvas.addEventListener("click", my_mousedown);

function my_mousedown(e)

{
mouse_x = e.clientX-canvas.offsetLeft;
mouse_y = e.clientY-canvas.offsetTop;

circle(mouse_x, mouse_y);
}

function circle(mouse_x, mouse_y)

{

    draw.beginPath();
    draw.strokeStyle = color;
    draw.lineWidth = 3;
    draw.arc(mouse_x, mouse_y, 40, 0 , 2*Math.PI);
    draw.stroke();

}
