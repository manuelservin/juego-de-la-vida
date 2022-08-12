import React from "react"
import Home from "./pages/Home/Home"

import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Footer from "./components/Footer/Footer";

function App() {
  

 
  return (
    <>
     <Routes>
        <Route exact path="/" element={<Landing/>} />
        <Route exact path="/home" element={<Home />} />
       
      </Routes>
      
   
    
    </>
  )
}

export default App