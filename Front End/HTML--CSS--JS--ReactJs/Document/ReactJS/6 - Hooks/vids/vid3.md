# Two-way binding trong React?

```jsx
import { useState } from "react";

// LƯU Ý
// 1. Array
// 2. Reference types

// Ví dụ
// 1. Random gift
// 2. Two-way Binding
// 3. Todolist

// const gifts = ["CPU i9", "RAM 32GB RGB", "RGB Keyboard"];

// function App() {
//   const [gift, setGift] = useState(); // undefined

//   const randomGift = () => {
//     const index = Math.floor(Math.random() * gifts.length);
//     setGift(gifts[index]);
//   };

//   return (
//     <div className="App" style={{ padding: 20 }}>
//       <h1>{gift || "Chưa có phần thưởng"}</h1>
//       <button onClick={randomGift}>Lấy thưởng</button>
//     </div>
//   );
// }

// ReactJS - One-way binding: ràng buộc 1 chiều
// Chiều tương tác trên giao diện
// Chiều dữ liệu
// function App() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const handleSubmit = () => {
//     console.log({
//       name,
//       email,
//     });
//   };

//   // Đây là one-way binding
//   // Làm sao để biến thành 2-way binding?
//   return (
//     <div className="App" style={{ padding: 30 }}>
//       <input value={name} onChange={(e) => setName(e.target.value)} />
//       <input value={email} onChange={(e) => setEmail(e.target.value)} />
//       <button onClick={handleSubmit}>Register</button>
//     </div>
//   );
// }

// 2-way binding
// Respone tufw API tra ve
const courses = [
  {
    id: 1,
    name: "HTML",
  },
  {
    id: 2,
    name: "CSS",
  },
  {
    id: 3,
    name: "JS",
  },
];

// function App() {
//   const [checked, setChecked] = useState(1);

//   console.log(checked);

//   // khi đó -> checked === course.id
//   const handleSubmit = () => {
//     console.log({
//       id: checked,
//     });
//   };

//   // Đây là one-way binding
//   // Làm sao để biến thành 2-way binding?
//   return (
//     <div className="App" style={{ padding: 30 }}>
//       {courses.map((course) => (
//         <div key={course.id}>
//           <input
//             type="radio"
//             // {checked} ở đây là đang set true false - điều kiện của radio
//             checked={checked === course.id}
//             onChange={() => setChecked(course.id)}
//           />
//           {course.name}
//         </div>
//       ))}

//       <button onClick={handleSubmit}>Register</button>
//     </div>
//   );
// }

function App() {
  const [checked, setChecked] = useState([]);

  console.log(checked);

  const handleChecked = (id) => {
    setChecked((prev) => {
      const isChecked = checked.includes(id);
      if (isChecked) {
        return checked.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  // khi đó -> checked === course.id
  const handleSubmit = () => {
    console.log({
      id: checked,
    });
  };

  // Đây là one-way binding
  // Làm sao để biến thành 2-way binding?
  // Danh sách đã chọn
  return (
    <div className="App" style={{ padding: 30 }}>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="checkbox"
            // {checked} ở đây là đang set true false - điều kiện của radio
            checked={checked.includes(course.id)}
            onChange={() => handleChecked(course.id)}
          />
          {course.name}
        </div>
      ))}

      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default App;
```
