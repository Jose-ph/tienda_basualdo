
import logoTienda from '../logo3.png'

function Navbar() {
  return (
    <div className="NavBar">

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"> <img src = {logoTienda} alt ="logo" style={{"width": "100px", "height": "100px"}}/>  </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Productos</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link ">Promociones</a>
        </li>
      </ul>
     
        
        <button class="btn btn-outline-success" type="submit">Log-in</button>
     
    </div>
  </div>
</nav>
 
 

    </div>
  );
}

export default Navbar;
