# useEffect with preview avatar

```jsx
// Content.js
import React from "react";
import { useEffect, useState } from "react";

// Khi muốn thực hiện Side effects
// - chương trình phần mềm khi có 1 tác động xảy ra -> dữ liệu chương trình bị thay đổi

// Events: Add / remove event listener
// Observer pattern: Subscribe / unsubcribe
// Closure
// Timers: setInterval, setTimeout, clearInterval, clearTimeout
// useState
// Mounted / unmounted
// ===
// Call API

// 1. Update DOM
//   - F8 blog title
// 2. Call API
// 3. Listen DOM events
//   - Scroll
//   - Resize
// 4. Cleanup
//   - Remove listener / Unsubcribe
//   - Clear timer

// -1. useEffect(callback) - ít dùng
// - Gọi callback mỗi khi componeent re-render
// - Gọi callback sau khi component thêm element vào DOM

// -2. useEffect(callback, [])
// - Chỉ gọi callback 1 lần sau khi component mounted

// -3. useEffect(callback, [deps])
// - deps: đơn giản là 1 cái biến chứa 1 giá trị dữ liệu
//    - có thể là props từ component vào
//    - có thể là state
//  - Callback sẽ được gọi lại mỗi khi deps thay đổi

// useEffect(callback, [deps])
// callback-tự truyền - tự viết: bắt buộc, [dependances]: không bắt buộc

// -------------------------------------------------------
// 1. Callback luôn được gọi sau khi component mounted
// đúng với -1 -2 -3
// 2. Cleanup function luôn được gọi trước khi component unmounted
// 3. Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)

// Cleanup
// const Content = () => {
//   const [count, setCount] = useState(100);

//   useEffect(() => {
//     console.log(`Mounted or Re-render lần ${count}`);

//     // Cleanup func
//     return () => {
//       console.log(`Cleanup lần ${count}`);
//     };
//   }, [count]);

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}>click me</button>
//     </div>
//   );
// };

const Content = () => {
  const [avatar, setAvatar] = useState();

  useEffect(() => {
    return () => {
      // nếu có avatar -> thực hiện revoke - thu hồi
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  });

  const handlePrevireAvatar = (e) => {
    const file = e.target.files[0];

    // file là một object => có thể tùy ý thêm properties cho nó
    // previwe là tự đặt tên
    file.preview = URL.createObjectURL(file);

    setAvatar(file);

    e.target.value = null; // chọn nhiều lần trên 1 ảnh cùng tên

    // console.log(file);
    // console.log(URL.createObjectURL(file));
  };

  return (
    <div>
      <input type="file" onChange={handlePrevireAvatar} />
      {avatar && <img src={avatar.preview} alt="" width="20%" />}
    </div>
  );
};

export default Content;

// App.js
import { useState } from "react";
import Content from "./Content";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App" style={{ padding: 30 }}>
      <button onClick={() => setShow(!show)}>Show</button>
      {show && <Content />}
    </div>
  );
}

export default App;

```
