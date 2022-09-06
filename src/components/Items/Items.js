import items from '../Items/items.css'
import { ItemCount } from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

export function Items ({infoTarjeta}){
    return(
        <div class="card" >
            <Link style={{textDecoration:"none" , color:"black"}} to={`/items/${infoTarjeta.id}`} >
                
                <img  class="card-img-top" src={infoTarjeta.foto} alt={infoTarjeta.id}></img>
                <div class="card-body">
                    <h5 class="card-title">{infoTarjeta.titulo}</h5>
                    <p class="card-text">{infoTarjeta.descripcion}</p>
                    {/* <ItemCount stock = {infoTarjeta.stock} ></ItemCount> */}

                </div>
            
            </Link>
        </div>
    )
}