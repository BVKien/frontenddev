// Break và Continue trong vòng lặp

// break - thoát khỏi vòng lặp
// continue - bỏ qua 1 vài lần lặp của vòng lặp

for (var i = 0; i < 10; i++) {
  // console.log(i);

  if (i % 2 !== 0) {
    console.log(i);
    continue;
  }

  // if (i >= 8) {
  //   console.log(i);
  //   break;
  // }
}
