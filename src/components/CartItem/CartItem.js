import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


export function CartItem ({infoDetalle}) {

    const {removeProduct} = useContext (CartContext)

    return(
        
        <div class="card mb-3" style={{maxWidth:"540px"}}>
            <div class="row g-0">
                <div class="col-md-4 ">
                    <img src={infoDetalle.foto} class="img-fluid rounded-start" alt="..."/>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{infoDetalle.titulo}</h5>
                        <p class="card-text">{`Cantidad: ${infoDetalle.quantity}`}</p>
                        <p>{`precio unitario: ${infoDetalle.precio}`}</p>
                        <p>Precio total: {infoDetalle.totalPrice}</p>
                        <button onClick={()=>removeProduct(infoDetalle.id)} className="btn btn-primary">Eliminar del Carrito</button>
                    </div>
                </div>
            </div>
        </div>   
    )
}