//Create a reference for canvas 
var canvas=document.getElementById("mycanvas");
var ctx=canvas.getContext("2d");
//Give specific height and width to the car image
var cHeight=150;
var cWidth=75;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
carX= 15;
carY=350;

function add() {
   //upload car, and background images on the canvas.
   backgroundImage=new Image();
   backgroundImage.onload=uploadBackground;
   backgroundImage.src=background_image;
   console.log(backgroundImage);

   carImage= new Image();
   carImage.onload=uploadgreencar;
   carImage.src=greencar_image;
   console.log(carImage);
}

function uploadBackground() {
	//Define function ‘uploadBackground’
    ctx.drawImage(backgroundImage,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(carImage,carX,carY,cWidth,cHeight);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if(carY>=0){
		carY=carY-10;
		console.log("when up arrow is pressed X= "+carX+" Y= "+carY);
        uploadBackground();
        uploadgreencar();

	}
}

function down()
{
	//Define function to move the car downward
	if(carY<=500){
		carY=carY+10;
		console.log("when down arrow is pressed X= "+carX+" Y= "+carY);
        uploadBackground();
        uploadgreencar();

	}
}

function left()
{
	//Define function to move the car left side
	if(carX<=700){
		carX=carX-10;
		console.log("when left arrow is pressed X= "+carX+" Y= "+carY);
        uploadBackground();
        uploadgreencar();

	}
}

function right()
{
	//Define function to move the car right side
	if(carX>= 0){
		carX=carX+10;
		console.log("when right arrow is pressed X= "+carX+" Y= "+carY);
        uploadBackground();
        uploadgreencar();

	}
}
