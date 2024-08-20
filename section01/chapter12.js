function funcA() {
  // console.log('function A');
}

let varA = funcA;
varA();

// 1. 함수 표현식
// -> 호이스팅이 불가능

// 익명함수
let varB = function () {
  // console.log('function B');
};
varB();

// 2. 화살표 함수
let varC = () => {
  return 1;
};

// let varC = () => 1;

console.log(varC());

let varD = (value) => value + 1;

console.log(varD(10));
