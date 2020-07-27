import React from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

class ProductFilterItem extends React.Component{

    onSave=(id)=>{
        var {product}=this.props
            axios({
            method: 'POST',
            url: 'http://localhost:3000/orders',
            data: product
        })      
    }    
    render(){
        var {img1, price, name, id, slug} = this.props.product
        return(
            <div className="col-sm-4">
                <div className="product-image-wrapper">
                    <div className="single-products">
                        <div className="productinfo text-center img-prod">
                            <NavLink to={`/product-details/${slug}/${id}`} className="product-link">
                                <img src={"../"+img1} alt="" />
                                <h2>{price}$</h2>
                                <p>{name}</p>
                            </NavLink>
                            <button className="btn btn-default add-to-cart"
                                    onClick={()=>{this.onSave(id)}}><i className="fa fa-shopping-cart"></i>Thêm vào giỏ hàng</button>
                        </div>
                    </div>
                </div>
            </div>    
        )
    }
}

export default ProductFilterItem;