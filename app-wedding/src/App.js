import React from 'react';
import './App.css';
import Header from './componentes/Header';
import Ubicacion from './componentes/Ubicacion';
import Galeria from './componentes/Galeria';

function App() {

  return (
    <form className='App'>
        <div className='App-header' style={{fontFamily:'Great Vibes,cursive'}}>
          <Header />  
          <div  style={{marginBlockStart:'400px',backgroundColor:'#DEC487',opacity:'0.8'}}>
              <Galeria />
              <Ubicacion/>
          </div>
          <footer>
            <p>© 2024. Todos los derechos reservados.</p>
          </footer>
        </div>
    </form>
  );
}

export default App;
