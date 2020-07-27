import React, { Component } from 'react'

export class CartRes extends Component {
    render() {
        return (
            <div className="container cart-res">
                <h2>Gio Hang</h2>
                <ul>
                    <li className="cart-product">
                        <div className="product-inner">
                            <div className="product-inner-img">
                                <img src="images/home/thoitrangnu/somi/somi-nu-1_0.jpg" />
                            </div>
                            
                            <div className="product-content">
                                <div className="product-content-top">
                                    <div className="product-content-inner">
                                        <p>Ao quan</p>
                                    </div>
                                    <div className="product-content-prices">
                                        <span>100$</span>
                                    </div>

                                </div>
                                <div className="product-content-quanity">

                                </div>

                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default CartRes
