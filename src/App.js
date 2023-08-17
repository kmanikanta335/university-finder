import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Loginpage from './pages/Loginpage';

import SignUppage from './pages/SignUppage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<SignUppage/>}></Route>
        <Route path="/signin" element={<Loginpage/>}></Route>
       </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
