import { obtenerLista } from "../../helper/helper"
import { useEffect, useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getRoles } from "@testing-library/react"
import { arrayItems } from "../../helper/helper"


export function ItemDetailContainer (){
    

    const {id} = useParams();
    console.log("productId", id);

    const [item, setItem] = useState({});

    const getItem = (id)=>{
        return new Promise((resolve, reject)=>{
            const product = arrayItems.find(item=>item.id === parseInt(id));
            resolve(product)
        })
    }

    useEffect(()=>{
        const getProducto = async()=>{
            const producto = await getItem(id);
            console.log('producto', producto)
            setItem(producto);
        }
        getProducto();
    },[id])

    console.log('item:', item)

    return(

        <ItemDetail infoDetalle={item}/>

    )
}