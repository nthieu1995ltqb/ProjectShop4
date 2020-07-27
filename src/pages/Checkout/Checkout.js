import React from 'react';
import {NavLink} from 'react-router-dom';
import CheckoutItem from './CheckoutItem';
import { connect } from 'react-redux';
import {actDeleteCheckOut} from '../../actions/actions'
import callApi from '../../utils/apiCaller';

class Checkout extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            address:'',
            phone:'',
            email: '',
            errors: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    showValidationErr(elm, msg){
        this.setState((prevState) => ({errors: [...prevState.errors, {elm, msg}] } ));
    }

    componentDidMount(){
        var test = 'TOKEN';
        let { history} = this.props;
        //console.log(history)
        // var a = sessionStorage.key('')

        if (test in sessionStorage){
            var email = sessionStorage.getItem('TOKEN');
            email = email.replace(/"/g, "");
            this.setState({
                email: email
            })
        } else{
            
            //console.log("err")
            alert("Bạn chưa đăng nhập. Bạn cần phải đăng nhập mới được thanh toán")
            history.push("/login");

        }

    } 

    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        var isValid = true;

        var {name, address, phone, email} = this.state;
        //console.log(name, address, phone)
        var {checkOutProduct, history} = this.props;
        
        var time = new Date();
        //console.log(email)
        //check name
        if (name === ""){
            //console.log("err")
            isValid = false;
            this.showValidationErr("name", "Bạn phải nhập Họ tên")
        } else {
            this.showValidationErr("name", "")
        }
        //check phone_number
        if (phone === ""){
            isValid = false;
            this.showValidationErr("phone", "Bạn phải nhập số điện thoại")
        } else if (isNaN(phone)){
            isValid = false;
            this.showValidationErr("phone", "Số điện thoại là số. Không phải là kí tự")
        }
         else {
            this.showValidationErr("phone", "")
        }
        //check address
        if (address === ""){
            isValid = false;
            this.showValidationErr("address", "Bạn phải nhập địa chỉ")
        } else {
            this.showValidationErr("address", "")
        }
        //check dieu kien
        if(isValid){
            callApi('checkout', 'POST', {
                name: name,
                address: address,
                email: email,
                phone: phone,
                time: time,
                checkOutProduct: checkOutProduct,
                total: this.showTotalAmount(checkOutProduct),
                status: true
    
            }).then(res => {
                
                //localStorage.removeItem('CART');
                alert("Bạn đã thanh toán thành công. Quay lại trang chủ để tiếp tục mua sắm");
                history.push("/");
                this.onCheckOut()
                
            }) 
        }
        
    }

   

    render(){
 
        var {checkOutProduct} = this.props;
        //console.log(checkOutProduct)
        let phoneErr, addressErr, nameErr  = null;
        for(let err of this.state.errors){
            if(err.elm === "phone"){
                phoneErr = err.msg
            } 
            if (err.elm === "address"){
                addressErr = err.msg
            }
            if (err.elm === "name"){
                nameErr = err.msg
            } 

        }

        return(
            <div id="cart_items">
                <div className="container">
                    <div className="breadcrumbs">
                        <ol className="breadcrumb">
                        <li><NavLink to="/">Trang Chủ</NavLink></li>
                        <li className="active">Thanh toán</li>
                        </ol>
                    </div>
                    <div className="row login">
                        <div className="col-sm-7">
                            <div className="table-responsive cart_info">
                                <table className="table table-condensed">
                                    <thead>
                                        <tr className="cart_menu">
                                            <td className="image">Sản Phẩm</td>
                                            <td className="description"></td>
                                            <td className="price">Giá</td>
                                            <td className="quantity">Số Lượng</td>
                                            <td className="total">Số Tiền</td>
                                            <td></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.showCartItem(checkOutProduct)}
                                        <tr>
                                            <td></td>

                                            <td className="cart_total">
                                                <p className="cart_total_price">Tổng tiền: $ {this.showTotalAmount(checkOutProduct)}  </p>
                                            </td>
                                        </tr>
    
                                    </tbody>
                                </table>
                            </div>
                        </div>
    
                        <div className="col-sm-4 col-sm-offset-1">
                            {/* <div>
                                <h2>Dia chi giao hang</h2>
                                <div className="checkout-name">
                                    Ten: <span>abc</span>
                                </div>
                                <div className="checkout-address">
                                    Dia chi: <span>123a</span>
                                </div>
                            </div> */}
                            <div className="login-form">
                                <h2>Thông tin thanh toán</h2>
                                <form onSubmit={this.handleSubmit} action="#">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={this.state.name}
                                        placeholder="Họ tên"
                                        onChange={this.handleChange}
                                      
                                    />
                                    <small className="text-danger"> {nameErr ? nameErr : ""} </small>
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        value={this.state.address}
                                        placeholder="Địa Chỉ"
                                        onChange={this.handleChange}
                                  
                                    />
                                    <small className="text-danger"> {addressErr ? addressErr : ""} </small>
                                    <input
                                        type="text"
                                        id="phone"
                                        name="phone"
                                        value={this.state.phone}
                                        placeholder="Số điện thoại"
                                        onChange={this.handleChange}
                                      
                                    />
                                    <small className="text-danger"> {phoneErr ? phoneErr : ""} </small>
                                    <button 
                                        type="submit"
                                        className="btn btn-default"
        
                                        >Thanh Toán Đơn Hàng</button>
                                </form>
                            </div>
                        </div>
                        
                        
                    </div>
                    
                </div>
            </div>
        )
    }


    showCartItem = (item) =>{
        
        var result = null
        if(item.length > 0){
            result = item.map((item, index)=>{
                return(
                    <CheckoutItem 
                        key={index}
                        item={item}
                        index={index}
                        
                    />
                )
            })
        }
        return result;
    }

    showTotalAmount = (cartProduct) =>{
        var total = 0;
        if (cartProduct.length >0){
            for (var i = 0; i< cartProduct.length; i++){
                total += cartProduct[i].product.price * cartProduct[i].quantity;
            }
        }
        // console.log(total)
        return total;
    }

    onCheckOut = () => {
        //   console.log(product);
            var {onDeleteCheckOut} = this.props;
            onDeleteCheckOut();
            
        }


}

const mapStateToProps = state =>{
    return{
        checkOutProduct: state.cartProduct
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteCheckOut: (product) => {
            dispatch(actDeleteCheckOut(product));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Checkout);