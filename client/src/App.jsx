import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo } from './assets';
import { Home, CreatePost } from './pages';

const App = () => (
  <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-[#40414F] sm:px-8 px-4 py-4 border-b border-b-[#40414F]">

		  <a target="_blank" href="https://www.paypal.com/donate/?hosted_button_id=JKJW6X5XYN858"><img align="center" width="368" height="104" src="https://www.jkfuturetech.com/images/aibanner.png" alt="AI Joel  by JKFutureTech.com" /></a>

      <Link to="/" className="font-inter font-medium bg-[#17B169] text-white px-2 py-2 rounded-md">Home</Link>
      <Link target="_blank" to="https://www.aijoel.com/" className="font-inter font-medium bg-[#17B169] text-white px-4 py-2 rounded-md">AI Joel Chat</Link>
  
      <Link to="/create-post" className="font-inter font-medium bg-[#17B169] text-white px-4 py-2 rounded-md">Create Art</Link>
    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-[#40414F] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
