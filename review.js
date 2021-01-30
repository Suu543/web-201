// let attack_list = ["a", "b", "c", "d", "e", "f"];
// let item = "guardian angel";

// for(let i = 0; i < attack_list.length; i++) {
    
//     if (attack_list[i] === "c" && item === "guardian angel") {
//         console.log("수호천사 사용");
//         continue;
//     }  else if (attack_list[i] === "c" && item !== "guardian angel") {
//         console.log("게임 종려");
//         break;
//     } else {
//         console.log(attack_list[i]);
//     }
// }

// while 문
// while (조건) {
//     // body
// }

// let i = 0;
// while (i < 3) {
//     console.log(`while: ${i}`);
//     i++;
// }
// let i = 3;
// do {
//     console.log(`do while: ${i}`);
//     i--;
// } while (i > 0)





// while
// 아쿠라리움 --> 수조안에 물고기가 10마리 보다 많아지면
// 수조가 터져 --> 수조의 수용 최대치에 도달한다는 말
// --> 자동으로 물고기 숫자를 확인하고 10마리 이상되면
// 수조와 수조 사이의 공간을 자동으로 차단하는 프로그램을 만들어주세요
// 수조의 수용 최대치
// const tankLimit = 10;

// let fish = 0;

// while (fish < tankLimit) {
//     // 몇 마리의 물고기가 더 들어올 수 있는지 알림을 준다
//     fish++;
//     console.log(`There's room for ${tankLimit - fish} more fishes`);

//     if (fish === 9) {
//         console.log("한 마리만 더 들어오면 곧 탱크가 차단됩니다.")
//     }
// }

// 1. while 문은 수조 속의 물고기 숫자가 10마리 보다 많지 않는 이상 동작을 멈추지 않는다
// 2. while 문은 수조 속의 물고기가 10마리 이상이되면 자동으로 멈춘다.
// while + break
// 북극곰 수를 확인하는 프로그램
// 북극의 얼음이 계속 녹아
// 현재 북극에 5마리의 북극곰이 있어
// 무한히 북극곰의 수를 확인한는 프로그램을 만들고 싶어
// 대신에 북극에 더 이상 북극곰이 없다면 시스템을 종료하게 하고 싶어
// let polarBears = 5;
// let iceCapsAreMelting = true;

// Readable Code => Easy to read
// while (iceCapsAreMelting) {
//     console.log(`There are ${polarBears} polar bears...`);
//     // 어쩔 수 없는 멸종
//     polarBears--;

//     if (polarBears === 0) {
//         console.log("북극곰 멸종...");
//         break;
//     }
// }

do ~ while
// 특정 숫자 맞추기 게임
// 내가 특정 숫자를 미리 정해두는거
// 친구가 와서 이 숫자를 맞추는 거야
// 이 친구가 이 숫자를 몇번많에 맞췄는지
// 이 친구에게 어떤 힌트를 줄 수 있을지
// 이 친구가 정답을 맞췄을때 어떤 값을 출력할지












