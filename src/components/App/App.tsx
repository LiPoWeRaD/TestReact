import React from 'react';
import Main from '../../pages/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Breed from '../../pages/Breed';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:page" element={<Main />} />
          <Route path="/breed/:q" element={<Breed />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
