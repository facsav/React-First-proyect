import { obtenerLista } from "../../helper/helper"
import { useEffect, useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getRoles } from "@testing-library/react"
import { arrayItems } from "../../helper/helper"
import {doc, getDoc} from 'firebase/firestore'
import {dataBase} from '../../utils/firebase'

export function ItemDetailContainer (){
    

    const {id} = useParams();


    const [item, setItem] = useState({});

    // const getItem = (id)=>{
    //     return new Promise((resolve, reject)=>{
    //         const product = arrayItems.find(item=>item.id === parseInt(id));
    //         resolve(product)
    //     })
    // }

    useEffect(()=>{
        const queryRef = doc(dataBase, "items", id)
        getDoc(queryRef).then(response=>{
            const newDoc={
                ...response.data(),
                id:response.id
            }
            setItem(newDoc)
        })
        // const getProducto = async()=>{
        //     const producto = await getItem(id);

        //     setItem(producto);
        // }
        // getProducto();
    },[id])



    return(

        <ItemDetail infoDetalle={item}/>

    )
}