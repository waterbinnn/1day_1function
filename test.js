//  1. 운년구하기
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(`2020년은 윤년일까? === ${isLeapYear(2020)}`);

//2-1. a부터 b 까지 합

function sumAll(a, b) {
  let output = 0;
  for (let i = a; i <= b; i++) {
    output += i;
  }
  return output;
}

console.log(sumAll(1, 5));

//2-2. a부터 b 까지 곱

function multiplyAll(a, b) {
  let output = 1;
  for (let i = a; i <= b; i++) {
    output *= i;
  }
}

console.log(multiplyAll(1, 5));

//3. 최솟값 구하기

function min(array) {
  let output = array[0];
  for (const item of array) {
    if (output > item) {
      output = item;
    }
  }
  return output;
}

const testArray = [34, 5, 11, 85, 92];
console.log(`${testArray} 중에서 최솟값은 = ${min(testArray)}`);

/////

let products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 32000, title: "Check Shirt" },
  { id: 2, price: 15000, title: "Black Tie" },
  { id: 3, price: 67000, title: "Springfield Shirt" },
  { id: 4, price: 82000, title: "Red Mini Dress" },
];

//4-1 . 가격 낮은 순
let lowToHigh = () => {
  products.sort((a, b) => a.price - b.price);
  console.log(products);
};
lowToHigh();

//4-2 . 가격 높은 순
let highToLow = () => {
  products.sort((a, b) => b.price - a.price);
  console.log(products);
};
highToLow();

//4-2 . 알파벳 순

let alphabet = products.map((item) => item.title).sort();
console.log(alphabet);

//5. 369 박수

function 삼육구(number) {
  let nums = number.toString().split("");
  let clap = [];

  for (let num of nums) {
    if (num === "3" || num === "6" || nums === "9") {
      clap.push("👏");
    }
  }
  return clap;
}

console.log(삼육구(369));
console.log(삼육구(336699));
console.log(삼육구(12));
