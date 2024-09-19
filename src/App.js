
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css';

import HomePage from './components/HomePage'; 
import Donate from './components/Donate';

function App() {
  return (
    <Router>
      <div className="App"> 
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Donate" element={<Donate/>}/>
        </Routes>
      </div>

     
     </Router>
   
   

  );

  
}

export default App;

