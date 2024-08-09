import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Stories from './components/pages/Stories';
import Footer from './components/Footer'
import Gallery from './components/pages/Gallery';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
          <Route path='/' exact element={ <Home />}>
          </Route>
          <Route path='/home' exact element={ <Home />}>
          </Route>
          <Route path='/stories' exact element={ <Stories />}>
          </Route>
          <Route path='/gallery' exact element={ <Gallery />}>
          </Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
