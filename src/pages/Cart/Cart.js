import React from 'react';
import {NavLink} from 'react-router-dom';
import CartRes from './CartRes';


class Cart extends React.Component{
 
    render(){
        //var {cartProduct} = this.props;
        // console.log(cartProduct)
        //console.log(this.state.count)
        var {children} = this.props;                         
        return(
            <div id="cart_items">
                <div className="container">
                    <div className="breadcrumbs">
                        <ol className="breadcrumb">
                        <li><NavLink to="/">Trang Chủ</NavLink></li>
                        <li className="active">Giỏ Hàng</li>
                        </ol>
                    </div>
                    <div className="table-responsive cart_info">
                        <table className="table table-condensed">
                            <thead>
                                <tr className="cart_menu">
                                    <td className="image">Sản Phẩm</td>
                                    <td className="description"></td>
                                    <td className="price">Giá</td>
                                    <td className="quantity">Số Lượng</td>
                                    <td className="total">Số Tiền</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                               {/* {showProducts} */}
                               {children}
                            </tbody>
                        </table>
                    </div>
                    {/* display responsive */}
                    {/* <div>
                        <CartRes />

                    </div> */}
                    
                </div>
            </div>
        )
    }

 



}


export default Cart;