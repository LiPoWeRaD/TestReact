import React from 'react';
import Main from '../../pages/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Breed from '../../pages/Breed';
import Header from '../Header/Header';
import Likes from '../Likes/Likes';

function App() {
  return (
    <BrowserRouter>
      <header className='bg-slate-500'>
        <Header />
      </header>
      <main className='bg-slate-800'>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:page" element={<Main />} />
          <Route path="/breed/:q" element={<Breed />} />
          <Route path="/likes" element={<Likes />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
