import React, {useContext} from 'react'
import CartItems from './cartItems'
import { Scrollbars } from 'react-custom-scrollbars-2';
import { CartContext } from '../cart';

const ContextCart = () => {
    
    const {item, clearCart, totalItem, totalAmount} = useContext(CartContext);

    if(item.length === 0){
        return(
            <>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="wrap my-5">
                                <h2 className="text-uppercase text-center py-3">Cart</h2>
                                <div className="d-flex align-items-center justify-content-between py-3 border-bottom">
                                    <div className='total-items'>
                                        <h4 className="mb-0">Items In Your Cart.</h4>
                                        <p className="mb-0">You have <span className="ttal-items-count">{totalItem}</span> items in shopping cart</p>
                                    </div>
                                    <div>
                                        <a href="/" className="btn button-primary button-round border-0 btn-sm btn-pill px-3 mr-2">Continue Shopping</a>
                                        <button className="btn btn-danger btn-sm btn-pill px-3" onClick={clearCart}>Clear Cart</button>
                                    </div>
                                </div>
                                <div className="cart-items-container">
                                    <Scrollbars>
                                        {
                                            item.map((currentElm) => {
                                                return <CartItems key ={currentElm.id} {...currentElm}/>
                                            })
                                        }
                                    </Scrollbars>
                                </div>
                                <div className="row justify-content-between mt-5">
                                    <div className="col-md-5 col-lg-5">
                                    </div>
                                    <div className="col-md-5 col-lg-5 text-right">
                                        <ul className="subtotal list-unstyled">
                                            <li className='d-flex justify-content-between'>
                                                <h4>Sub Total: </h4>
                                                <span>$ {totalAmount}</span>
                                            </li>                                
                                        </ul>
                                        <hr/>
                                        <div className="site-footer mt-3">
                                            <h4 className="sub-total text-right mb-3">Total : <span>$ {totalAmount}</span></h4>
                                            <a className="btn button-primary btn-block" href="/checkout">Checkout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
    <>
        <div className="container top-res-gap">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="wrap my-5">
                        <h2 className="text-uppercase text-center py-3">Cart</h2>
                        <div className="d-flex align-items-center justify-content-between py-3 border-bottom">
                            <div className='total-items'>
                                <h4 className="mb-0">Items In Your Cart.</h4>
                                <p className="mb-0">You have <span className="ttal-items-count">{totalItem}</span> items in shopping cart</p>
                            </div>
                            <div>
                                <a href="/" className="btn button-primary button-round border-0 btn-sm btn-pill px-3 mr-2">Continue Shopping</a>
                                <button className="btn btn-danger btn-sm btn-pill px-3" onClick={clearCart}>Clear Cart</button>
                            </div>
                        </div>
                        <div className="cart-items-container">
                            <Scrollbars>
                                {
                                    item.map((currentElm) => {
                                        return <CartItems key ={currentElm.id} {...currentElm}/>
                                    })
                                }
                            </Scrollbars>
                        </div>
                        <div className="row justify-content-between mt-5">
                            <div className="col-md-5 col-lg-5">
                            </div>
                            <div className="col-md-5 col-lg-5 text-right">
                                <ul className="subtotal list-unstyled">
                                    <li className='d-flex justify-content-between'>
                                        <h4>Sub Total: </h4>
                                        <span>$ {totalAmount}</span>
                                    </li>                                
                                </ul>
                                <hr/>
                                <div className="site-footer mt-3">
                                    <h4 className="sub-total text-right mb-3">Total : <span>$ {totalAmount}</span></h4>
                                    <a className="btn button-primary btn-block" href="/checkout">Checkout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default ContextCart;