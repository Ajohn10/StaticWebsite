import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';

function App() {
    return (
        <BrowserRouter>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
