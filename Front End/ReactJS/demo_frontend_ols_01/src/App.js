import React from "react";
import { useState } from "react";
import { Router, Routes, Route, Switch } from 'react-router-dom';
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import DefaultLayout from "./layouts/DefaultLayout";
import TestAPI from "./TestAPI";
import TestGetById from "./TestGetById";
import TestPost from "./TestPost";
import TestPut from "./TestPut";

function App() {
  return (
    <div>
      {/* <Header />
      <Sidebar />
      <Content />
      <Footer />
      <DefaultLayout /> */}
      {/* <Router>
        <Routes>
          <Route path="/" element={<TestAPI />} />
          <Route path="/getCourseById" element={<TestGetById />} />
        </Routes>
      </Router> */}

      <TestAPI />
      <TestGetById />
      <TestPost />
      <TestPut />
    </div>
  );
}

export default App;



// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from "./Components/Header";
// import Footer from "./Components/Footer";
// import Sidebar from "./Components/Sidebar";
// import DefaultLayout from "./layouts/DefaultLayout";
// import TestAPI from "./TestAPI";
// import TestGetById from "./TestGetById";
// import TestPost from "./TestPost";
// import TestPut from "./TestPut";

// function App() {
//   return (
//     <Router>
//       <div>
//         <Header />
//         <Sidebar />

//         {/* Content and DefaultLayout should be within the Routes */}
//         <Routes>
//           <Route path="/" element={<DefaultLayout />}>
//             <Route index element={<TestAPI />} />
//             <Route path="/getById/:id" element={<TestGetById />} />
//             <Route path="post/:id" element={<TestPost />} />
//             <Route path="put/:id" element={<TestPut />} />
//           </Route>
//         </Routes>

//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;