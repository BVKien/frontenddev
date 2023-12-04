# useEffect with dependencies

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

const tabs = ["posts", "comments", "albums"];

const Content = () => {
  const [title, setTitle] = useState("");
  const [apis, setApis] = useState([]);
  const [type, setType] = useState("posts");

  console.log(type);

  useEffect(() => {
    document.title = title;
  });

  useEffect(() => {
    // Mounted
    // console.log("type change");

    // Update DOM
    // console.log("mounnted, re-render");
    // document.title = title;

    // Call API
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((values) => {
        setApis(values);
      });
  }, [type]); // chỉ re-render khi type thay đổi
  // []: chỉ re-render 1 lần duy nhất

  return (
    <div>
      <h1>Hi ae F8</h1>

      {tabs.map((tab) => (
        <button
          key={tab}
          style={
            type == tab
              ? {
                  color: "#fff",
                  backgroundColor: "#000",
                }
              : {}
          }
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}

      <br />
      <input value={title} onChange={(e) => setTitle(e.target.value)} />

      <ul>
        {apis.map((values) => (
          <li key={values.id}>{values.title || values.name}</li>
        ))}
      </ul>
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
