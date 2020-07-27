import React from 'react';
import {NavLink} from 'react-router-dom';
import { signInRequest, actCheckUser } from '../../actions/actions';
import {connect} from 'react-redux';


class Login extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            errors: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    showValidationErr(elm, msg){
        this.setState((prevState) => ({errors: [...prevState.errors, {elm, msg}] } ));
    }

    componentDidMount() {
        this.props.allUsers();
    }

   

    handleSubmit = (e) => {
        e.preventDefault();
        var isValid = true;
        //var emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var emailPattern = /[^@]+@[^@]+\.[^@]+/;
        //console.log(this.state);
        var { email, password} = this.state;
        var {history, users, onCheckUser} = this.props;
        //check email
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

        //check password
        if (password === ""){
            isValid = false;
            this.showValidationErr("password", "Bạn phải nhập mật khẩu")
        }
         else {
            this.showValidationErr("password", "")
        }


        if(isValid){
            users.forEach(eachRow => {
                if (email === eachRow['email'] && password === eachRow['password']) {
                    //console.log("login ok")
                    //sessionStorage.setItem('TOKEN', JSON.stringify(email))
                    onCheckUser(email)
                    history.push("/");
                    
                } else{
                    this.showValidationErr("password", "Sai email hoặc mật khẩu")
                }
            });
        }
        

    }

    render(){
        //var { email, password} = this.state;
        let passwordErr, emailErr = null;
        for(let err of this.state.errors){
            
            if (err.elm === "password"){
                passwordErr = err.msg
            }
            
            if (err.elm === "email"){
                emailErr = err.msg
            }
    
        }
        return(
            <div className="container">
                <div className="breadcrumbs">
                    <ol className="breadcrumb">
                    <li><NavLink to="/">Trang Chủ</NavLink></li>
                    <li className="active">Đăng Nhập</li>
                    </ol>
                </div>
                <div className="row login">
                    <div className="col-sm-4 col-sm-offset-1">
                        <div className="login-form">
                            <h2>Đăng Nhập Tài Khoản</h2>
                            <form onSubmit={this.handleSubmit} action="#">
                                <input
                                    type="email"
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
                                <button type="submit" className="btn btn-default">Đăng Nhập</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-4">
                        <div className="signup-form">
                            <h2>Bạn Chưa Có Tài Khoản</h2>
                            <p>Đăng ký tài khoản ngay để có thể mua hàng nhanh chóng và dễ dàng hơn!</p>
                            
                            <NavLink to="/signup" className="btn btn-default" role="button">Đăng Ký</NavLink>
                        </div>
                    </div>

                </div>
                

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.user
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        allUsers: () => {
            dispatch(signInRequest());
        },
        onCheckUser: (userLogin)=>{
            dispatch(actCheckUser(userLogin));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);