import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import { AnimatePresence, motion } from 'framer-motion';

function AppContent() {
    const location = useLocation();

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-1 relative overflow-hidden">
                {/* Make the container relative and hide overflow */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        className="absolute inset-0 flex flex-col"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Routes location={location} key={location.pathname}>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                        </Routes>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}
