import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { ItemList } from "../ItemsList/ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore";
import { dataBase } from "../../utils/firebase"

export function ItemListContainer (props){
    
    const {tipo} = useParams()
    
    const [data, setData] = useState([])
    
    
    useEffect(()=>{
        const getData = async()=>{
            try {
                let queryRef = !tipo ? collection(dataBase,"items") :query(collection(dataBase,"items"),where("tipo","==",tipo));
                const response = await getDocs(queryRef);
                const datos = response.docs.map(doc=>{
                    const newDoc = {
                        ...doc.data(),
                        id:doc.id
                    }
                    return newDoc;
                });
                setData(datos)
            } catch (error) {
                console.log(error);
            }
        }
    
        getData();
    },[tipo])
    

    return(
        <div className="container">
            <div className="row justify-content-center col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-6" >
                <ItemList data={data} ></ItemList>
            </div>
        </div>

    )  
}