# useState hook

- Trạng thái của dữ liệu
- Giả sử khi bạn có 1 dữ liệu thay đổi từ giá trị này sang giá trị kia -> trạng thái dữ liệu
- 1 -> 2 || Nguyen a -> Nguyen b
- Đơn giản hóa thay đổi dữu liệu

# Tóm lại - dữ liệu thay đổi gì -> giao diện thay đổi đó

# Dùng khi nào?

- Khi muốn dữ liệu thay đổi thì giao diện được tự động cập nhật -> render lại theo dữ liệu

## Cách dùng

```jsx
import { useState } from "react";

function Component() {
    // gắn vào Component
    const [state, setState] = useState(initState);

    - initState
        - Đối số đầu vào, giá trị khởi tạo
        - chỉ dùng 1 lần trong lần đầu
        - return 1 mảng gồm 2 phần tử [state, setState]
        - trong lần đầu tiên, lấy initState đưa cho state ->  nếu là 1 -> state = 1
        - setState là 1 hàm, được sử dụng để set lại State, giả sử state đang là 1
        -> muốn sửa thành 2
        -> gọi setState -> truyền vào số 2
        -> state = 2

    - state

  ... code còn lại
}
```

# Lưu ý

- Component được re-render sau khi `setState`
- Initial state chỉ dùng cho lần đầu
- Set state với callback?
- Initial state với callback?
- Set state là thay thế state bằng giá trị mới

```jsx
import { useState } from "react";

// const orders = [100, 500, 300];

// function App() {
//   // Khoone sử dụng -> vì nạng nhọc, khi gọi làm hàm App() sẽ gọi lại total
//   // trong khi initial Value chi cần lần đầu tiên
//   // const [counter, setCounter] = useState(total);

//   // Initial state với callback? -> giải pháp
//   const [counter, setCounter] = useState(() => {
//     const total = orders.reduce((total, cur) => total + cur);

//     console.log(total); // test
//     return total;
//   });

//   const handleIncrease = () => {
//     // setCounter(counter + 1);
//     // Sử dụng callback cho setState
//     // setCounter((prevState) => prevState + 1);
//     // Set state là thay thế state bằng giá trị mới
//     setCounter(counter + 1);
//   };

//   return (
//     <div className="App" style={{ padding: 20 }}>
//       <h1>{counter}</h1>
//       <button onClick={handleIncrease}>Increase</button>
//     </div>
//   );
// }

function App() {
  const [info, setInfo] = useState({
    name: "Nguyen A",
    age: 20,
    address: "HD City",
  });

  const handleUpdate = () => {
    // setInfo({
    //   ...info,
    //   bio: "Yeu mau hong",
    // });

    setInfo((prev) => ({
      // Logic...

      ...prev,
      bio: "Yeu mau hong",
    }));
  };

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default App;
```
