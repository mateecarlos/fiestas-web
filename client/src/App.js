import React, { useEffect, useState } from "react";

import HomePage from "./Components/HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Salon from "./Components/Pages/Salon";
import About from "./Components/Pages/About";
import Blog from "./Components/Pages/Blog";
import Contact from "./Components/Pages/Contact";
import NavBar from "./Components/NavBar/navBar";
import Home from "./Components/Pages/Home";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/Salon" element={<Salon/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}
<Route exact path="/" element={<HomePage />} />
export default App;

// const [backendData, setBackendData] = useState([{}]);
// useEffect(() => {
//   fetch("/api")
//     .then((response) => response.json())
//     .then((data) => {
//       setBackendData(data);
//     });
// }, []);
// {typeof backendData.users === "undefined" ? (
//   <p>Loading...</p>
// ) : (
//   backendData.users.map((user, i) => <p key={i}>{user}</p>)
// )}
