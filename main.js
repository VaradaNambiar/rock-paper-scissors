// 0: rock
// 1: paper
// 2: scissors

function getRandomValue(upper_limit) {
    return Math.floor(Math.random() * upper_limit)
}

function getComputerChoice() {
    let val = getRandomValue(2)
    const joined = 'value inside : ' + val
    switch (val) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            return "invalid output";
    }
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection.toLowerCase().trim()) {
        case "rock":
            {
                switch (computerSelection.toLowerCase()) {
                    case "rock":
                        return "Its a tie!";
                        break;
                    case "paper":
                        return "You Loose! Paper beats Rock";
                        break;
                    case "scissors":
                        return "You Win! Rock beats Paper";
                        break;
                }
            }
        case "paper":
            {
                switch (computerSelection.toLowerCase()) {
                    case "rock":
                        return "You Win! Paper breats Rock";
                        break;
                    case "paper":
                        return "Its a tie!";
                        break;
                    case "scissors":
                        return "You Loose! Scissors beats Paper";
                        break;
                }
            }
        case "scissors":
            {
                switch (computerSelection.toLowerCase()) {
                    case "rock":
                        return "You Loose! Rock beats Scissors";
                        break;
                    case "paper":
                        return "You Win! Scissors beats Paper";
                        break;
                    case "scissors":
                        return "Its a tie!"
                        break;
                }
            }
        default:
            return "Invalid input";
    }
}

function game(n_rounds) {
    let iterator = 0;
    let player_score = 0;
    let computer_score = 0;

    while (iterator < n_rounds) {
        let playerSelection = prompt("rock/paper/scissors");
       
        // when user selects 'Cancel' 
        if (playerSelection == null) {
            if(iterator==0)
                return "Canceled"
            else
                break;
        }

        let computerSelection = getComputerChoice();
        let result_string = playRound(playerSelection, computerSelection);
        let array = result_string.split("!")

        switch (array[0]) {
            case "You Win":
                player_score += 1;
                break;
            case "You Loose":
                computer_score += 1;
                break;
            case "Its a tie":
                break;
            default:
                return "Something went wrong!"
        }
        ++iterator;
    }
    if (player_score > computer_score)
        return "Congratulations! You Won";
    else if (player_score < computer_score)
        return "Sorry! You Lost";
    else
        return "Its a tie!";
}

