// Toán tử 3 ngôi

var course = {
  name: "JavaScript",
  coin: 200,
};

if (course.coin > 0) {
  console.log(`${course.coin} coins`);
} else {
  console.log("free");
}

var result = course.coin > 0 ? `${course.coin} coins` : "free";
console.log(result);
