import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './App.css'; // Import custom CSS

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <main>
                <Routes>
                <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/skills" element={<Skills/>} />
                </Routes>
                </main>
              
              {/* <footer className='page footer'>© Soban | All rights reserved 2024 | My Multi-Page Site</footer> */}
              <Footer/>
        </div>
        </Router>
    );
}

export default App;
