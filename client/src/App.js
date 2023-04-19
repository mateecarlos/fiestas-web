import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Salon from "./Components/Pages/Salon";
import Nosotros from "./Components/Pages/Nosotros";
import Gastronomia from "./Components/Pages/Gastronomia";
import Contact from "./Components/Pages/Contact";
import NavBar from "./Components/NavBar/navBar";
import Home from "./Components/Pages/Home";
import Menus from "./Components/Pages/Menus";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/nosotros" element={<Nosotros/>} />
        <Route path="/Salon" element={<Salon/>} />
        <Route path="/gastronomia" element={<Gastronomia/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/menus" element={<Menus/>} />
      </Routes>
    </Router>
  );
}
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
