// Thêm/sửa/xóa khóa học với Fetch và REST API

// Documentation: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

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
- JSON server: API server - (Fake) / Mock API
-- CRUD - REST API
- Create - POST
- Read - GET
- Update - PUT / PATH
- Delete - DELETE 

- DOM location
- local storage 
- session storeage 
- coding convention 
- best practices 
- mistakes 
- performance 
*/

// Thêm/sửa/xóa khóa học với Fetch và REST API
var coursesApi = "http://localhost:3000/courses";

function start() {
  //   getCourses(function (courses) {
  //     renderCourses(courses);
  //   });

  // tối ưu
  getCourses(renderCourses);

  handleCreateForm();
}

// start ứng dụng web đầu tiên
// khi web chạy thì nó chạy
start();

// functions
function getCourses(callback) {
  fetch(coursesApi)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

// Create course
function createCourse(data, callback) {
  // fetch(url, options);
  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    // body là dữ liệu gửi đi
    body: JSON.stringify(data),
  };

  fetch(coursesApi, options)
    .then(function (response) {
      response.json();
    })
    .then(callback);
}

// Delete course
function handleDeleteCourse(id) {
  // fetch(url, options);
  var options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  fetch(coursesApi + "/" + id, options)
    .then(function (response) {
      response.json();
    })
    .then(function () {
      //   getCourses(renderCourses);
      var courseItem = document.querySelector(".course-item-" + id);
      if (courseItem) {
        courseItem.remove();
      }
    });
}

// Update - chưa Done

// mỗi lần render đều gọi lại courses
function renderCourses(courses) {
  var listCoursesBlock = document.querySelector("#list-courses");
  var htmls = courses.map(function (course) {
    // chọc vào class - xóa khỏi dom khi thực hiện handleDeleteCourse
    return `<li class="course-item-${course.id}">
        <h4>${course.name}</h4>
        <p>${course.description}</p>
        <button onclick="handleDeleteCourse(${course.id})">&times; Xóa</button>
    </li>`;
  });
  listCoursesBlock.innerHTML = htmls.join("");
}

// set up cho 1 form =sẵn sàng để Create
function handleCreateForm() {
  var createBtn = document.querySelector("#create");

  createBtn.onclick = function () {
    // lấy dữ liệu từ 2 input ra
    var name = document.querySelector('input[name="name"]').value;
    var description = document.querySelector('input[name="description"]').value;

    var formData = {
      name: name,
      description: description,
    };

    createCourse(formData, function () {
      getCourses(renderCourses);
    });
  };
}
