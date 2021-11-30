
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import logoTienda from '../../logo3.png'
import Cartwidget from '../Cartwidget/Cartwidget';


function Navbar() {

  let history= useHistory();










  return (
    <div className="NavBar">

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <li className="nav-item"> <NavLink className="nav-link" to={'/'}  ><img src = {logoTienda} alt ="logo" style={{"width": "100px", "height": "100px"}}/></NavLink></li>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
        <li className="nav-item"> <NavLink className="nav-link" to={'/'}  >Inicio</NavLink></li>
        <li className="nav-item"> <NavLink className="nav-link" to={'/category/electronics'}  >Electrónica</NavLink></li>
        <li className="nav-item"> <NavLink className="nav-link" to={'/category/jewelery'}  >Joyas</NavLink></li>
        <li className="nav-item"> <NavLink className="nav-link" to={"/category/men's clothing"}  >Ropa Hombres </NavLink></li>
        <li className="nav-item"> <NavLink className="nav-link" to={"/category/women's clothing"}  >Ropa Mujeres </NavLink></li>
      </ul>

      
      <Cartwidget/>
        
        
        <button className="btn btn-outline-success" type="submit">Log-in</button>
     
   
    </div>
  </div>
</nav>

    <h3>Del campe</h3>

    
 

    </div>
  );
}

export default Navbar;
