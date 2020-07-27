import React from 'react';
import {NavLink} from 'react-router-dom';

class CartResult extends React.Component {
    render(){
        var {cartProduct} = this.props;
        return(
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="cart_total">
                   
                    <p className="cart_total_price">Tổng tiền: $ {this.showTotalAmount(cartProduct)}  </p>
                    <div>
                        <NavLink 
                            to="/checkout" 
                            // onClick={()=>this.onCheckout(this.showTotalAmount(cartProduct))}
                            className="btn btn-default" 
                            role="button">Thanh Toán</NavLink>
                    </div>
                </td>
                
            </tr>
            
        )
    }

    showTotalAmount = (cartProduct) =>{
        var total = 0;
        if (cartProduct.length >0){
            for (var i = 0; i< cartProduct.length; i++){
                total += cartProduct[i].product.price * cartProduct[i].quantity;
            }
        }
        // console.log(total)
        return total;
    }
   

}

export default CartResult;
