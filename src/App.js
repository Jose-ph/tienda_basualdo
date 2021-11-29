

import Navbar from './components/Navbar/NavBar';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';

import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (

     <Router>  
    <div className="App">

      <header className="App-header">

      < Navbar />
     
      </header>

      <Switch> 
       
        <Route exact path = "/">

       <ItemListContainer greeting="Productos de miel natural multifloral" />

       </Route>

       <Route  path = "/category/:id">

       <ItemListContainer greeting="Productos de miel natural multifloral" />

       </Route>

       <Route path ="/item/:id" >

      <ItemDetailContainer  />

      </Route>


      </Switch>
    </div>
    </Router>
  );
}

export default App;
