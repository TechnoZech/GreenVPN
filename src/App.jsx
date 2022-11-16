import React from "react";
import Home from "./component/Home.jsx";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contact from "./component/Contact.jsx";
import Support from "./component/Support.jsx";

function App() {
  return (

    <Router>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path ='*' element={<Home />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      
    </Router>
  );
}

export default App;
