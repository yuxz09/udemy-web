var numSquares = 6;
//var colors = [generateRandomColors(numSquares)];
var colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
//var easyBtn = document.querySelector("#easyBtn");
//var hardBtn = document.querySelector("#hardBtn");
var modeBtns = document.querySelectorAll(".mode");


init();

function init()
{
	/*
	set up mode button
	 */	
	setupModeBtns();
	/*
	set up squares
	 */	
	setupSquares();
	reset();
}

function setupModeBtns()
{
	//mode button event listeners
	for(var i = 0; i < modeBtns.length; i++)
	{
		modeBtns[i].addEventListener("click", function()
		{
			modeBtns[0].classList.remove("selected");////注意中间有classList
			modeBtns[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent === "Easy")
			{
				numSquares = 3;
			}
			else
			{
				numSquares = 6;
			}
			reset();
			//how many squares to show
			//pick new colors
			//pick new picked color
			//update page to reflect changes
		});
	}
}

function setupSquares()
{
	//grab color of clicked square
	//compare color to pickedColor
	for(var i = 0; i < squares.length; i++)
	{
	//	squares[i].style.backgroundColor = colors[i];

		squares[i].addEventListener("click", function(){		
			var clickedColor = this.style.backgroundColor;		
			if(clickedColor === pickedColor)
			{
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}
			else
			{
				this.style.backgroundColor = "#232323";	
				messageDisplay.textContent = "Try Again!"	
			}
		});
	}
}


function reset()
{
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;	
	resetButton.textContent = "New Colors";

	messageDisplay.textContent = "";	
	//change the colors of squares
	for(var i = 0; i < squares.length; i++)
	{
		//squares[i].style.backgroundColor = colors[i];
		if(colors[i])
		{
			//why add    squares[i].style.display = "block" 
			//之前设置了easy模式导致，后面没有color的squares.style.display都变成了none，改成"block"
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
	} 
	h1.style.backgroundColor = "#232323";
}



/*
easyBtn.addEventListener("click", function()
{
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++)
	{
		if(colors[i])
		{
			squares[i].style.backgroundColor = colors[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function()
{
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++)
	{
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});
*/

resetButton.addEventListener("click", function(){
	reset();

});


//colorDisplay.textContent = pickedColor;



function changeColors(color)
{
	//loop through all squares
	for(var i = 0; i < colors.length; i++)
	{
		//change each color to match given color
		squares[i].style.backgroundColor = color;
		//////////////////////////
	}
}

function pickColor()
{
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num)
{
	//make an array
	//add num random colors to array
	//return that array
	var arr = [];
	//repeat num times
	for(var i = 0; i < num; i++)
	{
		//get random color and push into array
		arr.push(randomColor());
	}
	return arr;
}

function randomColor()
{
	//click a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);

	var g = Math.floor(Math.random() * 256);

	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
	//if no spaces after ",", even clickedColor === pickedColor, will not show correct
	//since everytime set background color of an element, css automatically adds spaces between
}


