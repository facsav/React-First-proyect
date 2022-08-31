import { Items } from "../Items/Items"
import imagenes from '../../assets/imagenes'
import { useEffect, useState } from "react"
import {obtenerLista} from '../../helper/helper'

export function ItemList () {

    const [data, setData] = useState([])
    useEffect(()=>{
        obtenerLista().then(data => {
            setData(data)
        })
    },[])
  
    return(
        <>  
            <div className="container">
                <div className="row col-xxl-8 " >

                    {data.map( data=>(
                        <Items infoTarjeta={data} ></Items>
                    ))}
                </div>

            </div>

        </>
    )
}

