import React from 'react';
import './App.css';
import Header from './componentes/Header';
import Ubicacion from './componentes/Ubicacion';
import Galeria from './componentes/Galeria';

function App() {

  return (
    <div className="App">
      <form>
        <Header />
        <Ubicacion />
        <Galeria />
      </form>
    </div>
  );
}

export default App;
