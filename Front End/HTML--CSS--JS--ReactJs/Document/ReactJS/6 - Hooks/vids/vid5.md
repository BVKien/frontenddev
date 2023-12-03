# Mounted & Unmounted?

```jsx
// App.js
import { useState } from "react";
import Content from "./Content";

// Mounted / Unmounted
// Thời điểm đưa component vào sử dụng
// Thời điểm gỡ không sử dụng nữa

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

// Content.js
import React from "react";

const Content = () => {
  return (
    <div>
      <h1>Hi ae F8</h1>
    </div>
  );
};

export default Content;

```
