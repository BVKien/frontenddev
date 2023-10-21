import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GetAllCourses from './components/functions/GetAllCourses';
import GetCourseById from './components/functions/GetCourseById';

function App() {
  return (
    <Router>
      <p>This is App, bây giờ tôi sẽ viết test crud cho api của tôi nhé.</p>

      <ul>
        <li>
          <Link to='/GetAllCourses'>Get All Courses</Link>
        </li>
        <li>
          <Link to='/GetCourseById'>Get Course By Id</Link>
        </li>
      </ul>

      <Routes>
        <Route path='/GetAllCourses' element={<GetAllCourses />} />
        <Route path='/GetCourseById' element={<GetCourseById />} />
      </Routes>
    </Router>
  );
}

export default App;
