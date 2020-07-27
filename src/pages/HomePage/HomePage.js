import React from 'react';
// import Slideshow from '../../components/Slider'
import Aside from '../../components/Aside'
import Items from '../../components/Items';
import Item from '../../components/Item';
// import axios from 'axios';
import {connect} from 'react-redux';
import * as action from '../../actions/actions';

import Slider from '../../components/Slider';


class HomePage extends React.Component{
    
    render(){
        
        var {products} = this.props;
        // var {products} = this.state;
        //console.log(products)
        return(
            <div>
                <Slider />
                <div className="container" >
                    <div className="row">
                        <Aside />
                        <Items>
                            {this.showProducts(products)}
                        </Items>
                    </div>
                </div>
            </div>
        )
    }

    showProducts(products){
        var result = null;
        //console.log(products)
        var {onAddToCart , history} = this.props;
        if(products.length > 0){
            result = this.props.products.map((product, index) => {
                return <Item 
                key={index} 
                product={product}
                onAddToCart = {onAddToCart}
                history = {history}
                />
            });
        }
        return result;

    }
}


const mapStateToProps = (state)=>{
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props)=>{
    return{
        // listProducts: (product)=>{
        //     dispatch(action.handlerFetchProducts(product));
        // },
        onAddToCart: (product) =>{
            dispatch(action.actAddToCart(product, 1));
        }
    }
}

// export default HomePage;
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);