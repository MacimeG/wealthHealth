import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import './App.css';
import { EmployeeList } from './pages/EmployeeList';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/EmployeeList' element={<EmployeeList/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
