let inputNumber = document.getElementById("inputNumber");
let submitBtn = document.getElementById("btn");
let restart = document.getElementById("restart");
let result = document.getElementById("result");
let guess = document.querySelector(".guess");
const guessdiv = document.getElementById("guessdiv");

let playing = true;

let NumberOfGuessing = 5;

const randomNumber = Math.floor(Math.random() * 50) + 1;

console.log(randomNumber);

const conditions = (userNumber) => {

  if (randomNumber === userNumber) {
    playing = false;
    result.innerHTML = `<p class='right'>HURRAY! You guessed right</p>`;
    guessdiv.innerHTML = `<p class ='wrong'>Click on the restart button</p>`;

  } else if (userNumber === 0) {
    NumberOfGuessing += 1;
    result.innerHTML = `<p class='wrong'>SORRY! Input a number between 1 - 50</p>`;

  } else if (userNumber < 0 || userNumber > 50) {
    NumberOfGuessing += 1;
    result.innerHTML = `<p class='wrong'>Enter numbers between 1 - 50</p>`;

  } else if (randomNumber < userNumber) {
    result.innerHTML = `<p class='try'>Your guess number ${userNumber} is higher</p>`;

  } else if (randomNumber > userNumber) {
    result.innerHTML = `<p class='try'>Your guess number ${userNumber} is lower</p>`;
  }
};

submitBtn.onclick = () => {
  let userNumber = Number(inputNumber.value);

  if (playing) {
    inputNumber.value = "";
    conditions(userNumber);
    NumberOfGuessing -= 1;
  }

  guess.innerHTML = `You have ${NumberOfGuessing} guesses`;

  if (NumberOfGuessing < 1) {
    guess.innerHTML = `You have no more guesses`;
    playing = false;
    result.innerHTML = `<p class = 'right'>You guessed wrong. The right anwser is ${randomNumber}</p>`;
    guessdiv.innerHTML = `<p class = 'wrong'>Click on the restart button</p>`;
  }
};

restart.onclick = () => {
  NumberOfGuessing = 5;
  playing = true;
  result.innerHTML = "";
  guess.innerHTML = `You have ${NumberOfGuessing} guesses`;
  guessdiv.innerHTML = "";
  randomNumber = Math.floor(Math.random() * 50) + 1;
};
