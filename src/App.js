import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { EmployeeList } from './pages/Home';
import './App.css';
import { CreateEmployee } from './pages/CreateEmployee';
import { EmployeeList } from './pages/EmployeeList';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CreateEmployee/>}/>
          <Route path='/EmployeeList' element={<EmployeeList/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
