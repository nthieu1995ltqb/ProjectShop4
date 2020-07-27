import React from 'react';
import {NavLink} from 'react-router-dom';


class ProductsItem extends React.Component{
  
    render(){
        var {product} = this.props
        return(
            <div className="col-sm-4">
                <div className="product-image-wrapper">
                    <div className="single-products">
                        <div className="productinfo text-center img-prod">
                            <NavLink to={`/product-details/${product.slug}/${product.id}`} className="product-link">
                                <img src={"../" + product.img1} alt="" />
                                <h2>{product.price}$</h2>
                                <p>{product.name}</p>
                            </NavLink>
                            <button className="btn btn-default add-to-cart"
                               onClick = { () => this.onAddToCart(product)} ><i className="fa fa-shopping-cart"></i>Thêm vào giỏ hàng</button>
                        </div>
                    </div>
                </div>
            </div>    
        )
    }

    onAddToCart = (product) =>{
        var test = 'TOKEN';
        let { history} = this.props;
        //console.log(history)
        // var a = sessionStorage.key('')
        // console.log(a)

        if (test in sessionStorage){
            this.props.onAddToCart(product);
        } else{
            
            //console.log("err")
            alert("Bạn chưa đăng nhập. Bạn cần phải đăng nhập mới được mua hàng")
            history.push("/login");

        }
        //this.props.onAddToCart(product);
        
    }
}

export default ProductsItem;