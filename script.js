
let player_sel = "";
let comp_sel = "";
let butts = document.getElementsByTagName("button");
// butt onclicks
document.getElementById("scissorsbutt").onclick = function() {
	player_sel = "✂";
	document.getElementById("resulttext").innerHTML = "";
	playGame();
};
document.getElementById("paperbutt").onclick = function() {
	player_sel = "📃";
	document.getElementById("resulttext").innerHTML = "";
	playGame();
};
document.getElementById("stonebutt").onclick = function() {
	player_sel = "🗿";
	document.getElementById("resulttext").innerHTML = "";
	playGame();
};


async function playGame(){
	displaySelection(player_sel);	
	await rollShapes();
	checkAnswer(player_sel, comp_sel);
	}

function rollShapes() {
  return new Promise((resolve) => {
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        comp_sel = computerPlay();
        document.getElementById("compsel").innerHTML = comp_sel;
      }, 50 * i);
    }
    setTimeout(resolve, 1530);
  });
}


function displaySelection(s) {
	document.getElementById("playersel").innerHTML = s;
}

function computerPlay() {
	const shapes = ["✂", "📃", "🗿"];
	const random = Math.floor(Math.random() * shapes.length);
	return shapes[random];
}

function checkAnswer(player, computer) {
	if (player === computer)
	{
		document.getElementById("resulttext").innerHTML = "draw!";
	}
	else if ((player=="✂"&&computer =="📃") || (player=="📃"&&computer=="🗿") || (player=="🗿"&&computer=="✂"))
	{
		document.getElementById("resulttext").innerHTML = "you win!";
	}
	else if ((player=="✂"&&computer =="🗿") || (player=="📃"&&computer=="✂") || (player=="🗿"&&computer=="📃"))
	{
		document.getElementById("resulttext").innerHTML = "you lose! boo hoo!";
	}
}
