import './index.css'
import React from 'react';
import Homepage from './pages/Home';
import Loginpage from './pages/Login';
import Logoutpage from './pages/Logout';
import {BrowserRouter, Routes , Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='/loginpage' element={<Loginpage/>} />
            <Route path='/logoutpage' element={<Logoutpage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
