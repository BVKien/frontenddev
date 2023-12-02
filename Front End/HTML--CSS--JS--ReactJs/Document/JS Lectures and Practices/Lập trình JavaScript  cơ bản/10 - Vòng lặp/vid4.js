// Vòng lặp For - Phần 3

var myArray = ["html", "css", "js"];
//console.log(myArray[0]);

// performance
// hiệu năng tối ưu hơn khi viết code bằng cách này
var arrayLength = myArray.length;

for (var i = 0; i < arrayLength; i++) {
  console.log(myArray[i]);
}

//
var orders = [
  {
    name: "Khóa học HTML - CSS Pro",
    price: 3000000,
  },
  {
    name: "Khóa học Javascript Pro",
    price: 2500000,
  },
  {
    name: "Khóa học React Pro",
    price: 3200000,
  },
];
//console.log(orders[1].price);

var ordersLength = orders.length;

function getTotal(ordersArray) {
  var sum = 0;
  for (var i = 0; i < ordersLength; i++) {
    sum += ordersArray[i].price;
  }
  return console.log(sum);
}

// Expected results:
getTotal(orders); // Output: 8700000
