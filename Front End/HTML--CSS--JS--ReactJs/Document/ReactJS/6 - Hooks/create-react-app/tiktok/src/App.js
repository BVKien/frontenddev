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
