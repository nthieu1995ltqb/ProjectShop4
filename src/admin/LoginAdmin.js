import React from 'react';

import { connect } from 'react-redux';
import { AdminRequest } from '../actions/actions';

class LoginAdmin extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			email: "",
            password: "",
            errors: []
		}
		this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
	}

	
	handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
	}
    
    showValidationErr(elm, msg){
        this.setState((prevState) => ({errors: [...prevState.errors, {elm, msg}] } ));
    }

	componentDidMount() {
        this.props.allAdmin();
    }

    // dologin() {
        
    //     const {email, password} = this.state;
    //     let { admins, history, onCheckUser} = this.props;
    //     //console.log(admins)
    //     // console.log(email);
    //     // console.log(password);
    //     // console.log(history)
    //     //duyet cach thanh phan cua obj co trong mang
    //     admins.forEach(eachRow => {
    //         if (email === eachRow['email'] && password === eachRow['password']) {
    //             //console.log("ok")
    //             sessionStorage.setItem('ADMIN', JSON.stringify(email))
    //             // onCheckUser(email) 
    //             history.push("/admin");
	// 		} 
			
    //     });

    //     return 'Error email or password'
    // }

    handleSubmit = (e) => {
	
        e.preventDefault();
        
        var isValid = true;
        //var emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var emailPattern = /[^@]+@[^@]+\.[^@]+/;
        //console.log(this.state);
        var { email, password} = this.state;
        var {history, admins} = this.props;
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
            admins.forEach(eachRow => {
                if (email === eachRow['email'] && password === eachRow['password']) {
                    //console.log("login ok")
                    
                    // onCheckUser(email)
                    sessionStorage.setItem('ADMIN', JSON.stringify(email))
                    history.push("/admin");
                    
                } else{
                    this.showValidationErr("password", "Sai email hoặc mật khẩu")
                }
            });
        }
	
    }
	
    render(){
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
				<div className="row login-admin">
					<div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-4">
						<div className="login-panel panel panel-default mt-100">
							<div className="login-form">
								<h2>Đăng Nhập Admin</h2>
								<form onSubmit={this.handleSubmit} action="#" className="signup-form">  
		
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
					</div>
				</div>
			</div>
        );
    }
}    

const mapStateToProps = (state) => {
    return {
        admins: state.admin
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        allAdmin: () => {
            dispatch(AdminRequest());
        }
        // onCheckAdmin: (adminLogin)=>{
        //     dispatch(actCheckAdmin(adminLogin));
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (LoginAdmin);