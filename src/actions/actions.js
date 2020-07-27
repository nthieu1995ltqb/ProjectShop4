import callApi from './../utils/apiCaller';

//PRODUCTS
export const handlerFetchProducts=()=>{
    return(dispatch)=> {
        return callApi('products','GET', null).then(res =>{
                dispatch(fetchProduct("FETCH_PRODUCTS", res.data))
            });
        }
}

export const fetchProduct=(products)=>{
    return {
        type: "FETCH_PRODUCTS",
        products
    }
}

export const handlerAddToCartRequest=(product)=>{
    return(dispatch)=> {
        return callApi('order','POST', product).then(res =>{
                dispatch(handlerAddToCart(res.data))
            });
        }
}

export const handlerAddToCart=(product)=>{
    return {
        type: "ADD_CART",
        product
    }
}

//CATEGORIES
export const fetchProductBySlug=(productsBySlug)=>{
    return {
        type: "FETCH_PRODUCTS_BY_SLUG",
        productsBySlug
    }
}

export const fetchCategoriesMen=(categories_men)=>{
    return {
        type: "FETCH_CATEGORIES_MEN",
        categories_men
    }
}

export const fetchCategoriesWomen=(categories_women)=>{
    return {
        type: "FETCH_CATEGORIES_WOMEN",
        categories_women
    }
}

//USER
export const signInRequest=()=>{
    return(dispatch) =>{
        return callApi('user', 'GET', null).then(res =>{
            dispatch(signIn(res.data))
        })
    }
}


export const signIn=(users)=>{
    return {
        type: 'USER_DATA',
        users
    }
}
//CheckUser
export const actCheckUser = (userLogin) =>{
    return {
        type: 'CHECK_USER',
        userLogin
    }
}

export const actUserLogOut = (userLogout) =>{
    return {
        type: 'LOGOUT_USER',
        userLogout
    }
}


// CartProduct
export const actAddToCart = (product, quantity) =>{
    return {
        type: 'ADD_TO_CART',
        product,
        quantity
    }
}


export const actDeleteProductInCart = (product) =>{
    return {
        type: 'DELETE_PRODUCT_IN_CART',
        product
    }
}

export const actUpdateProductInCart = (product, quantity) =>{
    return {
        type: 'UPDATE_PRODUCT_IN_CART',
        product,
        quantity
    }
}

// CheckOut
export const actDeleteCheckOut = (product) =>{
    return {
        type: 'CHECKOUT_PRODUCT_IN_CART',
        product
    }
}

//Check Admin
export const AdminRequest=()=>{
    return(dispatch) =>{
        return callApi('user-admin', 'GET', null).then(res =>{
            dispatch(AdminIn(res.data))
        })
    }
}


export const AdminIn=(admins)=>{
    return {
        type: 'ADMIN_DATA',
        admins
    }
}

// export const actCheckAdmin = (userLogin) =>{
//     return {
//         type: 'CHECK_USER',
//         userLogin
//     }
// }

// export const actUserLogOut = (userLogout) =>{
//     return {
//         type: 'LOGOUT_USER',
//         userLogout
//     }
// }