const paper = "paper";
const rock = "rock";
const scissors = "scissors";
const choices = [paper, rock, scissors];

function computerPlay() {
    var i = Math.floor(Math.random() * 3);
    return choices[i];
}
let userScore = 0;
let compScore = 0;


function game(playerChoices, computerChoices ) {
    const result = document.getElementById("txtResult");

    if (playerChoices == paper){
        if (computerChoices == paper){
            result.innerText = "Ничья!";
        }
        if (computerChoices == rock){
            result.innerText = "Победа! Бумага накрывает камень!";
            userScore ++;
        }
        if (computerChoices == scissors){
            result.innerText = "Поражение! Ножницы режут бумагу!";
            compScore ++;
        }
    }
    if (playerChoices == rock){
        if (computerChoices == rock){
            result.innerText = "Ничья!";
        }
        if (computerChoices == scissors){
            result.innerText = "Победа! Камень ломает ножницы!";
            userScore ++;
        }
        if (computerChoices == paper){
            result.innerText = "Поражение! Бумага накрывает камень!";
            compScore ++;
        }
    }
    if (playerChoices == scissors){
        if (computerChoices == scissors){
            result.innerText = "Ничья!";
        }
        if (computerChoices == paper){
            result.innerText = "Победа! Ножницы режут бумагу!";
            userScore ++;
        }
        if (computerChoices == rock){
            result.innerText = "Поражение! Камень ломает ножницы!";
            compScore ++;
        }
    }
    const gamescore = document.getElementById("score").innerText= userScore + " - " + compScore;

    if (userScore == 5){
        final.innerText="Победа человека!";
    }
    else {
        final.innerText = " ";
    }
    if (compScore == 5){
        final.innerText = "Победа машины";
    }
    else if (userScore != 5){
        final.innerText = " ";
    }
    if ((userScore == 5) || (compScore == 5)){
        userScore = 0;
        compScore = 0;
    }
}