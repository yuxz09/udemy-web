var p1Button = document.querySelector("#p1");//选id需要加#
var p2Button = document.getElementById("p2");//选id不需要添加#
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var resetButton = document.getElementById("reset");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;
var numInput=document.querySelector("input");
var p = document.querySelector("p");
var winningScoreDisplay = document.querySelector("p span");///为了改变p里面的span

p1Button.addEventListener("click", function(){
	if(!gameOver)
	{
		p1Score++;
		console.log(p1Score, winningScore);
		if(p1Score === winningScore)///
		{
			p1Display.classList.add("winner");
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
});

p2Button.addEventListener("click", function(){
	if(!gameOver)
	{
		p2Score++;
		if(p2Score === winningScore)
		{
			p2Display.classList.add("winner");
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}
});

resetButton.addEventListener("click", function(){
	reset();
});

function reset()
{
	p1Score=0;
	p2Score=0;
	p1Display.textContent=0;
	p2Display.textContent=0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
}

numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = numInput.value;
	winningScore = Number(numInput.value);
	reset();
	//如果不转换成数字，因为前面都是===需要类型相同，
	//那么改过后winningScore会是string类型
});









