import CartContext from "../util/CartContext"
import { useContext } from "react"

const Cart =()=>{

    const {cartTotal} = useContext(CartContext)

    const data = useContext(CartContext)

    return(
        <div>
            <h1 className=" text-lg mx-auto">total item - {cartTotal}</h1>
        </div>
    )
}

export default Cart