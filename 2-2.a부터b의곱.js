//a 부터 b 까지 다 더해버리기

function multiplyAll(a, b) {
  let output = 1;
  for (let i = a; i <= b; i++) {
    output *= i;
  }
  return output;
}

console.log(multiplyAll(1, 5));
