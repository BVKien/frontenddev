import React from "react";
import { Routes, Route, Switch, Router } from 'react-router-dom';
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import DefaultLayout from "./layouts/DefaultLayout";
import TestAPI from "./TestAPI";
import TestGetById from "./TestGetById";

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
    </div>
  );
}

export default App;
