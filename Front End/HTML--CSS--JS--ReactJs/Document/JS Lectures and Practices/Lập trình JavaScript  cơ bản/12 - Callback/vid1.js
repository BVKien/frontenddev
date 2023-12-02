// Callback

// là hàm (function) được truyền qua đối số
// khi gọi hàm khác

/// là hàm
/// được truyền qua đối số
/// được gọi lại (trong hàm nhận đối số)

// param: thông số
function myFunction(param) {
  // khi truyền vào 1 func khác phải kiểm tra chắc chắn nó là 1 func -> thực thi
  if (typeof param === "function") {
    param("hoc lap trinh");
  }

  //console.log(typeof param);
}

function myCallback(value) {
  console.log("Value: ", value);
}

// truyền gì vào đối số -> param sẽ nhận lại được cái đó và giữ nguyên tính chất
// myFunction(đối số);
// nếu không check -> truyền vào callback
// -> lỗi myFunction(123); -> 123 ko phải func
myFunction(myCallback);

// bai tap
function sumCb(a, b) {
  return a + b;
}

function subCb(a, b) {
  return a - b;
}

function multiCb(a, b) {
  return a * b;
}

function divCb(a, b) {
  return a / b;
}

function caculate(a, b, cb) {
  return cb(a, b);
}

// Expected results
// caculate(1, 2, sumCb) // Output: 3
// caculate(1, 2, subCb) // Output: -1
// caculate(1, 2, multiCb) // Output: 2
// caculate(3, 1, divCb) // Output: 3
