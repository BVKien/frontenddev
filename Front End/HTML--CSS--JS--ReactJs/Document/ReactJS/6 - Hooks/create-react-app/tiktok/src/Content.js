import React from "react";
import { useEffect } from "react";

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

// 1. useEffect(callback)
// 2. useEffect(callback, [])
// 3. useEffect(callback, [deps])

const Content = () => {
  // useEffect(callback, [deps])
  // callback-tự truyền - tự viết: bắt buộc, [dependances]: không bắt buộc

  return (
    <div>
      <h1>Hi ae F8</h1>
    </div>
  );
};

export default Content;
