# Todo App with useReducer hook

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

// useReducer
// 1. Init state
const initState = {
  job: "",
  jobs: [],
};

// 2. Actions
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

// payload: dữ liệu mang theo đi
// payload chính là dữ liệu tương ứng với người dùng gõ vào input
const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};
// console.log(setJob("rua bat"));

const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};

const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload,
  };
};

// 3. Reducer
const reducer = (state, action) => {
  console.log("Action: ", action);
  console.log("Prev state: ", state);

  let newState;

  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload,
      };
      break;
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
      break;
    case DELETE_JOB:
      const newJobs = [...state.jobs];

      newJobs.splice(action.payload, 1);

      newState = {
        ...state,
        jobs: newJobs,
      };
      break;
    default:
      throw new Error("Invalid action");
  }
  console.log("New State: ", newState);
  return newState;
};

// 4. Dispatch

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  // Sử dụng destructuring để lấy ra các state
  const { job, jobs } = state;

  const inputRef = useRef();

  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));

    inputRef.current.focus();
  };

  // 2-way binding
  return (
    <div className="App" style={{ padding: 30 }}>
      <h3>To do</h3>
      <input
        ref={inputRef}
        value={job}
        placeholder="Enter todo..."
        onChange={(e) => {
          // e.target.value
          dispatch(setJob(e.target.value));
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span
              style={{ cursor: "pointer" }}
              onClick={() => dispatch(deleteJob(index))}
            >
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```
