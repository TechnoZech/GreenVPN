import React from "react";
import Home from "./component/Home.jsx";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contact from "./component/Contact.jsx";
import Navbar from "./component/Navbar.jsx";

function App() {
  return (

    <Router>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path ='*' element={<Home />} />
      </Routes>
      
    </Router>
  );
}

export default App;
