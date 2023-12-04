# useLayoutEffect hook

# useLayoutEffect sẽ gọi lại callback và hàm cleanup nếu dependency thay đổi sau đó mới render lại UI.

```jsx
import React, { useLayoutEffect } from "react";
import { useEffect, useState } from "react";

// useEffect - side effects
// 1. Cập nhật lại state
// 2. Cập nhật lại DOM (mutated)
// 3. Render lại UI
// 4. Gọi cleanup nếu deps thay đổi
// 5. Gọi useEffect callback

// useLayoutEffect
// 1. Cập nhật lại state
// 2. Cập nhật lại DOM (mutated)
// 3. Gọi cleanup nếu deps thay đổi (sync) - đồng bộ
// 4. Gọi useLayoutEffect callback (sync)
// 5. Render lại UI

const Content = () => {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   if (count > 3) {
  //     setCount(0);
  //   }
  // }, [count]);

  // Tình huống dùng
  // setState rồi lại check state đó trong 1 useEffect rồi lại set lại chính nó
  useLayoutEffect(() => {
    if (count > 3) {
      setCount(0);
    }
  }, [count]);

  const handleRun = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleRun}>Run</button>
    </div>
  );
};

export default Content;
```
