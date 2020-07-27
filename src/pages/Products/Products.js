import React from 'react';
import Aside from '../../components/Aside';
import ProductsItem from './ProductsItem';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import * as action from '../../actions/actions';
//import Item from '../../components/Item'

class Products extends React.Component{
    constructor(){
        super();
        this.state = {
            productList: [],
            pageActive: 1,
            page: [1,2,3,4,5,6,7,8,9,10]
        }
    }

    componentDidMount(){
        //var {pageActive} = this.state
        axios({
            method: 'GET',
            url: "http://localhost:3000/products?_page=1&_limit=9",
            data: null
        }).then(res =>{
            this.setState({
                productList: res.data
            })
            
            })
        }   
    

    handlerPaginate=(e, page)=>{
        e.preventDefault()
        this.setState({
            pageActive: page
        })
        axios({
            method: 'GET',
            url: `http://localhost:3000/products?_page=${page}&_limit=9`,
            data: null
        }).then(res =>{
            this.setState({
                    productList: res.data
                })
            })
        }  
    
    render(){
        
        var showPages = this.state.page.map((page, index)=>{
            return <li  key={index}><NavLink to="#"
                        className={this.state.pageActive === page ? 'active' : ''} 
                        onClick={(e)=>{this.handlerPaginate(e, page)}}>{page}</NavLink></li>
        })

        var {products} = this.props;

        return(
        
            <div className="container" >
                <div className="row">
                    <Aside />
                    
                    <div className="col-sm-9 padding-right">
                        <div className="features_items">
                            <h2 className="title text-center">Sản Phẩm</h2>
                            {/* {showProducts} */}
                            {this.showProducts(products)}
                        </div>
                        <div className="pagination-area">
                            <ul className="pagination">
                                {showPages}
                                <li><NavLink to="#"><i className="fa fa-angle-double-right"></i></NavLink></li>
                            </ul>
                        </div>
                    </div>
                    {/* a */}
                </div>
            </div>
            
        )
    }


    showProducts(products){
        var result = null;
        //console.log(products)
        var {onAddToCart , history} = this.props;
        if(products.length > 0){
            result = this.state.productList.map((product, index) => {
                return <ProductsItem
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
        onAddToCart: (product) =>{
            dispatch(action.actAddToCart(product, 1));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Products);
// export default Products;