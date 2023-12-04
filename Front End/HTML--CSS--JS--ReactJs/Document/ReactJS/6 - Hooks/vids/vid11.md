# useEffect with fake Chat App

# websocket - server - trình tạo thời gian thực

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

const lessons = [
  {
    id: 1,
    name: "ReactJsn la gi? Tai sao can hoc?",
  },
  {
    id: 2,
    name: "JavaScript la gi? Tai sao can hoc?",
  },
  {
    id: 3,
    name: "C# la gi? Tai sao can hoc?",
  },
];

const Content = () => {
  const [lessonId, setLessonId] = useState(1);

  useEffect(() => {
    const handleComment = ({ detail }) => {
      console.log(detail);
    };

    window.addEventListener(`lesson-${lessonId}`, handleComment);

    return () => {
      window.removeEventListener(`lesson-${lessonId}`, handleComment);
    };
  }, [lessonId]);

  return (
    <div>
      <ul>
        {lessons.map((lesson) => (
          <li
            key={lesson.id}
            style={{
              color: lessonId === lesson.id ? "red" : "#000",
              cursor: "pointer",
            }}
            onClick={() => setLessonId(lesson.id)}
          >
            {lesson.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content;

// App.js
import { useState } from "react";
import Content from "./Content";

// Fake comments
// custom event
// emit: phát đi
// global scope
function emitComment(id) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`, {
        detail: `Noi dung comment cua lesson ${id}`,
      })
    );
  }, 2000);
}

emitComment(1);
emitComment(2);
emitComment(3);

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
