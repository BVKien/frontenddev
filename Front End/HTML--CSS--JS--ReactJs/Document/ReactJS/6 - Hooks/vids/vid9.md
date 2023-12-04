# useEffect with timer functions

```jsx
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

const Content = () => {
  const [countDown, setCountDown] = useState(100);

  useEffect(() => {
    const timerId = setInterval(() => {
      // Đặt prev để tránh setInterval cùng trùng lặp nhiều thời điểm
      setCountDown((prev) => prev - 1);
      console.log("coundount...");
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCountDown(countDown - 1);
  //   }, 1000);
  // }, [countDown]);

  return <div>{countDown}</div>;
};

export default Content;
```
