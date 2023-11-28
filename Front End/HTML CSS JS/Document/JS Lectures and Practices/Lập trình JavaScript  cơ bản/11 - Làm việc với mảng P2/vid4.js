// Ví dụ: Array reduce() method

// console.log(i, total); - console.log có thể log đc rất nhiều thứ khác nhau dù 1 dòng

var courses = [
  {
    id: 1,
    name: "JavaScript",
    coin: 250,
  },
  {
    id: 2,
    name: "Python",
    coin: 200,
  },
  {
    id: 3,
    name: "C#",
    coin: 150,
  },
  {
    id: 4,
    name: "ReactJs",
    coin: 0,
  },
  {
    id: 5,
    name: "Ruby",
    coin: 0,
  },
  {
    id: 6,
    name: "C#",
    coin: 0,
  },
];

// khi có initial value
// lần đầu tiên reudce được gọi lại = giá trị khởi tạo là = 0
var i = 0;
var totalCoins = courses.reduce(function (total, course) {
  i++;

  //console.log(i, total);

  return total + course.coin;
}, 0); // initial value -> không bắt buộc - tuy nhiên ảnh hưởng đến việc reduce chạy thế nào
//console.log(totalCoins);

// khi không có initial value
// lần đầu tiên nó trả về 1 object javascript id = 1
// tức là nó lấy phần tử đầu tiên của mảng để làm giá trị khởi tạo
// khi đó current value [(function (total, course)]
// ở đây là course sẽ là giá trị thứ 2
// -> bị giảm đi 1 lần chạy, 1 lần gọi lại của function
var i = 0;
var totalCoins = courses.reduce(function (total, course) {
  i++;

  //console.log(i, total, course);

  return total + course.coin;
}); // initial value -> không bắt buộc - tuy nhiên ảnh hưởng đến việc reduce chạy thế nào
//console.log(totalCoins);

// inital value
// khi đặt initial value: mong muốn nhận kiểu dữ liệU là gì -> đặt initial value là kiểu dữ liệu đó
// nhưng trong trường hợp không đăt initial value
// mà kiểu dữ liệu vẫn là kiểu dữ liệu mà bạn mong muốn
// -> không cần phải đặt
// nếu không sử dụng initial value
// -> nó sẽ lấy giá trị đầu tiên làm khởi tạo
var numbers = [250, 200, 150, 0, 0, 0];

var tottalNumbers = numbers.reduce(function (total, number) {
  return total + number;
}); // initial value
console.log(tottalNumbers);

// bài tập
// bt1 - Flat - "làm phẳng" mảng từ Depth array - "Mảng sâu"
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

// xử lý
var flatArray = depthArray.reduce(function (flatOutput, depthItem) {
  return flatOutput.concat(depthItem);
}, []);
console.log(flatArray);

// bt2 - Lấy ra các khóa học đưa vào 1 mảng mới
// lấy các khóa học từ các topics ra thành 1 mảng mới
var topics = [
  {
    topic: "Front-end",
    courses: [
      {
        id: 1,
        title: "HTML, CSS",
      },
      {
        id: 2,
        title: "JavaScript",
      },
    ],
  },
  {
    topic: "Back-end",
    courses: [
      {
        id: 1,
        title: "NodeJs",
      },
      {
        id: 2,
        title: ".NET FW",
      },
    ],
  },
];

console.log(topics);

var newCourses = topics.reduce(function (course, topic) {
  return course.concat(topic.courses);
}, []);
console.log(newCourses);

var htmls = newCourses.map(function (course) {
  return `
        <div>
            <h2>title: ${course.title}</h2>
            <p>id: ${course.id}</p>
        </div>
    `;
});
console.log(htmls.join(""));
//document.write(htmls.join(""));

// bt3 - Viết hàm calculateRating để tính điểm trung bình IMDB
// của phims mà Christopher Nolan làm đạo diễn.
var watchList = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    Language: "English, Japanese, French",
    Country: "USA, UK",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
    imdbID: "tt1375666",
    Type: "movie",
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "USA, UK",
    imdbRating: "8.6",
    imdbVotes: "910,366",
    imdbID: "tt0816692",
    Type: "movie",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer:
      "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    Language: "English, Mandarin",
    Country: "USA, UK",
    imdbRating: "9.0",
    imdbVotes: "1,652,832",
    imdbID: "tt0468569",
    Type: "movie",
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    Director: "Christopher Nolan",
    Writer:
      "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    Language: "English, Urdu, Mandarin",
    Country: "USA, UK",
    imdbRating: "8.3",
    imdbVotes: "972,584",
    imdbID: "tt0372784",
    Type: "movie",
  },
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    Language: "English, Spanish",
    Country: "USA, UK",
    imdbRating: "7.9",
    imdbVotes: "876,575",
    imdbID: "tt0499549",
    Type: "movie",
  },
];

function calculateRating(arr) {
  var director = filterDirector(arr, "Christopher Nolan");
  var score = scoreSum(director);
  return score / director.length;
}
function filterDirector(arr, directorName) {
  return arr.filter((movie) => movie.Director == directorName);
}
function scoreSum(movieList) {
  return movieList.reduce(
    (accumulator, movie) => Number(accumulator) + Number(movie.imdbRating),
    0
  );
}

// Expected results
console.log(calculateRating(watchList)); // Output: 8.675
