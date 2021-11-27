

import Navbar from './components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import ItemListContainer from './containers/ItemListContainer';
import ItemCount from './containers/ItemCount';
import ItemDetailContainer from './containers/ItemDetailContainer';


function App() {
  return (
    <div className="App">

      <header className="App-header">

      < Navbar />
     
      
      </header>

       <ItemListContainer greeting="Productos de miel natural multifloral" />

      {/* <ItemCount stock = "5" initial= "1"  />  */}

      <ItemDetailContainer  />
      
    </div>
  );
}

export default App;
