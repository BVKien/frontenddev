// Promise methods (resolve, reject, all)

/**
- DOM event / event listener 
- json

+ promise 
- sync - synchronous - đồng bộ 
- async - asynchronous - bất đồng bộ 
- pain 
- lý thuyết , cách hoạt động
- thực hành 

+ khái niệm promise mới
1. Promise.resolve
2. Promise.reject 
3. Promise.all

- fetch
- DOM location
- local storage 
- session storeage 
- coding convention 
- best practices 
- mistakes 
- performance 
*/

// Promise methods (resolve, reject, all)
// tiếp tục lý thuyết , cách hoạt động

// thư viện: output luôn luôn là 1 promise

/*
// ví dụ 
// sleep
function sleep(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

// .then() ở đây là đang làm việc vớI promise được return trước đó

// nếu trường hợp bị reject trong 1 thằng .then() nào đó ?
// nó sẽ không chạy xuống những chuỗi .then() còn lại
// reject -> báo lỗi -> nó sẽ lọt vào .catch() bên ngoài
sleep(1000)
  .then(function () {
    console.log(1);
    return sleep(1000);
  })
  .then(function () {
    console.log(2);
    return new Promise(function (resolve, reject) {
      reject("co loi");
    });
  })
  .then(function () {
    console.log(3);
    return sleep(1000);
  })
  .catch(function (error) {
    console.log(error);
  });
*/

// tạo Promise.resolve như nào?
// luôn trả về trạng thái thành công
// nên sử dụng khi biết trước dữ liệu
// không bao giờ chạy vào catch
// var promise = Promise.resolve("thanh cong");

// Promise.reject
// var promise = Promise.reject("co loi");

// Promise.all
// các Promise nếu không phụ thuộc nhau hãy để nó chạy song song
// -> tổng thời gian chạy sẽ ngắn hơn
// vậy nếu như Promise.all có 1 thằng bị reject thì sao?
// kéo xuông Promise.all đọc

var promise1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve([1]);
    console.log(1);
  }, 1000);
});

// resolve
// var promise2 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve([2, 3]);
//     console.log([2, 3]);
//   }, 2000);
// });

// reject
var promise2 = Promise.reject("co loi");

// Promise.all([]): sé nhận đối số là 1 mảng
// thứ tự sao cũng được
// nó là promise -> cũng có thể .then()
// vậy nếu như Promise.all có 1 thằng bị reject thì sao?
// cho dù các Promise1, 2, ... có chạy xong hay không xong
// nó cũng sẽ đưa vào catch() của Promise.all
// -> 1 thằng lỗi thì rất jack việc
// tuy không phụ thuộc nhau nhưng cần tất cả cùng xong thì mới làm việc sau đó
Promise.all([promise1, promise2])
  .then(function (result) {
    var result1 = result[0];
    var result2 = result[1];

    return console.log(result1.concat(result2));
  })
  .catch(function (error) {
    console.log(error);
  });

// viết theo dạng ES6
// Promise.all([promise1, promise2]).then(function ([result1, result2]) {
//   return console.log(result1.concat(result2));
// });

// var promise = new Promise(function (resolve, reject) {
//   // Logic
//   // resolve("thanh cong");
//   reject("co loi");
// });

// promise
//   .then(function (result) {
//     console.log("result: ", result);
//   })
//   .catch(function (error) {
//     console.log("error: ", error);
//   });
