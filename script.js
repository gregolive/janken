let playerScore = 0;
let computerScore = 0;
let empty;

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
        btns[i].style.border = "3px solid transparent"; 
    }
}
btns.forEach(button => {
    button.addEventListener('click', e => {
        removeBorder();

        playerSelection = e.target.parentElement.id;

        let computerSelection = computerPlay();

        console.log(playRound(playerSelection, computerSelection));
        stylePage(playerSelection, computerSelection);
    })
});

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
        player.style.borderTop = "3px solid #BC002D";
        player.style.borderLeft = "3px solid #BC002D";
        player.style.borderBottom = "3px solid #202b5a";
        player.style.borderRight = "3px solid #202b5a";
        computer.style.borderRadius = "8px";

        tieReplace(english, furigana, japanese);
    } else {
        originalReplace(english, furigana, japanese)

        player.style.border = "3px solid #BC002D";
        player.style.borderRadius = "8px";

        computer.style.border = "3px solid #202b5a";
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
    furigana[0].textContent = furigana[0].textContent.replace("Saisho","");
    furigana[1].textContent = furigana[1].textContent.replace("wa","");
    furigana[2].textContent = furigana[2].textContent.replace("guu","Aiko");
    if (furigana[3].textContent == "") {
        furigana[3].textContent = furigana[3].textContent.replace("","desho");
    }
    furigana[4].textContent = furigana[4].textContent.replace("Janken","");
    furigana[5].textContent = furigana[5].textContent.replace("pon","");
    japanese[0].textContent = japanese[0].textContent.replace("最初","");
    japanese[1].textContent = japanese[1].textContent.replace("は","");
    japanese[2].textContent = japanese[2].textContent.replace("ぐう","相子");
    japanese[3].textContent = japanese[3].textContent.replace("！","でしょ");
    japanese[4].textContent = japanese[4].textContent.replace("じゃんけん","！");
    japanese[5].textContent = japanese[5].textContent.replace("ぽん","");
    japanese[6].textContent = japanese[6].textContent.replace("！","");
}

function originalReplace(english, furigana, japanese) {
    english.textContent = english.textContent.replace("Tie! So we chant...","To start a game chant...");
    furigana[2].textContent = furigana[2].textContent.replace("Aiko","guu");
    furigana[3].textContent = furigana[3].textContent.replace("desho","");

    japanese[2].textContent = japanese[2].textContent.replace("相子","ぐう");
    japanese[3].textContent = japanese[3].textContent.replace("でしょ","！");
    japanese[4].textContent = japanese[4].textContent.replace("！","じゃんけん");

    if (japanese[0].textContent == "") {
        furigana[0].textContent = furigana[0].textContent.replace("","Saisho");
        furigana[1].textContent = furigana[1].textContent.replace("","wa");
        furigana[4].textContent = furigana[4].textContent.replace("","Janken");
        furigana[5].textContent = furigana[5].textContent.replace("","pon");

        japanese[0].textContent = japanese[0].textContent.replace("","最初");
        japanese[1].textContent = japanese[1].textContent.replace("","は");
        japanese[5].textContent = japanese[5].textContent.replace("","ぽん");
        japanese[6].textContent = japanese[6].textContent.replace("","！");
    }  
}