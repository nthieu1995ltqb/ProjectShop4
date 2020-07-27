import React from 'react';
import {NavLink} from 'react-router-dom';
import callApi from '../../utils/apiCaller';
import { signInRequest } from '../../actions/actions';
import {connect} from 'react-redux';

class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            address: "",
            phone_number: "",
            email: "",
            password: "",
            verify_password: "",
            errors: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    showValidationErr(elm, msg){
        this.setState((prevState) => ({errors: [...prevState.errors, {elm, msg}] } ));
    }


    componentDidMount() {
        this.props.allUsers();
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        //this.clearValidationErr("name");
    }
  
    handleSubmit = (e) => {
        e.preventDefault();
        var isValid = true;
        //var emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var emailPattern = /[^@]+@[^@]+\.[^@]+/;
        //console.log(this.state);
        var {name, address, phone_number, email, password, verify_password} = this.state;
        var {history, users} = this.props;
        //console.log(users)
        //this.props.userSignupRequest(this.state);
        if (name === ""){
            //console.log("err")
            isValid = false;
            this.showValidationErr("name", "Bạn phải nhập Họ tên")
        } else {
            this.showValidationErr("name", "")
        }

        if (address === ""){
            //console.log("err")
            isValid = false;
            this.showValidationErr("address", "Bạn phải nhập Họ tên")
        } else {
            this.showValidationErr("address", "")
        }
        //check phone_number
        if (phone_number === ""){
            //console.log("err")
            isValid = false;
            this.showValidationErr("phone_number", "Bạn phải nhập số điện thoại")
        } else if (isNaN(phone_number)){
            isValid = false;
            this.showValidationErr("phone_number", "Số điện thoại là số. Không phải là kí tự")
        }
         else {
            this.showValidationErr("phone_number", "")
        }
        //check Email

        if (email === ""){
            isValid = false;
            this.showValidationErr("email", "Bạn phải nhập Email")
        } else if (!emailPattern.test(email)){
            isValid = false;
            this.showValidationErr("email", "Bạn phải nhập đúng kiểu email. Ví dụ: abc@xyz.com")
        }
        else {
            this.showValidationErr("email", "")
        }

        users.forEach(eachRow => {
            if (email === eachRow['email']) {
                //console.log("trung email")
                isValid = false;
                this.showValidationErr("email", "Email đã được đăng ký")
            }
        });
        //check password
        if (password.length < 3){
            isValid = false;
            this.showValidationErr("password", "Mật khẩu phải nhiều hơn 3 kí tự")
        }
         else {
            this.showValidationErr("password", "")
        }
        //check verify_password
        if (password !== verify_password){
            //console.log("pas err")
            isValid = false;
            this.showValidationErr("verify_password", "Xác nhận mật khẩu không đúng ")
        } else {
            this.showValidationErr("verify_password", "")
        }
        // check dieu kien
        if(isValid){
            // console.log("ok")
            callApi('user', 'POST', {
                name: name,
                address: address,
                phone_number: phone_number,
                email: email,
                password: password
            }, 
            {withCredentials: true}).then(res => {
                history.push("/login"); 
            }) 
        }
        
        
    }
    render(){
        //var {name, phone_number, email, password, verify_password} = this.state;
        let addressErr, phone_numberErr, passwordErr, nameErr, emailErr, verify_passwordErr = null;
        for(let err of this.state.errors){
            if(err.elm === "phone_number"){
                phone_numberErr = err.msg
            } 
            if (err.elm === "password"){
                passwordErr = err.msg
            }
            if (err.elm === "name"){
                nameErr = err.msg
            }
            if (err.elm === "address"){
                addressErr = err.msg
            }
            if (err.elm === "email"){
                emailErr = err.msg
            }
            
            if (err.elm === "verify_password"){
                verify_passwordErr = err.msg
            }
        }

        return(
            <div className="container">
                <div className="breadcrumbs">
                    <ol className="breadcrumb">
                    <li><NavLink to="/">Trang Chủ</NavLink></li>
                    <li className="active">Đăng Ký</li>
                    </ol>
                </div>

                <div className="row signup">
                    <div className="col-sm-6 col-sm-offset-2">
                        <div className="login-form">
                            <h2>Đăng Ký Tài Khoản</h2>
                            <form onSubmit={this.handleSubmit} action="#" className="signup-form">  
                                <input 
                                    type="text"
                                    id="name"
                                    name="name" 
                                    value={this.state.name}
                                    placeholder="Họ Tên" 
                                    
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
                                    id="phone_number" 
                                    name="phone_number" 
                                    value={this.state.phone_number} 
                                    placeholder="Số Điện Thoại"
                                    onChange={this.handleChange} 
                                   
                                />
                                <small className="text-danger"> {phone_numberErr ? phone_numberErr : ""} </small>
                                <input
                                    type="text"
                                    id="email" 
                                    name="email" 
                                    value={this.state.email}
                                    placeholder="Email"  
                                   onChange={this.handleChange}
                                  
                                />
                                <small className="text-danger"> {emailErr ? emailErr : ""} </small>
                                <input 
                                type="password"
                                    id="password" 
                                    name="password" 
                                    value={this.state.password} 
                                    placeholder="Mật Khẩu" 
                                    onChange={this.handleChange} 
                                    
                                />
                                 <small className="text-danger"> {passwordErr ? passwordErr : ""} </small>
                                <input 
                                    type="password"
                                    id="verify_password" 
                                    value={this.state.verify_password}
                                    name="verify_password"
                                    placeholder="Xác Nhận Mật Khẩu" 
                                   onChange={this.handleChange} 
                                  
                                />
                                <small className="text-danger"> {verify_passwordErr ? verify_passwordErr : ""} </small>
                                <button type="submit" className="btn btn-default">Đăng Ký</button>
                                
                            </form>
                        </div>
                    </div>

                </div>
                
            </div>
        )
    }
}

//export default Signup;

const mapStateToProps = (state) => {
    return {
        users: state.user
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        allUsers: () => {
            dispatch(signInRequest());
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Signup);