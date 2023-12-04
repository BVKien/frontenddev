# useCallback hook

```jsx
// App.js
import { useState, memo, useCallback } from "react";
import Content from "./Content";

// 1. memo() -> Higher Order Component (HOC)
// 2. useCallback()
// - Reference types
// - React memo()

// - Sinh ra để tránh tạo ra hàm mới không cần thiết trong function component

function App() {
  const [count, setCount] = useState(0);

  // Hàm trực tiếp xử lý logic -> sử dụng handle
  // Props chờ hành động ấu xảy ra -> thay thành on
  // so sánh tham chiếu địa chỉ bộ nhớ khác nhau -> khác scope
  // const handleIncrease = () => {
  //   setCount((prevCount) => prevCount + 1);
  // };

  // khi ứng dụng bắt đầu chạy
  // Lần đầu tiêp App mounted -> chạy qua handleIncrease
  // -> useCallback nhận được callback -> tạo ra hàm  setCount((prevCount) => prevCount + 1);
  // -> nhận được tham chiếu -> lưu ra ngoài scope của App -> return tham chiếu đó
  // nếu [] trống -> trả lại tham chiếu trước đó thay vì tạo ra 1 hàm mới
  // -> return chính tham chiếu của lần mounted
  // -> nếu [deps] -> khi rạo ra tham chiếu mới sẽ trả về tham chiếu mới
  // nếu trống -> luôn trả về tham chiếu trước đó
  const handleIncrease = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); // [deps] -> hoạt động tương tự useEffect
  return (
    <div className="App" style={{ padding: 30 }}>
      <h1>{count}</h1>
      <Content onIncrease={handleIncrease} />
    </div>
  );
}

// memo(App)
export default App;

// Content.js
import React, { useLayoutEffect, useRef } from "react";
import { useEffect, useState, memo } from "react";

const Content = ({ onIncrease }) => {
  console.log("re-render");
  return (
    <div>
      <>
        <button onClick={onIncrease}>Click me</button>
      </>
    </div>
  );
};

export default memo(Content);

```
