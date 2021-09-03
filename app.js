function gameplay() {

	let playerScore=0;
	let computerScore=0;

//going to game

	const startGame = document.querySelector(".start");
	startGame.addEventListener('click',function(){

	const introduction = document.querySelector(".introduction");
	const game = document.querySelector(".game");
	introduction.classList.add("fadeout");
	game.classList.remove("fadeout");

	});

//gameplay

	computerChoices = ["rock","paper","scissors"];
	const choices = document.querySelectorAll(".buttons button");
	choices.forEach( choice =>{
		choice.addEventListener('click',function(){
			let playerChoice = choice.textContent;
			let computerChoice = computerChoices[Math.floor(Math.random()*3)];
			const hands = document.querySelectorAll(".images img");

			hands.forEach(hand =>{
				hand.addEventListener('animationend',function(){
						hand.style.animation='';
					})
			})
			changeImages(playerChoice,computerChoice);

		})
	})

//selecting winner

	function winner(playerChoice,computerChoice){
		let decision = document.querySelector(".game h1");

		if (playerChoice===computerChoice){
			decision.textContent="It's  a  tie";
		}

		else if(playerChoice==="rock"){
			if (computerChoice==="scissors"){
				decision.textContent="Player Wins";
				playerScore++;
			}
			else{
				decision.textContent="Computer Wins";
				computerScore++;	
			}
		}

		else if(playerChoice==="paper"){
			if (computerChoice==="rock"){
				decision.textContent="Player Wins";
				playerScore++;
			}
			else{
				decision.textContent="Computer Wins";	
				computerScore++;
			}
		}

		else if(playerChoice==="scissors"){
			if (computerChoice==="paper"){
				decision.textContent="Player Wins";
				playerScore++;
			}
			else{
				decision.textContent="Computer Wins";
				computerScore++;	
			}
		}
	}

//changing the images

	function changeImages(playerChoice,computerChoice){
		let playerHand = document.querySelector(".playerhand");
		let computerHand = document.querySelector(".computerhand");
		playerHand.src=`file:///C:/Users/HP/Desktop/web%20development/rock.png`;
		computerHand.src=`file:///C:/Users/HP/Desktop/web%20development/rock.png`;

		setTimeout(()=>{

		winner(playerChoice,computerChoice);
		updateScore();
		playerHand.src=`file:///C:/Users/HP/Desktop/web%20development/${playerChoice}.png`;
		computerHand.src=`file:///C:/Users/HP/Desktop/web%20development/${computerChoice}.png`;

	}, 2000);

		playerHand.style.animation = "shakeplayer 2s ease";
		computerHand.style.animation = "shakecomputer 2s ease";
	}

//updating the score

	function updateScore(){
		pScore = document.querySelector(".playerscore p");
		cScore = document.querySelector(".computerscore p");
		pScore.textContent=playerScore;
		cScore.textContent=computerScore;
	}

	const back = document.querySelector(".back button")
	back.addEventListener('click',function(){
		window.location.reload()
	})

}

gameplay();