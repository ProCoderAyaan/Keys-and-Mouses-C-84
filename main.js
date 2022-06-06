canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); 
	img_imgTag.onload = uploadimg;
	img_imgTag.src = img_image;   
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}
	if(keyPressed == '65<', '>90')
	{
       img_image = "Alpkey.png";
	   add();
       console.log("Alphabet");
	}
	if(keyPressed == '48<', '>57')
	{ 
		img_image = "numkey.png";
        console.log("Number");
	}
	if(keyPressed == '37<', '>40')
	{ 
		img_image = "Arrkey.png";
        console.log("Arrow");
	}
	if(keyPressed == '17<', '>27')
	{  
		img_image = "spkey.png";
        console.log("Special");
	};
	if(keyPressed == '`', '~','!','@','#','$','%','^','&', '*','(',')','-','_','=','+','[',']','{','}','|',';',':','"',',','.','/','<','>','?')
	{  
		img_image = "otherkey.png";
        console.log("Other");
	};

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122) (keyPressed >=65 && keyPressed<=90))
		background_image = "numkey.png";
	else{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}
}

function aplhabetkey()
{
 img_image = "Alpkey.png";
 add();
}
function numberkey()
{
	img_image = "numkey.png";
    add();
}
function arrowkey()
{  img_image ="Arrkey.png";
   add();
}
function specialkey()
{
	img_image ="spkey.png";
	add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
