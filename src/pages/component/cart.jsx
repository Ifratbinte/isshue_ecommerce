import React, {createContext, useReducer, useEffect} from 'react'
import './cart/cart.css'
import Product from './cart/cartProd'
import ContextCart from './cart/contextCart';
import {reducer} from './cart/reducer'

export const CartContext = createContext()

const initialState = {
    item : Product,
    totalAmount : 0,
    totalItem: 0
};

const Cart = () => {

    // const [item, setItem] = useState(Product);
    const [state, dispatch] = useReducer(reducer, initialState);

    // to delete the individual item from cart
    const removeItem =(id) => {
        return dispatch({
            type: "REMOVE_ITEM",
            payload: id, //any name > payload
        })
    };

    //clear the cart
    const clearCart = () => {
        return dispatch({  
            type : "CLEAR_CART"
        })
    };

    // increment item
    const increment = (id) => {
        return dispatch({
            type: "INCREMENT",
            payload: id,
        })
    }

    // decrement item
    const decrement = (id) => {
        return dispatch({
            type: "DECREMENT",
            payload: id,
        })
    }

    //will use the useEffect to update the data
    useEffect(() => {
      dispatch({
          type: "GET_TOTAL"
        });
        console.log("hello");
    }, [state.item]);
    

    return (
        <>
            <CartContext.Provider value={{ ...state, removeItem, clearCart, increment, decrement}}>
                <ContextCart/>
            </CartContext.Provider>
        </> 
    )
}

export default Cart;