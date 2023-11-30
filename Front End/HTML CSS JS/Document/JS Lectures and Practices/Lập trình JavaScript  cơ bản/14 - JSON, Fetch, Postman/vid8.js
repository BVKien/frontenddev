// Fetch

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

/// Fetch
// có thể dùng để lấy dữ liệu từ phía backend trả về
// API (URL) - Application programing interface
// nó là cổng giao tiếp giữ các phần mềm

// API free typicode.com
// Backend -> API (URL) -> Fetch -> JSON(đơn giản, nhẹ)/XML
// -> JSON.parse -> JavaScript types
// -> Render ra giao diện với HTML

var postsApi = "https://jsonplaceholder.typicode.com/posts";

// tại sao phải học Promise trước khi học render
// vì fetch sử dụng Promise
// fetch() là hàm được dựng sẵn
// khi gọi nó sẽ return 1 Promise

// stream \ response: phản hồi
// response là 1 Promise, Object
// flow
// fetch() để gọi lên
// -> nhận được response
// -> từ response json ra 1 Promise để nhận ra được json ở phần .then() tiếp theo
// -> sau đó parse rồi nhận ra được kiểu dữ liệu JavaScript
// -> từ đó sử dụng kỹ thuật với JavaScript -> lặp -> render html cho người dùng
// trường hợp thất bại -> lọt vào .catch()
fetch(postsApi)
  .then(function (response) {
    // muốn nhận được json -> return ra là ok
    // response là 1 đối tượng - object - đối tượng này có 1 phương thức là json
    // -> response.json() -> nó sẽ lại trẩ lại 1 Promise -> có thể .then() tiếp tục phía sau
    return response.json();
    // JSON.parse: JSON -> JavaScript types
  })
  .then(function (postsData) {
    // console.log(postsData);
    // var htmls = '';
    var htmls = postsData.map(function (postsData) {
      return `<li> 
        <h2>${postsData.title}</h2> 
        <p>${postsData.body}</p> 
      </li>`;
    });

    var html = htmls.join("");

    document.getElementById("post-block").innerHTML = html;
  })
  .catch(function (error) {
    // sửa sai url -> test
    // alert("co loi");
    console.log("co loi: ", error);
  });

// kiếm tra API
// console
// Network -> Fetch/XHR
// bấm vào api -> xem status
