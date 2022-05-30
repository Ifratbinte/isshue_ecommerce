import React, { useContext } from 'react'
import { CartContext } from '../cart';

const CartItems = ({id, image, title, price, amount }) => {

    const {removeItem, increment, decrement} = useContext(CartContext);
    
    return (
        <>
            <li key={id} className="items odd d-block align-middle py-3 px-3">
                <div className="cart-info-wrap d-flex align-items-center justify-content-between">
                    <div className="cart-area">
                        <img src={image} className="card-item-img float-left d-block pr-3" alt="image"/>
                        <p className="cart-item-number mb-1">#001</p>
                        <h5 className="mb-3">{title}</h5>
                        <div className="d-flex align-items-center">
                            <div className="num-block">
                                <div className="num-incr-decr d-flex align-items-center bg-white border mr-2">
                                    <span><i className="fa fa-minus" onClick={ () => decrement(id)}></i></span>
                                    <span className="value-entry"><input type="text" placeholder={amount} maxLength={3} size={3}/></span>
                                    <span><i className="fa fa-plus" onClick={ () => increment(id)}></i></span>
                                </div>
                            </div>
                            <span className="fs-14"> x ${price}</span>
                            <span className="stockStatus text-uppercase pl-2 fs-13 font-weight-bold">In Stock</span>
                        </div>
                    </div>
                    <div className="cart-price-section d-flex">
                        <div className="prodTotal">
                            <p className="mr-3 mb-0">${price}</p>
                        </div>
                        <div className="remove-item">
                            <i className="fa fa-trash"  onClick={() => removeItem(id)}></i>
                        </div>
                    </div>
                </div>
            </li>
            <hr />
        </>
    )
}

export default CartItems;