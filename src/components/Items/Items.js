import items from '../Items/items.css'
import { ItemCount } from '../ItemCount/ItemCount'

export function Items ({infoTarjeta}){
    return(
        <div class="card" >
            <img  class="card-img-top" src={infoTarjeta.foto} alt=""></img>
            <div class="card-body">
                <h5 class="card-title">{infoTarjeta.titulo}</h5>
                <p class="card-text">{infoTarjeta.descripcion}</p>
                <ItemCount stock = {infoTarjeta.stock} ></ItemCount>

            </div>
        </div>
    )
}