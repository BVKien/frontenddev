# useReducer hook

```jsx
// App.js
import {
  useState,
  memo,
  useCallback,
  useMemo,
  useRef,
  useReducer,
} from "react";
import Content from "./Content";

// Redux? - Luồng hoạt động tương tự

// useReducer
// Dùng để làm gì?
// Cung cấp thêm 1 sự lựa chọn để sử dụng state cho funtion component
// Tức là useReducer giải quyết được thì useState cũng giải quyết được
// Dùng khi nào?
// - Hầu hết: useState - tình huống đơn giản
// - Tình huống state phức tạp - useReducer( array, object, nhiều tằng lớp..., nhiều state )

// ueState
// 1. Init state: 0
// 2. Actions: Up (state + 1) / Down (state - 1)

// useReducer
// 1. Init state: 0
// 2. Actions: Up (state + 1) / Down (state - 1)
// 3. Reducer
// 4. Dispatch

// Init state
const initState = 0;

// Actions - CONSTANT_CONVENTION
const UP_ACTION = "up";
const DOWN_ACTION = "down";

// Reducer
// state hiện tại
const reducer = (state, action) => {
  // test log
  console.log("reducer running...");

  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error("Invalid actions");
  }
};

// Dispatch

function App() {
  // Nguyên lý hoạt động
  // Khi App chạy lần đầu -> chạy useReducer -> nhận reducer tạm để đấy chưa gọi
  // nhận giá trị initState -> return 1 array [count, dispatch]
  // count chính là initState
  // dispatch -> dùng để kích hoạt action nào sẽ thực hiện -> state thay đổi -> re-render App
  const [count, dispatch] = useReducer(reducer, initState);

  return (
    <div className="App" style={{ padding: 30 }}>
      <h1>{count}</h1>
      <button onClick={() => dispatch(UP_ACTION)}>Up</button>
      <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
    </div>
  );
}

export default App;
```
