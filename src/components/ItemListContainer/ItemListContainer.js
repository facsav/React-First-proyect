import { ItemList } from "../ItemsList/ItemList"


export function ItemListContainer (props){
    


    return(
        <div className="container">
            <div className="row justify-content-center col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-6" >
                <ItemList></ItemList>
            </div>
        </div>

    )  
}