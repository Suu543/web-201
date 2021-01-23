// do ~ while
// 무작위 숫자를 출력하고 그 숫자를 맞추는 게임을 하는 경우
// 1 ~ 12 사이의 숫자가 무작위로 하나 선정되고, 우리는
// 이 무작위로 선정된 숫자를 맞춰야해

const MIN = 1;
const MAX = 12;

// 1 ~ 12 사이의 숫자를 무작위로 뽑겠다
let secretNumber = Math.floor(Math.random() * (MAX - MIN - 1)) + MIN;

// 총 몇번에 추측을 했는지 셀 수 있는 카운터가 필요
let guesses = 0;
let hint = '';
let number = 0;

do {
    let input = prompt(`Please Enter a number between ${MIN} and ${MAX}` + hint);
    number = parseInt(input);
    guesses++;

    if (number > secretNumber) {
        hint = ', and less than ' + number;
    } else if (number < secretNumber) {
        hint = ', and greater than ' + number;
    } else if (number == secretNumber) {
        alert("Bravo Bravo");
    }
} while (number != secretNumber);
