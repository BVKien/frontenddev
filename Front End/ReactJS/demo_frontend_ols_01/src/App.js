import React from "react";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import TestAPI from "./TestAPI";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Content />
      <Footer />

      <TestAPI />
    </div>
  );
}

export default App;
