import React, { useEffect, useState } from "react";
import Contact from "./Components/Contact/contact";
function App() {
  return (
    <div>
      <Contact></Contact>
    </div>
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