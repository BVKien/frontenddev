// Promise (chain)

/**
- DOM event / event listener 
- json

+ promise 
- sync - synchronous - đồng bộ 
- async - asynchronous - bất đồng bộ 
- pain 
- lý thuyết , cách hoạt động
- thực hành 

- fetch
- DOM location
- local storage 
- session storeage 
- coding convention 
- best practices 
- mistakes 
- performance 
*/

// tiếp tục học - lý thuyết , cách hoạt động
// Promise (chain)

/*
var promise = new Promise(function (resolve, reject) {
  // resolve();
  // reject();

  // fake call api
  // resolve([
  //   {
  //     id: 1,
  //     name: "JavaScript",
  //   },
  // ]);

  //   reject("Tach");

  resolve();
});

// tính chất chuỗi của promise
// nếu resolve() -> nó có thể sinh ra nhiều .then()
// callback trong then thứ nhất return cái gì
// -> có thể nhận value đó ở .then() tiếp theo
// -> kết quả trả về của function trước
// là kết quả đầu vào tham số của function sau
// nếu không return thằng đằng sau sẽ nhận undefined
// trong function callback của 1 thằng .then()
// nếu nó không return ra 1 promise
// nó sẽ chạy ngay thằng .then() liền kề đó
// có nghĩa bây giờ reuturn ra bất cứ gì hoặc không return miễn sao nó không phải 1 promise
// nếu return ra 1 promise nó sẽ khác với giá trị không phải promise
// khác ở đây là - khi giá trị không phải promise, nếu không return gì
// nó sẽ chạy .then() liền kề -> không đợi
// nhưng nếu là 1 promise, nó sẽ đợi .then() có promise giải quyết xong
// rồi mới chạy .then() tiếp theo

// tóm lại
// coi cụm then() cũng là 1 function
// nó sẽ return chính cái value trong callback của then nếu nó không phải 1 promise
// còn nếu nó là 1 promise -> return chính cái promise nó return trong phần callback
promise
  .then(function () {
    // console.log(1);
    // return [1, 2, 3];

    // promise này cũng cso thể .then()
    // bản chất là promise lồng nhau
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve([1, 2, 3]);
      }, 3000);
    });
  })
  .then(function (data) {
    // nên việc .then() ở đây chính là .then() cho cụm promise đã được tạo ra ở .then() trước
    console.log(data);
    return 2;
  })
  .then(function (data) {
    console.log(data);
    return 3;
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("Done");
  });
*/

// bài toán
// giải thích
// .then() hiện giờ là đang làn việc với promise trong hàm được return
// tính chất promise
// -> phải đợi promise giải quyết xong mới đc đi tiếp đến .then() tiếp theo
// tính chất chuỗi
// tuần tự
// xử lý bất đồng bộ

// sleep
function sleep(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

// .then() ở đây là đang làm việc vớI promise được return trước đó
sleep(1000)
  .then(function () {
    console.log(1);
    return sleep(1000);
  })
  .then(function () {
    console.log(2);
    return sleep(1000);
  })
  .then(function () {
    console.log(3);
    return sleep(1000);
  });

// Ví dụ
function hell(value, cb) {
  cb(value);
}

// Không sử dụng Promise dẫn đến tạo ra callback hell
hell(1, function (valueFromA) {
  hell(valueFromA + 1, function (valueFromB) {
    hell(valueFromB + 1, function (valueFromC) {
      hell(valueFromC + 1, function (valueFromD) {
        console.log(valueFromD + 1);
      });
    });
  });
});

// Sử dụng Promise sẽ tạo ra đoạn code dễ đọc hơn và vẫn đảm bảo đúng logic
function notHell(value) {
  return new Promise(function (resolve) {
    resolve(value);
  });
}

notHell(1)
  .then(function (value) {
    return value + 1;
  })
  .then(function (value) {
    return value + 1;
  })
  .then(function (value) {
    return value + 1;
  })
  .then(function (value) {
    console.log(value + 1);
  });
