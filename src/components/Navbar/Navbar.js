import React from "react";

const Navbar = () => {
    return(
        <nav class="navbar navbar-expand-md navbar-light bg-light ">
            <image class="navbar-brand">
                <h1> Mi Tienda
                     </h1>
            </image>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item active">
                <a class="nav-link" id="estiloNav" href="../index.html">Inicio <span class="sr-only"></span></a>
                </li>
                <li class="nav-item">
                <a class="nav-link" id="estiloNav" href="../html/servicios.html">Servicios</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" id="estiloNav" href="../html/catalogo.html">Catalogo</a>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Nosotros
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="../html/historia.html">Historia</a>
                    <a class="dropdown-item" href="../html/filosofia.html">Filosofia</a>
                    <a class="dropdown-item" href="../html/contacto.html">Contacto</a>
                </div>
                </li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar 