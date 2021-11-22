

import Navbar from './components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './containers/ItemCount';


function App() {
  return (
    <div className="App">
      <header className="App-header">

      < Navbar />
     
      
      </header>

      <ItemListContainer greeting="Productos de miel natural multifloral" />

      <ItemCount stock = "5" initial= "1"  />
      
    </div>
  );
}

export default App;
