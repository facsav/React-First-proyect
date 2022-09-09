import React from "react";
import { Link } from "react-router-dom";
import { Cart } from "../Cart/Cart";


const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-md navbar-light bg-light ">
            <Link style={{height:'3.5rem'}} className="nav-link" to='/'>
                <image class="navbar-brand">
                    <h1> Mi Tienda</h1>
                </image>
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    {/* <li class="nav-item active">
                         <Link className="nav-link" id="estiloNav" to='/'>Inicio</Link>
                    </li> */}
                    
                    {/* <li class="nav-item">
                         <Link className="nav-link" id="estiloNav" to='/detail'>Detalle</Link>
                    </li> */}

                        
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Catalogo
                        </a>
                    <div class="dropdown-menu" aria-labelledby="navb
                    
                    arDropdownMenuLink">
                        <Link className="nav-link" id="estiloNav" to='/catalogo'>Ver Productos</Link>
                        <Link className="nav-link" id="estiloNav" to='/catalogo/proteina'>Ver proteinas</Link>
                        <Link className="nav-link" id="estiloNav" to='/catalogo/creatina'>Ver creatinas</Link>
                        <Link className="nav-link" id="estiloNav" to='/catalogo/gainer'>Ver gainers</Link>
                        <Link className="nav-link" id="estiloNav" to='/catalogo/pre'>Ver pre entrenos</Link>
                        <Link className="nav-link" id="estiloNav" to='/catalogo/otros'>Ver otros</Link>
                    </div>
                    </li>
                    <li class="nav-item ">
                        <Cart></Cart>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar 