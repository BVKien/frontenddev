// Promise (pain)

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

/// pain
/// callback hell
/// pyramd of doom
// những khái niệm này là vấn đề
// -> từ đó sinh ra promise để giải quyết 2 khái niệm này

/// callback hell
// callback lồng nhau khi ràng buộc dữ liệu

// ví dụ
// việc bên trong phụ thuộc việc bên ngoài
setTimeout(function () {
  // việc 1 trả về dữ liệu phục vụ cho việc 2
  console.log("viec 1");
  setTimeout(function () {
    // việc 2 đòi hỏi dữ liệu việc 1
    // tương tự
    console.log("viec 2");
    setTimeout(function () {
      // việc  đòi hỏi dữ liệu việc 2
      // tương tự
      console.log("viec 3");
      setTimeout(function () {
        // việc 4 đòi hỏi dữ liệu việc 3
        // tương tự....
        console.log("viec 4");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
