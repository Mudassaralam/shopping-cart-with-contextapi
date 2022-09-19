import React, { createContext, useContext, useReducer } from "react";
import { faker } from '@faker-js/faker'
import { CartReducer } from "./CartReducer";
import { ProductReducer } from './CartReducer'
const Cart = createContext();

faker.seed(99);
const products = [...Array(20)].map(()=>({
    id:faker.datatype.uuid(),
    name:faker.commerce.productName(),
    price:faker.commerce.price(),
    image:faker.image.avatar(),
    inStock:faker.helpers.arrayElement([0, 3, 5,7]),
    fastDelivery: faker.datatype.boolean(),
    ratings:faker.helpers.arrayElement([1,2,3,4,5]),
    
}))



function Context({children}){

    const [state, dispatch] = useReducer(CartReducer,{
        products:products,
        cart:[]
    })

    const [productState, productDispatch] = useReducer(ProductReducer,{
        byStock:false,
        byFastDevlivery:false,
        byRating:0,
        searchQuery:'',
    })

    return(
        <Cart.Provider value={{ state,dispatch ,productState ,productDispatch  }}>
            {children}
        </Cart.Provider>
    )
}
export default Context;

export const CartContext = ()=>{
    return useContext(Cart)
}