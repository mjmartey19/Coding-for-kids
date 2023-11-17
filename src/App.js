
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Program from './pages/Program';


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path = '/' element = {<Home />} />
            <Route path = '/:slug' element = {<Program />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
