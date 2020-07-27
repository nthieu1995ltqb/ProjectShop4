import React from 'react';
// import axios from 'axios';
import './../../App.css';

class CartItem extends React.Component{
    

    render(){    
    // var {id, name, price, img} = this.props.cartProduct
    // var {count, totalPriceItem}=this.state
    var {item} = this.props;
    var {quantity} = item;
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
                    <div className="cart_quantity_button">
                        <button type="button" className="cart_quantity_down"  
                            onClick = { () => this.onUpdateQuantity(item.product, item.quantity - 1) } > - </button>                       
                        <input  className="cart_quantity_input" 
                                type="text" 
                                name="quantity" 
                                value={quantity} 
                                autoComplete="off" 
                                size="2"
                                onChange={(e)=>{this.handlerChange(e)}}
                                />
                        <button  type="button" className="cart_quantity_up"  
                            onClick={()=>this.onUpdateQuantity(item.product, item.quantity + 1)}> + </button>
                    </div>
                </td>
                <td className="cart_total">
                    <p className="cart_total_price">$ {this.showSubTotal(item.product.price, item.quantity)}</p>
                </td>
                <td className="cart_delete">
                    <button type="button" 
                        className="btn btn-secondary btn-lg" 
                        onClick={ () => this.onDelete(item.product)} > <i className="fa fa-times"></i>
                    </button>
                </td>
            </tr>
        )
    }

    handlerChange = (e) =>{
        
    }


    showSubTotal = (price, quantity) =>{
        return price*quantity
      }
  
      onDelete = (product) => {
      //   console.log(product);
          var {onDeleteProductInCart} = this.props;
          onDeleteProductInCart(product);
          
      }
  
      onUpdateQuantity = (product, quantity) => {
          if (quantity > 0){
              var {onUpdateProductInCart} = this.props;
              // this.setState({
              //     quantity: quantity
              // });
              onUpdateProductInCart(product, quantity);
            
          }
      }

}

export default CartItem;