import React from 'react';
// import axios from 'axios';
import './../../App.css';

class CheckoutItem extends React.Component{
    

    render(){    
    // var {id, name, price, img} = this.props.cartProduct
    // var {count, totalPriceItem}=this.state
    var {item} = this.props;
    //console.log(item)

        return(
            <tr>
                <td className="cart_product">
                    <img style={{weight:"80px", height: "80px"}} src={item.product.img1} alt=""/>
                    {/* <img style={{weight:"80px", height: "80px"}} src={img} alt=""/> */}
                </td>
                <td className="cart_description">
                    <h4>{item.product.name}</h4>
                    <p>ID: {item.product.id}</p>
                </td>
                <td className="cart_price">
                    <p>${item.product.price}</p>
                </td>
                <td className="cart_quantity">
                    <p>{item.quantity}</p>
                </td>
                <td className="cart_total">
                    <p className="cart_total_price">$ {this.showSubTotal(item.product.price, item.quantity)}</p>
                </td>
                
            </tr>
            
        )
    }

    showSubTotal = (price, quantity) =>{
        return price*quantity
      }

}

export default CheckoutItem;