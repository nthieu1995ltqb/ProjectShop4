import React from 'react';
import Aside from '../../components/Aside';

import axios from 'axios';
import {NavLink} from 'react-router-dom';

import RelatedProducts from './RelatedProducts';
import BeautyStars from 'beauty-stars';
import {connect} from 'react-redux';
import * as action from '../../actions/actions';

class ProductDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            //product: [],
            count: 1,
            totalPriceItem: 0,
            product: [],
            productBySlug: [],
            srcImg: "",
            indexImg: 0,
            slug: ""  
        }
    }
    componentDidMount(){
        // var {id}=this.props.match.params
        // axios({
        //     method: 'GET',
        //     url: `http://localhost:3000/products/${id}`,
        //     data: null
        // }).then(res =>{
        //     this.setState({
        //         product: res.data
        //     })
        // });

        var {id, slug}=this.props.match.params
        //Get product by ID
        axios({
            method: 'GET',
            url: `http://localhost:3000/products/${id}`,
            data: null
        }).then(res =>{
            this.setState({
                product: res.data
            },()=>{
                this.setState({
                    srcImg: res.data.img1
                },()=>{
                    this.setState({
                        totalPriceItem: res.data.price
                    })
                });
            });
        });

        //Get product by slug
        axios({
            method: 'GET',
            url: `http://localhost:3000/products?id_ne=${id}&slug=${slug}&_limit=4`,
            data: null
        }).then(res =>{
            this.setState({
                productBySlug: res.data
            });
        });
    }

 

    //handler zoom image
    zoomImage=(e, index)=>{
        e.preventDefault();
        this.setState({
            indexImg: index
        })
    } 

     render(){
        //var {id, name, price, img}=this.state.product
        // var { id, name, price, img1, img2, img3 }=this.state.product
        var { indexImg, srcImg, productBySlug, product } = this.state
        var listImgs = [product.img1, product.img2, product.img3]
        srcImg = srcImg.replace('0', indexImg)
        var showImgs = listImgs.map((img, index)=>{
            return <NavLink to="#" key={index} onClick={(e)=>{this.zoomImage(e, index)}}><img src={'../../'+img} alt=""/></NavLink>
        })

        //Set array related products
        var showRelatedProducts = productBySlug.map((productBySlug, index)=>{
            return <RelatedProducts key={index} 
                                    productBySlug={productBySlug}
                                    img={productBySlug.img}
                                    name={productBySlug.name}
                                    price={productBySlug.price}/>
        })

        // var {product} = this.props;

        return(
            <div className="container" >
                <div className="row">
                    <Aside />
                    
                    <div className="col-sm-9 padding-right">
                        <div className="product-details">
                            <div className="col-sm-5">
                                <div className="view-product">
                                    <img src={"../../" + srcImg} alt="" />
                                    {/* <img src={"../" + img} alt="" />  */}
                                </div>
                                <div id="similar-product" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="item active">
                                            {showImgs}
                                        </div>   
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-sm-7">
                                <div className="product-information">
                                    <img src="images/product-details/new.jpg" className="newarrival" alt="" />
                                    <h2>{product.name}</h2>
                                    <p>SKU: ESP00{product.id}</p>
                                    <img src="images/product-details/rating.png" alt="" />
                                    <span>
                                        <div>
                                        <span>${product.price}</span>
                                        </div>

                                        <button type="button" className="btn btn-fefault cart"
                                            onClick = { () => this.onAddToCart(product)}>
                                            <i className="fa fa-shopping-cart"></i> &nbsp;
                                            Thêm Vào Giỏ Hàng
                                        </button>
                                    </span>
                                    <p><b>Tình Trạng:</b> Còn Hàng</p>
                                    <p><b>Trạng Thái:</b> Mới</p>
                                    <p><b>Thương Hiệu:</b> E-SHOPPER</p>
                                    <div className="row">
                                        <b className="col-sm-3" style={{float:"left"}}>Rating:</b>
                                        <div className="col-sm-9">
                                        <BeautyStars                                            
                                            value={this.state.product.rating} 
                                            onChange={value => this.setState({ value })}
                                            size="15px"
                                            activeColor="#fe980f"
                                            inactiveColor="#efdcc3" />
                                        </div>                                       
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="container relate-products">
                            <div className="page-header">
                                <h2>Sản Phẩm Liên Quan</h2>
                            </div>
                            {showRelatedProducts}
                        </div> 
                        
                        <div className="reviews">
                            <h2>Bình Luận</h2>
                            <div className="single-blog-post">
                                <div className="post-meta">
                                    <ul>
                                        <li><NavLink to="#"><i className="fa fa-user"></i>Tác Giả</NavLink></li>
                                        <li><NavLink to="#"><i className="fa fa-clock-o"></i>Thời Gian</NavLink></li>
                                        <li><NavLink to="#"><i className="fa fa-calendar-o"></i>Ngày Tháng</NavLink></li>
                                    </ul>
                                </div>
                                
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <p><b>Viết Bình Luận</b></p>
                                
                                <form action="#" >
                                    <span>
                                        <input type="text" placeholder="Tên Của Bạn"/>
                                        <input type="email" placeholder="Địa Chỉ Email"/>
                                    </span>
                                    <textarea name="" ></textarea>
                                    <b>Rating: </b> <img src="images/product-details/rating.png" alt="" />
                                    <button type="button" className="btn btn-default pull-right">
                                        Gủi Bình Luận
                                    </button>
                                </form>
                            </div>
                        
                        </div>
                        
                        
                    </div>
                    
                </div>
            </div>
        )
    }

    onAddToCart = (product) =>{
        

        var test = 'TOKEN';
        let { history} = this.props;

        if (test in sessionStorage){
            this.props.onAddToCart(product);
            //console.log("ok")
        } else{
            
            //console.log("err")
            alert("Bạn chưa đăng nhập. Bạn cần phải đăng nhập mới được mua hàng")
            history.push("/login");

        }
        //this.props.onAddToCart(product);
        
    }

}

// export default ProductDetails;

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

export default connect(mapStateToProps, mapDispatchToProps) (ProductDetails);