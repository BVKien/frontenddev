# useEffect hook

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

// useEffect(callback, [deps])
// callback-tự truyền - tự viết: bắt buộc, [dependances]: không bắt buộc

// -------------------------------------------------------
// 1. Callback luôn được gọi sau khi component mounted
// đúng với -1 -2 -3

const Content = () => {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // console.log("mounnted, re-render");
    // document.title = title;

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, []);

  return (
    <div>
      <h1>Hi ae F8</h1>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />

      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
```
