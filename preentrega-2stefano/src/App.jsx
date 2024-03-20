
import React from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'
import { BrowserRouter, Routes, Route } from 'react-router-dom' // Corregir la importación aquí
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter> {}
      <>
        <Navbar />
        <ItemListContainer greeting="Bienvenidos" />
        <ItemCount stock={10} />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
