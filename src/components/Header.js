import React from 'react'
import Logo from '../images/home/logo.png';

import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {actUserLogOut} from '../actions/actions'


class Header extends React.Component{
   

    render(){
        // var {checkUser} = this.props
        // console.log(checkUser)
        //var {loggingIn} = this.state

        var {loggingIn} = this.props.checkUser;
        var {cartProduct} = this.props;
        //console.log(cartProduct)

        const guestLink = (
            <li>
                <NavLink to="/login"><i className="fa fa-lock"></i> Đăng Nhập</NavLink>
            </li>
            );

        const userLink = (
            <li>
                <NavLink to="#" onClick ={() => this.onLogOut()}><i className="fa fa-lock"></i> Đăng Xuất</NavLink>
            </li>
            );

        return(
            <header id="header">
                <div className="header_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="contactinfo">
                                    <ul className="nav nav-pills">
                                        <li><NavLink to="#"><i className="fa fa-phone"></i> +84 12 34 56 789</NavLink></li>
                                        <li><NavLink to="#"><i className="fa fa-envelope"></i> e-shopper@gmail.com</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="social-icons pull-right">
                                    <ul className="nav nav-pills">
                                        <li><NavLink to="#"><i className="fa fa-facebook"></i></NavLink></li>
                                        <li><NavLink to="#"><i className="fa fa-twitter"></i></NavLink></li>
                                        <li><NavLink to="#"><i className="fa fa-linkedin"></i></NavLink></li>
                                        <li><NavLink to="#"><i className="fa fa-dribbble"></i></NavLink></li>
                                        <li><NavLink to="#"><i className="fa fa-google-plus"></i></NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="header-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="logo pull-left">
                                    <NavLink to="/"><img src={Logo} alt="Logo" /></NavLink>
                                </div>
                            
                            </div>
                            <div className="col-sm-8">
                                <div className="shop-menu pull-right">
                                    <ul className="nav nav-pills">
                                        <li><NavLink to="/products"><i className="fa fa-user"></i> Sản Phẩm</NavLink></li>
                                        
                                        <li><NavLink to="/checkout"><i className="fa fa-crosshairs"></i> Thanh Toán</NavLink></li>
                                        <li >
                                            <NavLink to="/cart" className="cart-number"><i className="fa fa-shopping-cart"></i> Giỏ Hàng <span className="number-cart"> {cartProduct.length} </span> </NavLink>
                                            
                                        </li>
                                        
                                        {/* {this.onCheckUser(checkUser)} */}

                                        {/* <li>
                                            <NavLink to="/login"><i className="fa fa-lock"></i> Đăng Nhập</NavLink>
                                        </li> */}

                                        {loggingIn ? userLink : guestLink}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="header-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-9">
                                <div className="mainmenu pull-left">
                                    <ul className="nav navbar-nav collapse navbar-collapse">
                                        <li><NavLink to="/" className="active">Trang Chủ</NavLink></li>
                                        <li className="dropdown"><NavLink to="#">Danh Mục Sản Phẩm<i className="fa fa-angle-down"></i></NavLink>
                                            <ul role="menu" className="sub-menu">
                                                <li><NavLink to="/products">Sản Phẩm</NavLink></li> 
                                                <li><NavLink to="/checkout">Thanh Toán</NavLink></li> 
                                                <li><NavLink to="/cart">Giỏ Hàng</NavLink></li> 
                                                
                                            </ul>
                                        </li> 
                                        <li><NavLink to="/news">Tin Tức</NavLink>
                                
                                        </li> 
                                        
                                        <li><NavLink to="/contact">Liên Hệ</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="search_box pull-right">
                                    <input type="text" placeholder="Tìm kiếm"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </header>
        )
    }

    onLogOut = () => {
        var {onUserLogOut} = this.props;
        onUserLogOut();
    }

    // onCheckUser = (checkUser) => {
        
    //     var result = (
    //         <li>
    //             <NavLink to="/login"><i className="fa fa-lock"></i> Đăng Nhập</NavLink>
    //         </li>
    //         );

    //     if (checkUser.length > 0){
    //         result = (
    //             <li>
    //                 <NavLink to="#" onClick ={() => this.onLogOut()}><i className="fa fa-lock"></i> Đăng Xuất</NavLink>
    //             </li>
    //             );
    //     } 

    //     return result
    // }
    
}

const mapStateToProps = state =>{
    return{
        checkUser: state.checkUser,
        cartProduct: state.cartProduct

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUserLogOut: (userLogout) => {
            dispatch(actUserLogOut(userLogout));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Header);
//export default Header;