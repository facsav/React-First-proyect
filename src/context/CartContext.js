import { Children, createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cartList , setProductCartList] = useState([])

    // const addProduct = (product) =>{
    //     const newList = [...cartList]
    //     newList.push(product)
    //     setProductCartList(newList)
    //     console.log(cartList)
    // }
    
    // const addProduct = (product, qty) =>{
    //     const newProduct = {...product, cartList:qty}
    //     const newList = [...cartList]
    //     newList.push(product) 
    //     setProductCartList(newList)
    //     console.log(cartList)
    // }

    const isInCart = (id)=>{
        const existenciaElemento = cartList.some ((elemento)=> elemento.id === id)
        return existenciaElemento
    }

    const addProduct = (product, qty) =>{
        const newProduct = [...cartList]
        if(isInCart(product.id)){
            const prodAddAgain = cartList.findIndex(prod => prod.id ===product.id)
            newProduct[prodAddAgain].quantity = newProduct[prodAddAgain].quantity + qty
            setProductCartList(newProduct)
            
        }
        else{
            const newProduct = {...product, cartList:qty}
            const newList = [...cartList]
            newList.push(newProduct) 
            setProductCartList(newList)
            console.log(cartList)
        }
    }

    const removeProduct =(idProduct)=>{
        const copiaArray = [...cartList]
        const newArray = copiaArray.filter(del=>del.id !== idProduct)
        setProductCartList(newArray)
    }

    const removeAll = ()=>{
        setProductCartList([])
    }

    return(
        <CartContext.Provider value={{cartList, addProduct, removeProduct, removeAll}}>
        
            {children}
        
        </CartContext.Provider>
    )
}