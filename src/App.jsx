import React from "react";
import Home from "./component/Home.jsx";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Contact from "./component/Contact.jsx";
import Support from "./component/Support.jsx";
import Price from "./component/Price.jsx";
import Privacy from "./component/Privacy.jsx";
import Terms from "./component/Terms.jsx";
import ScrollToTop from './component/Scroll';

function App() {
  return (

    <Router>
    <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/price" element={<Price />} />
        <Route path ='*' element={<Home />} />
        <Route path="/support" element={<Support />} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path="/terms" element={<Terms/>} />
      </Routes>
      
    </Router>
  );
}

export default App;
