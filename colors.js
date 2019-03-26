var numSquare = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
var colorid = document.querySelector("#colorid");
var pickedC;
var message = document.querySelector("#answer");
var newButton = document.querySelector("#new");
var mode = document.querySelectorAll(".mode");

init();
function init(){
	// buttons and their event listeners
	for(var i = 0; i < mode.length; i++){
		mode[i].addEventListener("click", function(){
			mode[0].classList.remove("selected");
			mode[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent == "Easy" ? numSquare = 3 : numSquare = 6;
			reset();
		});
	}

	//choosing the color blocks
	for (var i = 0; i < squares.length; i++){
		squares[i].addEventListener("click", function(){
			var clickedC = this.style.background;
			if(clickedC == pickedC){
				message.textContent = "Correct!";
				changeColor(pickedC);
				document.querySelector("h1").style.background = pickedC;
				newButton.textContent = "PLAY AGAIN?"

			}
			else{
				this.style.background = "#232323";
				message.textContent = "Try Again";
			}
		});
	}

	//reset
	reset()
}


 
function reset(){
	colors = randomColorGenerate(numSquare);
	pickedC = pickColor();
	colorid.textContent = pickedC;
	newButton.textContent = "NEW COLORS";
	message.textContent = "";
	document.querySelector("h1").style.background = "steelblue";

	for (var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}
		else
			squares[i].style.display = "none";
	}
		
		
}
// easyBtn.addEventListener("click",function(){
// 	this.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numSquare = 3;
// 	colors = randomColorGenerate(numSquare);
// 	pickedC = pickColor();
// 	document.querySelector("h1").style.background = "steelblue";

// 	colorid.textContent = pickedC;
// 	for (var i = 0; i < squares.length; i++){
// 		if(colors[i])
// 			squares[i].style.background = colors[i];
// 		else
// 			squares[i].style.display = "none";

// 	}

// });

// hardBtn.addEventListener("click",function(){
// 	this.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquare = 6;
// 	colors = randomColorGenerate(numSquare);
// 	pickedC = pickColor();
// 	colorid.textContent = pickedC;
// 	document.querySelector("h1").style.background = "steelblue";

// 	for (var i = 0; i < squares.length; i++){
// 			squares[i].style.background = colors[i];
// 			squares[i].style.display = "block";

// 	}
// });



function changeColor(color){
	for(var i = 0; i<squares.length; i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function randomColorGenerate(num){
	var arr = [];
	while(num){
		arr.push(randomColor());
		num--;
	}
	return arr;

}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

newButton.addEventListener("click", function(){
	reset();
});