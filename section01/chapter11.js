// 함수 선언

// function greeting() {
//   console.log('안녕하세요');
// }

// console.log('호출 전');
// greeting();
// console.log('호출 후');

function getArea(width, height) {
  // 중첩함수
  function another() {
    console.log('another');
  }

  another();

  let area = width * height;

  // console.log(area);
  return area;
}

let area1 = getArea(10, 20);
console.log(area1);

let area2 = getArea(30, 40);
console.log(area2);

let area3 = getArea(120, 200);
console.log(area3);
