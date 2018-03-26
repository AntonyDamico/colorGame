var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var mesageDisplay = document.querySelector("#mesage");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");
var selectedClass = 



init();


function init(){
	//Mode buttons event listeners
	setUpModeButtons();
	//Enent listeners for the colors
	setUpSquares();

	reset();
}


resetButton.addEventListener("click", function(){
	reset();
});



function setUpModeButtons(){
	for(var i = 0; i < modeButton.length; i++){
		modeButton[i].addEventListener("click", function(){
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			// if(this.textContent === "Easy"){
			// 	numSquares = 3;
			// } else {
			// 	numSquares = 6;
			// }
			reset();
		})
	}
}


function setUpSquares(){
	for(var i = 0; i < squares.length; i++){
		//Add click listener
		squares[i].addEventListener("click",function(){
		
			//Grab clicked Color
			var clickedColor = this.style.backgroundColor;
			
			//Compare clicked color
			if(clickedColor === pickedColor){
				mesageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play again?"
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor; 
			} else {
				this.style.backgroundColor = "#232323";
				mesageDisplay.textContent = "Try Again";
			}
		});
	}
}


function reset(){
	//generate new colors
	colors = generateRandomColors(numSquares);
	// pick a new random color
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	//change the colors of the array
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	mesageDisplay.textContent = "";
}


function changeColors(color){
	//loop to all squares
	for(var i = 0; i < squares.length; i++){
		// change each color to match the given one
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//Make an array
	var arr = [];
	//add num random colors to array
	for(var i = 0; i < num; i++){
		//get random color and push into array
		arr.push(randomColor());
	}
	//return array
	return arr;
}


function randomColor(){
	//Pick a red 0 - 255
	var r = Math.floor(Math.random() * 256);
	//Pick a red 0 - 255
	var g = Math.floor(Math.random() * 256);
	//Pick a red 0 - 255
	var b = Math.floor(Math.random() * 256);
 	
 	var color = "rgb(" + r + ", " + g + ", " + b + ")";
	return  color;
}