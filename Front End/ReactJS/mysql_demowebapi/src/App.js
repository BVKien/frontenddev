import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GetAllCourses from './components/functions/GetAllCourses';
import GetCourseById from './components/functions/GetCourseById';
import AddCourse from './components/functions/AddCourse';
import UpdateCourse from './components/functions/UpdateCourse';
import DeleteCourse from './components/functions/DeleteCourse';
import DeleteCourseUsingAxios from './components/functions/DeleteCourseUsingAxios';

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
        <li>
          <Link to='/UpdateCourse'>Update Course By Id</Link>
        </li>
        <li>
          <Link to='/DeleteCourse'>Delete Course</Link>
        </li>
        <li>
          <Link to='/DeleteCourseUsingAxios'>Delete Course - Axios</Link>
        </li>
      </ul>

      <Routes>
        <Route path='/GetAllCourses' element={<GetAllCourses />} />
        <Route path='GetCourseById' element={<GetCourseById />} />
        <Route path='/AddCourse' element={<AddCourse />} />
        <Route path='/UpdateCourse' element={<UpdateCourse />} />
        <Route path='/DeleteCourse' element={<DeleteCourse />} />
        <Route path='/DeleteCourseUsingAxios' element={<DeleteCourseUsingAxios />} />
      </Routes>

    </Router>
  );
}

export default App;
