var leftScore = document.getElementById("leftScore");
var rightScore = document.getElementById("rightScore");
var input = document.getElementById("input");
var playerOne = document.querySelector("#playerOne");
var playerTwo = document.querySelector("#playerTwo");
var resetButton = document.querySelector("#reset");
var scoreToWinDisplay = document.getElementById("scoreToWin");
var winningScore = 0;
var scoreOne = 0;
var scoreTwo = 0;
var gameOver = false;


playerOne.addEventListener("click",function(){
	if(!gameOver){
		scoreOne++;
		if(scoreOne === winningScore){
			leftScore.classList.add("winner");
			gameOver = true;
		}
		leftScore.textContent = scoreOne;
	}
});

playerTwo.addEventListener("click",function(){
	if(!gameOver){
		scoreTwo++;
		if(scoreTwo === winningScore){
			rightScore.classList.add("winner");
			gameOver = true;
		}
		rightScore.textContent = scoreTwo;
	}
});

resetButton.addEventListener("click",function(){
	reset();
});

input.addEventListener("change",function(){
	reset();
	scoreToWinDisplay.textContent = this.value;
	winningScore = Number(this.value);
});

function reset(){
	scoreOne = 0;
	scoreTwo = 0;
	leftScore.textContent = 0;
	rightScore.textContent = 0;
	gameOver = false;
	leftScore.classList.remove("winner");
	rightScore.classList.remove("winner");
}