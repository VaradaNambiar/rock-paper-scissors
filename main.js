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

function onScissors(opponent_selection){
    let result=''
    switch (opponent_selection.toLowerCase()) {
        case "rock":
            result = "You Loose! Rock beats Scissors";
            break;
        case "paper":
            result = "You Win! Scissors beats Paper";
            break;
        case "scissors":
            result = "Its a tie!"
            break;
    }
    let result_para = document.querySelector('#result_statement')
    result_para.textContent = result
}

function onPaper(opponent_selection){
    let result=''
    switch (opponent_selection.toLowerCase()) {
        case "rock":
            result = "You Win! Paper breats Rock";
            break;
        case "paper":
            result = "Its a tie!";
            break;
        case "scissors":
            result = "You Loose! Scissors beats Paper";
            break;
    }
    let result_para = document.querySelector('#result_statement')
    result_para.textContent = result

}

function onRock(opponent_selection){
    let result = ''
    switch (opponent_selection.toLowerCase()) {
        case "rock":
            result = "Its a tie!";
            break;
        case "paper":
            result = "You Loose! Paper beats Rock";
            break;
        case "scissors":
            result = "You Win! Rock beats Paper";
            break;
    }
    let result_para = document.querySelector('#result_statement')
    result_para.textContent = result

}
function playRound() {
    console.log("in playRound")

    let computerSelection = getComputerChoice()

    let rock_button = document.querySelector('#rock_btn')
    rock_button.addEventListener('click', onRock(computerSelection))

    let paper_button = document.querySelector('#paper_btn')
    paper_button.addEventListener('click', onPaper(computerSelection))

    let scissors_button = document.querySelector('#scissors_btn')
    scissors_button.addEventListener('click', onScissors(computerSelection))
}

let round_result = ""
let result_para = document.querySelector('#result_statement')
result_para.textContent = round_result

let buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener('click', playRound)})

