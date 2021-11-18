

import Navbar from './components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      < Navbar />
     
      
      </header>

      <ItemListContainer greeting="Productos de miel natural multifloral" />

      
    </div>
  );
}

export default App;
