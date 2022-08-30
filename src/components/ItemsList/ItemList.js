import { Items } from "../Items/Items"
import imagenes from '../../assets/imagenes'
import { useEffect, useState } from "react"

const arrayItems = [
    {
        titulo: 'Proteina',
        descripcion: '2 kg de proteina BSN',
        foto: imagenes.proteinBSN,
        stock:6     
    },
    {
        titulo: 'Creatina',
        descripcion: '300 gramos de creatina BSN',
        foto: imagenes.creatinaBsn,
        stock:5     
    }
]

const obtenerLista = () =>{
    return new Promise ((resolve, reject)=>{

        setTimeout(() => {
            resolve( arrayItems )
        }, 2000);
    })
}

obtenerLista().then((resolucion)=>{
    console.log(resolucion)
})


// -----------------------------------------


export function ItemList () {



      
    return(
        <>
            <Items infoTarjeta={arrayItems[0]} ></Items>
            <Items infoTarjeta={arrayItems[1]} ></Items>
        </>

    )




}

