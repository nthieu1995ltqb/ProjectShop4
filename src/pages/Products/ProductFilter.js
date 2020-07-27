import React from 'react';
import Aside from '../../components/Aside';
import ProductFilterItem from './ProductFilterItem';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

class ProductFilter extends React.Component {
    constructor() {
        super();
        this.state = {
            productList: []
        }
    }

    componentDidMount() {
        var { slug } = this.props.match.params
        axios({
            method: 'GET',
            url: `http://localhost:3000/products?slug=${slug}`,
            data: null
        }).then(res => {
            //console.log(res.data)
            this.setState({
                productList: res.data
            })
        });
    }

    render() {
        console.log(this.props.match.params.slug)
        var showProducts = this.state.productList.map((product, index) => {
            return <ProductFilterItem key = { index }
            product = { product }
            img = {product.img }
            name = { product.name }
            price = { product.price }
            />
        })

        return (

            <div className = "container">
                <div className = "row">
                <Aside/>
                    <div className = "col-sm-9 padding-right">
                        <div className = "features_items">
                            <h2 className = "title text-center"> Sản Phẩm </h2> { showProducts } 
                        </div> 
                        <div className = "pagination-area">
                            <ul className = "pagination">
                                <li><NavLink to="#" className="active">1</NavLink></li >
                                <li><NavLink to="#">2</NavLink></li>
                                <li><NavLink to="#">3</NavLink></li>
                                <li><NavLink to ="#"><i className ="fa fa-angle-double-right"></i></NavLink></li> 
                            </ul>
                        </div>
                    </div >
                </div>
            </div >

        )
    }
}

export default ProductFilter;