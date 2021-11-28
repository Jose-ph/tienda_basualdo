

import Navbar from './components/Navbar/NavBar';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';

import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';


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
