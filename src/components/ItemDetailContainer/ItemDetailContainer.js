import { obtenerLista } from "../../helper/helper"
import { useEffect, useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getRoles } from "@testing-library/react"


export function ItemDetailContainer (){
    
    const {id} = useParams

    const [item, setItem] = useState([])

    const getItem = (id)=>{
        return new Promise ((resolve, reject)=>{
            const idLista = item.filter( item=> item.id === parseInt(id))
            resolve (idLista)
        })
    }

    useEffect(()=>{
        const getProducto = async ()=>{
            const producto = await getItem(id);
            console.log('productoooooo', producto)
            setItem(producto)
        }
        getProducto()
    },[id])

    console.log(item, 'iteeeeem')

    // useEffect(()=>{
    //     obtenerLista().then(data => {
    //         setData(data)
    //         if(!data){
    //             setData(data)
    //         }
    //         else{
    //             const idLista = data.filter( item=> item.id === parseInt({id}))
    //             setData(idLista)
    //         }
    //     })
    // },[])


    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     obtenerLista()
    //     .then(response =>{
    //         setData(response.find(prod => prod.id === idd))
    //     })
    // }, [])

    return(
        <>
            {/* {data( data=>(
                <ItemDetail infoDetalle={data} ></ItemDetail>
            ))} */}
                

                <ItemDetail infoDetalle={item} ></ItemDetail>


        </>
    )

}