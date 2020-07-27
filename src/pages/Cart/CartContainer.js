import React from 'react';

import {connect} from 'react-redux';

import Cart from './Cart';

import CartItem from './CartItem';
import CartResult from './CartResult';
import {actDeleteProductInCart, actUpdateProductInCart} from '../../actions/actions'
class CartContainer extends React.Component {
    render(){
        var {cartProduct} = this.props;
        // console.log(cartProduct)
        // console.log(cartProduct.length)
        return (   
           <Cart>
                {this.showCartItem(cartProduct)}
                {this.showTotalAmount(cartProduct)}
           </Cart>
        );
    }

    showCartItem = (cartProduct) =>{
        var {onDeleteProductInCart, onUpdateProductInCart} = this.props;
        var result = null
        //console.log(cartProduct)
        if(cartProduct.length > 0){
            result = cartProduct.map((item, index)=>{
                return(
                    <CartItem 
                        key={index}
                        item={item}
                        index={index}
                        onDeleteProductInCart = {onDeleteProductInCart}
                        onUpdateProductInCart = {onUpdateProductInCart}
                    />
                )
            })
        }
        return result;
    }

    showTotalAmount = (cartProduct) =>{
        var result = null
        if(cartProduct.length > 0){
            result = <CartResult cartProduct={cartProduct} />
        }
        return result;
    }

}



const mapStateToProps = state =>{
    return{
        cartProduct: state.cartProduct
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(actDeleteProductInCart(product));
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch(actUpdateProductInCart(product, quantity));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
