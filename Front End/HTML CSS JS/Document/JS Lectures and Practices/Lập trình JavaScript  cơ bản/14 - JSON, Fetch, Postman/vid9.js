// JSON server

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

+ fetch
- JSON server: API server 

- DOM location
- local storage 
- session storeage 
- coding convention 
- best practices 
- mistakes 
- performance 
*/

// JSON server
var courseApi = "http://localhost:3000/courses";

// response
fetch(courseApi)
  .then(function (response) {
    return response.json();
  })
  .then(function (courses) {
    console.log(courses);
  });
