//정규식으로 이메일형식 검사하기
//알파벳@알파벳.알파벳 형식

let input = (email) => {
  if (/\S+@\S+\.\S+/.test(email) === false) {
    console.log("낫유효");
  } else {
    console.log("유효");
  }
};

input("ddd");
input("ddd@ss");
input("ddd@ddd.sss");
