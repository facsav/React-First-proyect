import { Children, createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cartList , setProductCartList] = useState([])

    const addProduct = (product) =>{
        const newList = [...cartList]
        newList.push(product)
        setProductCartList(newList)
        console.log(cartList)
    }
    

    return(
        <CartContext.Provider value={{cartList, addProduct}}>
        
            {children}
        
        </CartContext.Provider>
    )
}