import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GetAllCourses from './components/functions/GetAllCourses';
import GetCourseById from './components/functions/GetCourseById';
import AddCourse from './components/functions/AddCourse';

function App() {
  return (
    <Router>
      <p>Tôi viết giao diện API của tôi</p>

      <ul>
        <li>
          <Link to='/GetAllCourses'>Get All Courses</Link>
        </li>
        <li>
          <Link to='/GetCourseById'>Get Course By Id</Link>
        </li>
        <li>
          <Link to='AddCourse'>Add Course</Link>
        </li>
      </ul>

      <Routes>
        <Route path='/GetAllCourses' element={<GetAllCourses />} />
        <Route path='GetCourseById' element={<GetCourseById />} />
        <Route path='/AddCourse' element={<AddCourse />} />
      </Routes>

    </Router>
  );
}

export default App;
