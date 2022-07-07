import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Banner from './Component/Pages/Banner/Banner';


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}>
    </Route>
      <Route path='banner' element={<Banner/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;