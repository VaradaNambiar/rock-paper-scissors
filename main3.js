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

function addScore() {
    console.log("inside addScore()")
    let result_string = document.querySelector('#result_statement').innerText
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
            break; // should warn about invalid input
    }


}

function displayScores(){
    let player_score_para = document.querySelector('#player_score_value')
    player_score_para.textContent = player_score
    let computer_score_para = document.querySelector('#computer_score_value')
    computer_score_para.textContent = computer_score
}

function onScissors(opponent_selection) {
    let result = ''
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
    return result
}

function onPaper(opponent_selection) {
    let result = ''
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
    return result
}

function onRock(opponent_selection) {
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
    return result
}


function playRound(event){
    let computer_selection = getComputerChoice()
    let selection = event.target.id
    console.log(selection.toLowerCase())
    let result=''

    switch(selection.toLowerCase()){
        case 'rock_btn':
            result =onRock(computer_selection)
            break
        case 'paper_btn':
            result = onPaper(computer_selection)
            break
        case 'scissors_btn':
            result = onScissors(computer_selection)
            break
        default:
            alert('Wrong button!')
    }

    console.log(result)
    let result_para = document.querySelector('#result_statement')
    result_para.textContent = result
    addScore()
    displayScores()

}



let computer_score = 0
let player_score = 0
let buttons = document.querySelectorAll('button')
buttons.forEach((button)=>{
    button.addEventListener('click', (e)=>playRound(e))
})