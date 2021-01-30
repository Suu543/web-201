// 1. 조건문
// -   if, else if, else
// -   ternary operator
// -   switch

// 2. 반복문
// - for --> 롤 모래시계 삠
// - while  --> 물고기 탱크, 북극곰
// - do while --> 숫자 맞추기 게임
// - break
// - continue
// 반복문
// for, while, do while
// 1 ~ 10
// i < 10
// i = i + 2
// for(begin; condition; step) {
//     // body
// }

// 멈출줄 모르는 폭주기관차 같은 존재
// let attackList = ['a', 'b', 'c', 'd'];
// let item = "모래시계";
// for(let i = 0; i < attackList.length; i++) {
//     if (attackList[i] === "c" && item === "모래시계") {
//         console.log("나 모래시계 있어");
//         continue;
//     } else if (attackList[i] === "c" && item !== "모래시계") {
//         console.log("죽어요");
//         break;
//     } else {
//         console.log(`지금 공격은 ${attackList[i]}`);
//     }
//     console.log("이거는 항상 출력되요");
// }

// while, do while
// while(조건) {
//     // body
// }

// let i = 0;
// while (i < 10) {
//     console.log(`Current Index is `, i);
//     i++;
// }

// do ~ while
// let i = 0;
// do {
//     console.log('Current index', i);
//     i++;
// } while (i < 10);

// Use Cases
// 아쿠아리움
// 하나의 수조는 최대 물고기를 10마리만 수용할 수 있어
// 수조 속의 물고기 숫자가 10마리 보다 많으면
// 수조의 수용 최대치에 도달해 그러면 터져
// 자동으로 물고기 숫자를 확인하고,
// 10마리 이상의 물고기가 들어오면 자동으로 수조를 차단하는
// 프로그램을 만들고 싶다. 
// 클라이언트가 요청을 했다.

// const suzoLimit = 10;
// let fish = 0;

// // 수조를 계속 오픈한 상태
// while (fish < suzoLimit) {
//     fish++;
//     console.log(`There's room for ${suzoLimit - fish} more fish...`);
// }

// while + break
// 북극의 얼음이 계속 녹고있어
// 현재 북국에는 5마리의 북극곰이 있어
// 무한히 북극곰의 수를 확인하는 시스템을 고객이 원해
// 이 시스템은 북극곰이 1마리라도 살아있는 한
// 영원히 멈추지 않아
// 단, 한 마리라도 없으면 시스템이 종료되
// const iceCapsAreMelting = true;
// let polarBears = 5;

// while(iceCapsAreMelting) {
//     console.log(`There are ${polarBears} polar bears...`);
//     polarBears--;

//     if (polarBears === 0) {
//         console.log("There is no polar bears left");
//         break;
//     }
// }

// do ~ while
// while의 조건이 참이든 거짓이든 적어도 한 번은 do를 실행한다
// 1 ~ 12 사이의 숫자를 무작위로 출력해
// 사용자가 와서 이 숫자를 맞추는 거야
// 사용자가 이 숫자를 맞추기 위해 입력을 해야해
// 우리는 이 사용자가 몇 번에 걸쳐 맞췄는지
// 이 사용자에게 무작위로 출력한 숫자보다 큰지 작은지 힌트를 줄 수 있어

// 프로그래밍 3대장
// 1. 조건문 - if, else if, else, switch, ternary operator
// 2. 반복문 - while, do ~ while, for
// 3. 함수

// for 문
for(let i = 0; i < 10; i++) {
    // 1 ~ 10 다 출력하고 싶어, 근데 8만 출력x
    if (i === 8) {
        break;
    }

    console.log(i);
}