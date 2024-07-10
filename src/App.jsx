import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import ListItem from './components/ListItem';
import Country from './components/Country';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/form" element={<Form />}></Route>
        
        <Route path="/country" element={<Country/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
