// Object constructor
// naming convention - quy ước đặt tên của Object constructor
// Viết hoa chữ cái đầu

// khởi tạo - function + viết hoa chữ cái đầu
// bản thiết kế cho đối tượng sử dụng
function User(firtsName, lastName, avatar) {
  this.firtsName = firtsName;
  this.lastName = lastName;
  this.avatar = avatar;

  // this này để mô tả thuộc tính, phương thức sẽ có khi khởi tạo constructor
  this.getName = function () {
    // this trong đây là this của function
    return `${this.firtsName} ${this.lastName}`;
  };
}

// expression function
// var User = funtion()

// sử dụng từ khóa new
var author = new User("Kien", "Van", "dog.png");
var user = new User("Hieu", "Van", "dog.png");

// đối với các thuộc tính, phương thức không chung của các object -> sẽ tạo riêng -> không ảnh hưởng đến nhau
author.title = "F8 học lập trình để đi làm";
user.comment = "Js basic thật toẹt vời";

console.log(author);
console.log(user);

// gọi getName()
console.log(author.getName());
console.log(user.getName());

// mỗi khi gọi trong console, nó sẽ trả 1 thông tin mô tả vè constructor - bản thiết kế
console.log(author.constructor);
// kiểm tra xem đối tượng được khởI tạo từ constructor nào
console.log(author.constructor === User);
