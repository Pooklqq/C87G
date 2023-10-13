/*get the canvas element using its id and store it in a variable “canvas” so that we can 
manipulate the canvas throughout the js code.*/


//Get rference of canvas created.
canvas = document.getElementById("MyCanvas")

color = "orange"; 

ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40 ,0 , 2*Math.PI);
ctx.stroke();

// Attach canvas and addEventListener with 'mousedown' event.
canvas.addEventListener("mousedown",my_mousedown)


function my_mousedown(e)
{
    //taking color from input box
    //additional activity start
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    //additional activity ends
        
    console.log("X = " + mouse_x + " ,Y =  " + mouse_y);
    //Call the "circle()" function with mouse_x and mouse_y as parameters.  
    circle(mouse_x, mouse_y);

}


function circle(mouse_x, mouse_y)
{
    ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(mouse_x, mouse_y, 40, 0, 2*Math.PI);
//X, Y, RADIUS, STARTING ANGLE, ENDING ANGLE
ctx.stroke();
}
//additional activity



	
