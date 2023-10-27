import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GetAllCourses from './components/functions/GetAllCourses';
import GetCourseById from './components/functions/GetCourseById';
import AddCourse from './components/functions/AddCourse';
import './index.css';

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
        <li>
          <Link to='/AddCourse'>Add Course</Link>
        </li>
      </ul>

      <div className='ok'  > ok </div>

      <html>
        <div class="breadcrumb-section breadcrumb-bg">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 offset-lg-2 text-center">
                <div class="breadcrumb-text">
                  <p>Chất lượng hàng đầu</p>
                  <h1>Giỏ hàng</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </html>

      <Routes>
        <Route path='/GetAllCourses' element={<GetAllCourses />} />
        <Route path='/GetCourseById' element={<GetCourseById />} />
        <Route path='/AddCourse' element={<AddCourse />} />
      </Routes>
    </Router>
  );
}

export default App;
