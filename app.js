// Scope 범위, 범주
// Global Scope --> 엘리베이터, 공용 현관 비번
// Block Scope --> 개인집 비밀번호
// Block Scope --> Global Scope
// Global Scope <-- Block Scope
// { } curly brace

// 공용 현관 비밀번호
// Global Scope --> Global Variable
let password = 12345;

{
    // Local Scope --> Block Scope --> Local Variable
    let myPassword = 45678;
    console.log("myPassword", myPassword);
    console.log("password", password);
}

console.log("myPassword", myPassword);

// if (a > 3) {

// }

// for (let i = 0; i < 10; i++) {

// }

// function greeting() {

// }