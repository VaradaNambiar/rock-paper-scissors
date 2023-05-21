function getRandomValue(upper_limit) {
    return Math.floor(Math.random() * upper_limit)
}

function getComputerChoice() {
    let val = getRandomValue(3)
    switch (val) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
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

function displayScores() {
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
            displayChoices('scissors', 'rock')
            break;
        case "paper":
            result = "You Win! Scissors beats Paper";
            displayChoices('scissors', 'paper')
            break;
        case "scissors":
            result = "Its a tie!"
            displayChoices('scissors', 'scissors')
            break;
    }
    return result
}

function onPaper(opponent_selection) {
    let result = ''
    switch (opponent_selection.toLowerCase()) {
        case "rock":
            result = "You Win! Paper breats Rock";
            displayChoices('paper', 'rock')
            break;
        case "paper":
            result = "Its a tie!";
            displayChoices('paper', 'paper')
            break;
        case "scissors":
            result = "You Loose! Scissors beats Paper";
            displayChoices('paper', 'scissors')
            break;
    }
    return result
}

function onRock(opponent_selection) {
    let result = ''
    switch (opponent_selection.toLowerCase()) {
        case "rock":
            result = "Its a tie!";
            displayChoices('rock', 'rock')
            break;
        case "paper":
            result = "You Loose! Paper beats Rock";
            displayChoices('rock', 'paper')
            break;
        case "scissors":
            result = "You Win! Rock beats Paper";
            displayChoices('rock', 'scissors')
            break;
    }
    return result
}


function playRound(event) {

    let computer_selection = getComputerChoice()
    let selection = event.target.id
    console.log(selection.toLowerCase())
    let result = ''

    switch (selection.toLowerCase()) {
        case 'rock_btn':
            result = onRock(computer_selection)
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

function newGame() {
    computer_score = 0
    player_score = 0
    number_of_rounds = prompt('Number of rounds to play')
    displayScores()

    // clear the icons
    let images = document.querySelectorAll('img')
    images.forEach((image) => {
        let parent_node = image.parentNode
        parent_node.removeChild(image)
    })
}

function toggleChoiceButtons(disable) {
    let choice_buttons = document.querySelectorAll('choices')
    if (disable)
        choice_buttons.forEach((button) => button.disabled = true)
    else
        choice_buttons.forEach((button) => button.disabled = false)
}

function playGame() {
    playRound()
    toggleChoiceButtons(true) // not working
}

function displayChoices(user_choice, computer_choice) {
    let user_selection_img = document.createElement('img')

    switch (user_choice) {
        case 'rock':
            user_selection_img.setAttribute('src', 'rock.png')
            break
        case 'paper':
            user_selection_img.setAttribute('src', 'paper.png')
            break
        case 'scissors':
            user_selection_img.setAttribute('src', 'scissors.png')
            break
        default:
            alert('invalid selection!')
    }

    let user_selection_div = document.querySelector('#player_selection')
    user_selection_div.appendChild(user_selection_img)

    let computer_selection_div = document.querySelector('#computer_selection')
    let computer_selection_img = document.createElement('img')
    switch (computer_choice) {
        case 'rock':
            computer_selection_img.setAttribute('src', 'rock.png')
            break
        case 'paper':
            computer_selection_img.setAttribute('src', 'paper.png')
            break
        case 'scissors':
            computer_selection_img.setAttribute('src', 'scissors.png')
            break
        default:
            alert('invalid selection!')
    }
    computer_selection_div.appendChild(computer_selection_img)
}

let number_of_rounds = 1
let computer_score = 0
let player_score = 0
toggleChoiceButtons(true) // not working
let buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    if (button.id != 'new-game') {
        button.addEventListener('click', (e) => {
            playRound(e)
        })
    }
    else
        button.addEventListener('click', () => {
            newGame()
            toggleChoiceButtons(false) // not working
        })
})