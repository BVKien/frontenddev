# useContext hook

```jsx
// App.js
import Content from "./Content";
import { ThemeContext } from "./ThemeContext";
import "./App.css";
import { useContext } from "react";

// ComponentA => ComponentB => ComponentC
// Context
// ComponentA => ComponentC - x ComponentB
// Sử dụng Context -> có thể truyền dữ liệU từ A
// tới bất cứ Component con nào mà không cần trung gian qua component B

// 1. Create context - Phạm vi - để có thể truyền dữ liệu trong phạm vi đó - Khởi tạo
// 2. Provider - Người cung cấp - Muốn truyền đi dữ liệu phải dùng
// 3. Consumer - Người nhận dữ liệu - Muốn nhận dữ liệu phải dùng

// Thêm: Dark / Light --> ok

// Trả về 1 object
// Có Provider và Consumer
// Provider và Consumer là React component
function App() {
  const context = useContext(ThemeContext);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={context.toggleTheme}>Toggle them</button>
      <Content />
    </div>
  );
}

export default App;

// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "./ThemeContext.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Content.js
import React, { useLayoutEffect, useRef } from "react";
import { useEffect, useState, memo } from "react";
import Paragraph from "./Paragraph";

const Content = () => {
  return (
    <div>
      <Paragraph />
    </div>
  );
};

export default memo(Content);

// Paragraph.js
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext.js";

const Paragraph = () => {
  const context = useContext(ThemeContext);

  return <p className={context.theme}>Paragraph</p>;
};

export default Paragraph;

// ThemeContext.js
import { useState, createContext } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };


```
