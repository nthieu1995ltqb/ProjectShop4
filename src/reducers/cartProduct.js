
var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];

const cartProduct = (state = initialState, action) => {
    var {product, quantity} = action;
    var index = -1;
    switch(action.type){
        case 'ADD_TO_CART':
            //console.log(action);
            index = findProductInCart(state, product);
            if(index !== -1){
                state[index].quantity += quantity;
            } else {
                state.push({
                    product,
                    quantity
                })
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        
        case 'DELETE_PRODUCT_IN_CART':
            index = findProductInCart(state, product);
            if(index !== -1){
                state.splice(index, 1);
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        
        case 'UPDATE_PRODUCT_IN_CART':
            index = findProductInCart(state, product);
            if(index !== -1){
                state[index].quantity = quantity;
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];

        case 'CHECKOUT_PRODUCT_IN_CART':
            //console.log("ok")
            state = []
            localStorage.removeItem('CART', JSON.stringify(state));
            return [...state];

        // default: 
        // return [...state];
        default:
            return [...state];
    }
}

var findProductInCart = (cartProduct, product) => {
    var index = -1;
    // -1 nghia la k tim thay
    if (cartProduct.length >0){
        for(var i=0; i<cartProduct.length; i++){
            if(cartProduct[i].product.id === product.id){
                index =i;
                break;
            }
        }
    }
    return index;
}

export default cartProduct; 