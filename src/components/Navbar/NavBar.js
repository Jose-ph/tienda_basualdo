
import logoTienda from '../../logo3.png'
import Cartwidget from '../Cartwidget/Cartwidget';

function Navbar() {
  return (
    <div className="NavBar">

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/#"> <img src = {logoTienda} alt ="logo" style={{"width": "100px", "height": "100px"}}/>  </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">Productos</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link " href="/#">Promociones</a>
        </li>
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
