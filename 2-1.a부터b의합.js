//a 부터 b 까지 다 더해버리기

function sumAll(a, b) {
  let output = 0;
  for (let i = a; i <= b; i++) {
    output += i;
  }
  return output;
}

console.log(sumAll(1, 5));
