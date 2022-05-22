/** 운년구하기
 * 조건 : 윤년 ( 4로 나누어 떨어지고, 100으로 나누어 떨어지지 않으나, 400으로 나누어 떨어지면 윤년)
 */

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(`2020년은 윤년일까? === ${isLeapYear(2020)}`);
