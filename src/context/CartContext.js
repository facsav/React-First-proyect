import {createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cartList , setProductCartList] = useState([])

    const isInCart = (id)=>{
        const prodAdded = cartList.findIndex(product =>product.id === id);
        if(prodAdded>=0){
            return {exists: true, index:prodAdded}
        } else{
            return {exists: false, index:undefined}
        }
    }


    const addProduct = (product)=>{
        const inCartObj = isInCart(product.id);
        if(inCartObj.exists){
            const productListCopy = [...cartList];
            productListCopy[inCartObj.index].quantity = productListCopy[inCartObj.index].quantity + product.quantity;
            setProductCartList(productListCopy)
        } else{
            const newList = [...cartList,product];
            setProductCartList(newList)
        }
    }




    const removeProduct =(idProduct)=>{
        const copiaArray = [...cartList]
        const newArray = copiaArray.filter(remove=>remove.id !== idProduct)
        setProductCartList(newArray)
    }

    const removeAll = ()=>{
        setProductCartList([])
    }

    const numberCart = cartList.length
    

    return(
        <CartContext.Provider value={{cartList, addProduct, removeProduct, removeAll, numberCart}}>
        
            {children}
        
        </CartContext.Provider>
    )
}




