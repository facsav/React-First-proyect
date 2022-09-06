import { Items } from "../Items/Items"
import { useEffect, useState } from "react"
import {obtenerLista} from '../../helper/helper'
import { useParams } from "react-router-dom"

export function ItemList () {




    const {tipo} = useParams()






    const [data, setData] = useState([])

    useEffect(()=>{
        obtenerLista().then(data => {
            if(!tipo){
                setData(data)
            }
            else{
                const nuevaLista = data.filter( item=> item.tipo === tipo)
                setData(nuevaLista)
            }
        })
    },[tipo])
  
    return(
        <>  
            {data.map( data=>(
                <Items infoTarjeta={data} ></Items>
            ))}
        </>
    )
}



