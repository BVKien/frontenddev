# useMemo hook

```jsx
import { useState, memo, useCallback, useMemo, useRef } from "react";
import Content from "./Content";

// useMemo
// Tránh thực hiện lại 1 logic nào không cần thiết
//

function App() {
  const [name, setNamme] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const nameRef = useRef();

  const handleSubbmit = () => {
    setProducts([
      ...products,
      {
        name,
        price: +price,
      },
    ]);
    setNamme("");
    setPrice("");

    nameRef.current.focus(); // Lấy element từ DOM
  };

  // console.log(products);

  // Bị re-render không cần thiết - ví dụ: nhập 1 dãy số vào input
  // const total = products.reduce((result, product) => {
  //   console.log("Tinh toan lai...");
  //   return result + product.price;
  // }, 0);

  const total = useMemo(() => {
    const result = products.reduce((result, product) => {
      console.log("Tinh toan lai...");

      return result + product.price;
    }, 0);

    return result;
  }, [products]); // rỗng -> tính toán 1 lần || có deps -> thay đổi khi tính toán lại

  return (
    <div className="App" style={{ padding: 30 }}>
      <input
        ref={nameRef}
        value={name}
        placeholder="Enter name...."
        onChange={(e) => setNamme(e.target.value)}
      />
      <br />
      <input
        value={price}
        placeholder="Enter price..."
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubbmit}>Add</button>
      <br />
      Total: {total}
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```
