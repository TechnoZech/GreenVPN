import React from "react";
import Home from "./component/Home.jsx";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contact from "./component/Contact.jsx";
import Navbar from "./component/Navbar.jsx";
import Features from "./component/Features.jsx";
import Features2 from "./component/Features2.jsx";
import Deal from "./component/Deal.jsx";
import Testimonials from "./component/Testimonials.jsx";
import Faq from "./component/Faq.jsx";

function App() {
  return (

    <Router>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path ='*' element={<Home />} />
      </Routes>

      <Features />
      <Features2 />
      <Deal />
      <Testimonials />
      <Faq />
  
      
    </Router>
  );
}

export default App;
