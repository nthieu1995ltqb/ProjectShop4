import React from 'react';
// import axios from 'axios';
// import {NavLink} from 'react-router-dom';

class RelatedProducts extends React.Component{
    render(){
        var { id, slug, img1, name, price } = this.props.productBySlug
        return(
            <div className="col-sm-3">
                <div className="product-image-wrapper">
                    <div className="single-products">
                        <div className="productinfo text-center img-prod">
                            <a href={`http://localhost:3457/product-details/${slug}/${id}`} className="product-link">
                                <img src={"../../"+img1} alt="" />
                                <h2>${price}</h2>
                                <p>{name}</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RelatedProducts;



