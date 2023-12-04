# useRef hook

```jsx
// Content.js
import React, { useLayoutEffect, useRef } from "react";
import { useEffect, useState } from "react";

// Lưu các giá trị qua mỗi tham chiếu bên ngoài
// function component
// Initial value duy nhất
// Luôn trả về 1 object
// Update DOM

// Mỗi lần App re-render sẽ tạo ra 1 scope mới
// và code trong đó không liên quan gì đến scope cũ
// chính vì vậy sử dụng useRef -> để let timerId; ra 1 phạm vi bên ngoài -> mỗi lần re-render -> không ảnh hưởng đến scope
const Content = () => {
  const [count, setCount] = useState(60);

  // const ref = useRef(99); // Giá trị không truyền -> undefined
  // console.log(ref.current); // sau khi set giá trị mới -> không lấy giá trị cũ

  const timerId = useRef();
  const prevCount = useRef();
  const h1Ref = useRef();

  // Chậm hơn 1 nhịp khi trả kết quả về DOM - luồng của useEfect
  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  useEffect(() => {
    // console.log(h1Ref.current);
    const rect = h1Ref.current.getBoundingClientRect();
    console.log(rect);
  });

  const handleStart = () => {
    // Sau khi nhấn start -> id được lưu vào properties current
    timerId.current = setInterval(() => {
      // useRef - giá trị mới
      // ref.current = Math.random();
      // console.log(ref.current);

      setCount((prevCount) => prevCount - 1);
    }, 1000);

    console.log("start", timerId.current);
  };

  const handleStop = () => {
    clearInterval(timerId.current);
    console.log("stop", timerId.current);
  };

  // Giá trị hiện tại, giá trị trước đó
  console.log(count, prevCount.current);

  return (
    <div>
      <h1 ref={h1Ref}>{count}</h1>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
    </div>
  );
};

export default Content;
```
