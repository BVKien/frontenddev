// Promise (concept)

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

/// Promise
// 1. new Promise
// 2. executor
// 3. use

// tạo ra 1 đối tượng promise
// new Promise(function(){}) - 1 constructor
// giaỉ quyết vấn đề callback hell
// nhưng không có nghĩa hoàn toàn thay thế callback

/// promise có 3 trạng thái
// 1. pending - đang chờ thành công hay thất bại
// 2. fulfilled - trạng thái thành công
// 3. rejected - tạch

var promise = new Promise(
  /// executor
  // có nghĩa function này sẽ được thực thi khi gọi tới Promise
  // ngay khi gọi promise nó sẽ gọi ngay funtion excutor
  // nó sẽ gọi excutor trước cả khi nhận được đối tượng var promise
  // executor function (resolve, reject) { // logic }
  function (resolve, reject) {
    // logic
    // thành công: gọi resolve()
    // thất bại: gọi reject()
    // trong excutor luôn phải gọi 1 trong 2 tham số resolve hoặc reject
    // nếu không promise sẽ ở trạng thái treo -> không thành công cũng không thất bài
    // -> memory leak: rò rỉ bộ nhớ

    // resolve();
    // reject();

    // fake call api
    // resolve([
    //   {
    //     id: 1,
    //     name: "JavaScript",
    //   },
    // ]);

    reject("Tach");
  }
);

// cách sử dụng
// promise trả 3 phương thức(callback(){}) thường sử dụng
// khi nào callback(){} cần thực thi?

// trong excutor, nếu resolve() được gọi thì callback then() được gọi
// nếu reject() được gọi thì callback catch() được gọi
// nếu 1 trong resolve() hoặc reject() được gọi thì callback finally() được gọi

promise
  .then(function (courses) {
    // thực thi lời hứa -> success
    console.log("Successfully");

    // -> nó sẽ trả về dữ liệu đã resolve ở promise
    console.log(courses);
  })
  .catch(function (error) {
    // bẫy bắt lỗi -> trả về thông báo
    console.log("Failure");

    // -> nó sẽ trả về dữ liệu đã reject ở promise
    console.log(error);
  })
  .finally(function () {
    console.log("Done");
  });

// promise là khái niệm sinh ra để xử lý những thao tác bất đồng bộ
// trước khi có promise chúng ta thường sử dụng callback
// và nó sẽ sinh ra vấn đề callback hell
// nó sẽ bị sâu vào -> rối và khó nhìn, khó hiểu
// promise sinh ra ở JavaScript ES6
// giúp code gọn đẹp và dễ hiểu hơn
