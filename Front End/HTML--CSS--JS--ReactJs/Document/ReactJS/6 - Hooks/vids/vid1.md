# Hooks là gì?

- Nghĩa: Gắn, móc
- Method, Function được viết sẵn, cung cấp bởi ReactJS
- Mỗi Func này có tính năng, trường hợp cụ thể để sử dụng
- Khi làm việc với những Function Component mà cần thêm những tính năng mà Hooks cung cấp -> lấy ra Hooks tương ứng để dùng trong Component
- Đó là lý do gọi là Hooks, vì móc vào những Componenets

```jsx
import {

    - useState,
    - useEffect,
    - useLayoutEffect,
    - useRef,
    - useCallback,
    - useMemo,
    - useReducer,
    - useContext,
    - useImperativeHandle,
    - useDebugValue,

} from 'react'

## Chưa dùng Hooks, chỉ là UI component

# function ComponentA() {

     - return <h1>Haven't used hooks yet</h1>

}

## Sử dụng Hooks, hỗ trợ thêm nhiều tính năng hơn

# function ComponentB() {

    // useState
    const [state, setState] = useState(initState);

    // useEffect
    // useEffect(() => {

    }, [deps])

    // useLayoutEffect
    useLayoutEffect(() => {

    }, [deps])

    // useRef
    const ref = useRef();

    // useCallback
    const fn = useCallback(() => {

    }, [deps])

    // useMemo
    const result = useMemo(() => {
        // return results for memo
    }, [deps])

    // useReducer
    const [state, dispatch] = useReducer(reducer, initialArg, init);

    // useContext
    const value = useContext(MyContext);

    // useImperativeHandle
    useImperativeHandle(ref, createHandle, [deps]);

    // useDebugValue
    useDebugValue(isOnline ? 'Online' : 'Offline');

    return <h1>Hooks</h1>

}

1. Chỉ sử dụng cho funtion component

2. Component đơn giản và trở nên dễ hiểu

   - Không bị chia logic ra như methods trong lifecycle của Class Component
   - Không cần sử dụng 'this'

3. Sử dụng Hooks khi nào?

   - Dự án mới
   - Dự án cũ
     - Component mới => Function component + Hooks
     - Component cũ => Giữ nguyên, có thời gian tối ưu sau
   - Logic nghiệp vụ cần sử dụng các tính chất của OOP => Class component

4. Người mới nên bắt đầu sử dụng với Function hay Class component?

   - Function component

5. Có kết hợp sử dụng Function component & Class component được không?
   - Được

## Function compoenent

# function Item({children}) {

    return <li>{children}</li>

}

## Class component

# class List extends React.Component {

    render() {
        return (
            <ul>
                <Item>ReactJS</Item>
            </ul>
        )
    }

}
```
