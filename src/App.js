

import Navbar from './components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Itemcount from './containers/Itemcount';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      < Navbar />
     
      
      </header>

      <ItemListContainer greeting="Productos de miel natural multifloral" />

      <Itemcount />
      
    </div>
  );
}

export default App;
