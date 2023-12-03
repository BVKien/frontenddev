# Todolist with useState

# MD (markdown)

```jsx
import { useState } from "react";

function App() {
  const [job, setJob] = useState("");
  // Đưa vào initial dưới dạng function callback -> tránh lãng phí
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem("jobs"));
    return storageJobs ?? [];
  }); // bắt buộc null || undefined -> []

  console.log(job);

  const handleSubmit = () => {
    setJobs((prev) => {
      const newJobs = [...prev, job];

      // Save to local storage
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);

      return newJobs;
    });

    setJob("");
  };

  return (
    <div className="App" style={{ padding: 30 }}>
      <input value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```
