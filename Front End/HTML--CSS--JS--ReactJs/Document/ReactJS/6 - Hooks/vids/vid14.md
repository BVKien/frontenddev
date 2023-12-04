# React.memo HOC

```jsx
// App.js
import { useState, memo } from "react";
import Content from "./Content";

// 1. memo() -> Higher Order Component (HOC)
// 2. useCallback()

// Ghi nhớ lại props của component để quyết ddingj có reder lại hay không
// -> sẽ tối ưu hiệu năng
// xử lý component tránh re-render trong tình huống không cần thiết

// Hooks
// HOC - class, func Component, wrap component lai
// Render props

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div className="App" style={{ padding: 30 }}>
      <Content count={count} />
      {/* <Content /> */}
      <h1>{count}</h1>
      <button onClick={increase}>Click me</button>
    </div>
  );
}

// memo(App)
export default App;

// Content.js
import React, { useLayoutEffect, useRef } from "react";
import { useEffect, useState, memo } from "react";

// Nguyên lý memo
// Nhận vào component
// Check các props của component sau mỗi lần re-render có thay đổi hay không
// Ít nhất 1 props thay đổi -> re-render
// Không có -> không re-render

// Để nhận biết thay đổi -> toán tử strict ===

const Content = ({ count }) => {
  console.log("re-render");
  return (
    <div>
      <h2>Hello anh em f8 {count}</h2>
    </div>
  );
};

export default memo(Content);

```
