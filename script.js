let playerScore = 0;
let computerScore = 0;

// Determine winner
function playRound(player, computer) {
    if (player == computer) {
        return `Tie! You both played ${player}. Replay the round.`;
    } else if ((player == "scissors" && computer == "rock") || (player == "paper" && computer == "scissors") || (player == "rock" && computer == "paper")) {
        computerScore++;
        document.querySelector("#computer-score").textContent = computerScore;
        return `You lose! ${computer} beats ${player}.`;
    } else if ((player == "scissors" && computer == "paper") || (player == "paper" && computer == "rock") || (player == "rock" && computer == "scissors")) {
        playerScore++;
        document.querySelector("#user-score").textContent = playerScore;
        return `You win! ${player} beats ${computer}.`;
    }
}

// Computer move
function computerPlay() {
    let moves = ["rock", "scissors", "paper"];
    let randomNum = Math.floor(Math.random() * 3);
    return moves[randomNum];
}

const btns = Array.from(document.querySelectorAll('#button-row button'));
// Remove previous border
function removeBorder() {
    for (let i = 0; i < btns.length; i++) {
        btns[i].style.border = "2px solid transparent"; 
    }
}
btns.forEach(button => {
    button.addEventListener('click', e => {
        removeBorder();

        playerSelection = e.target.parentElement.id;
        console.log(playerSelection);

        let computerSelection = computerPlay();
        console.log(computerSelection);

        console.log(playRound(playerSelection, computerSelection));
        stylePage(playerSelection, computerSelection);
    });
})

function stylePage(playerElement, computerElement) {
    // For borders
    const player = document.getElementById(playerElement);
    const computer = document.getElementById(computerElement);
    // For text
    const english = document.querySelector('.english-rules');
    const furigana = document.querySelectorAll('.furigana');
    const japanese = document.querySelectorAll('.jp');

    // Add border colors & change text
    if (playerElement == computerElement) {
        player.style.borderTop = "2px solid #BC002D";
        player.style.borderLeft = "2px solid #BC002D";
        player.style.borderBottom = "2px solid #6f2da8";
        player.style.borderRight = "2px solid #6f2da8";
        computer.style.borderRadius = "8px";

        tieReplace(english, furigana, japanese);
    } else {
        originalReplace(english, furigana, japanese)

        player.style.border = "2px solid #BC002D";
        player.style.borderRadius = "8px";

        computer.style.border = "2px solid #6f2da8";
        computer.style.borderRadius = "8px";
    }
}

const reset = document.querySelector('.reset-button');
reset.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    document.querySelector("#user-score").textContent = playerScore;
    document.querySelector("#computer-score").textContent = computerScore; 
    removeBorder();
});

function tieReplace(english, furigana, japanese) {
    english.textContent = english.textContent.replace("To start a game chant...","Tie! So we chant...");
    furigana[0].textContent = furigana[0].textContent.replace("Saisho","Aiko");
    furigana[1].textContent = furigana[1].textContent.replace("wa","desho");
    furigana[2].textContent = furigana[2].textContent.replace("guu","");
    furigana[3].textContent = furigana[3].textContent.replace("Janken","");
    furigana[4].textContent = furigana[4].textContent.replace("pon","");
    japanese[0].textContent = japanese[0].textContent.replace("最初","相子");
    japanese[1].textContent = japanese[1].textContent.replace("は","でしょ！");
    japanese[2].textContent = japanese[2].textContent.replace("ぐう！","");
    japanese[3].textContent = japanese[3].textContent.replace("じゃんけん","");
    japanese[4].textContent = japanese[4].textContent.replace("ぽん！","");
}

function originalReplace(english, furigana, japanese) {
    english.textContent = english.textContent.replace("Tie! So we chant...","To start a game chant...");
    furigana[0].textContent = furigana[0].textContent.replace("Aiko","Saisho");
    furigana[1].textContent = furigana[1].textContent.replace("desho","wa");
    japanese[0].textContent = japanese[0].textContent.replace("相子","最初");
    japanese[1].textContent = japanese[1].textContent.replace("でしょ！","は");
    if (japanese[2].textContent == "") {
        furigana[2].textContent = furigana[2].textContent.replace("","guu");
        furigana[3].textContent = furigana[3].textContent.replace("","Janken");
        furigana[4].textContent = furigana[4].textContent.replace("","pon");
        japanese[2].textContent = japanese[2].textContent.replace("","ぐう！");
        japanese[3].textContent = japanese[3].textContent.replace("","じゃんけん");
        japanese[4].textContent = japanese[4].textContent.replace("","ぽん！");
    }  
}