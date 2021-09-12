// Tracking player's score, computer's score and round number
let playerScore = 0;
let computerScore = 0;
let round = 1;

// Randomly selects computer move by choosing a random number and assigning it to a corresponding array element
function computerPlay() {
    let moves = ["🪨", "✂️", "📃"];
    let randomNum = Math.floor(Math.random() * 3);
    return moves[randomNum];
}
let computerSelection = computerPlay();

// Prompt player for their move (force answer to all to lowercase and remove extra whitespaces)
let playerSelection = window.prompt("FIRST TO 5.\nROUND 1. 🪨 📃 or ✂️?").toLowerCase().trim();

// Assign player selections to emoji
function convertEmoji(word) {
    switch (word) {
    case "scissors":
        playerSelection = "✂️";
        break;
    case "rock":
        playerSelection = "🪨";
        break;
    case "paper":
        playerSelection = "📃";
        break;
    }
}
convertEmoji(playerSelection);

// Play one round, add points and increment round number
function playRound(player, computer) {
    if (player == computer) {
        return `Tie! You both played ${player}. Replay the round.`;
    } else if ((player == "✂️" && computer == "🪨") || (player == "📃" && computer == "✂️") || (player == "🪨" && computer == "📃")) {
        round++;
        computerScore++;
        return `You lose! ${computer} beats ${player}.`;
    } else if ((player == "✂️" && computer == "📃") || (player == "📃" && computer == "🪨") || (player == "🪨" && computer == "✂️")) {
        round++;
        playerScore++;
        return `You win! ${player} beats ${computer}.`;
    }
}

// Play a 5 round game of rock paper scissors
 function game() {

     //  Continue as long as no one has scored 3 points
     while (playerScore < 5 && computerScore < 5) {
         // Ask for new player move and convert to emoji
         playerSelection = window.prompt(`ROUND ${round}. 🪨 📃 or ✂️?`).toLowerCase().trim();
         convertEmoji(playerSelection);

         // New computer move
         computerSelection = computerPlay();

         // Play the round 
         console.log(playRound(playerSelection, computerSelection));
     }
     if (playerScore > computerScore) {
         return "YOU WIN"
     } else if (playerScore < computerScore) {
         return "YOU LOSE"
     } else {
        return "TIE"
     }
 }


console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
console.log(game());