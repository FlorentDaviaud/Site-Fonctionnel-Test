import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          {/*path= "*" ne se lance que si aucune adresse n'est déclarée au-dessus*/}
          <Route path="*" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;