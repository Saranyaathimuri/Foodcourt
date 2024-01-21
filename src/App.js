import React from 'react';
import './App.css';
import Home from './Home';
import Orders from './Orders'
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"


import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";



function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/orders" element={<Orders/>}/>
        </Routes></div>
    </Router>
  );
}

export default App;
