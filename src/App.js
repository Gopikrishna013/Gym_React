// App.js

import React from 'react';
import './App.css';
import Gym from './Gym';
import Home from './Home';

import Footer from './Footer'


// import Nav from './Header'

import {BrowserRouter as Router,Routes,Route,} from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <Router>
        
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/gym' element={<Gym/>} />

        </Routes>
      </Router>

      <Footer/>


      {/* <Gym /> */}
    </div>
  );
}

export default App;
