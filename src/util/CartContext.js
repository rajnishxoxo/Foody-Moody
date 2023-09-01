import { createContext, useState } from "react";



const total=0;
const CartContext = createContext({
    cartTotal : total,
   
})

export default CartContext;