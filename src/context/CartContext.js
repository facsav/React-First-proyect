import {createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cartList , setProductCartList] = useState([])

    const isInCart = (id)=>{
        const elementExists = cartList.some((elemento)=>elemento.id === id);
        return elementExists;
    }


    const addProduct = (product, contador)=>{
        const newList = [...cartList];
        if(isInCart(product.id)){
            const productIndex = cartList.findIndex(element=>element.id===product.id);
            newList[productIndex].quantity = newList[productIndex].quantity + contador;
            newList[productIndex].totalPrice = newList[productIndex].quantity * newList[productIndex].precio;
            setProductCartList(newList)
        } else{
            const newProduct={...product, quantity:contador, totalPrice: contador*product.precio}
            const newList = [...cartList];
            newList.push(newProduct);
            setProductCartList(newList);
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


    const getTotalPrice = ()=>{
        const totalPriceProducts = cartList.reduce((acc,item)=>acc + item.totalPrice,0);
        return totalPriceProducts;
    }

    const numberCart = cartList.length 
    

    return(
        <CartContext.Provider value={{cartList, addProduct, removeProduct, removeAll, getTotalPrice, numberCart}}>
        
            {children}
        
        </CartContext.Provider>
    )
}




