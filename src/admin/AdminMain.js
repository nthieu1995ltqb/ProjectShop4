import React from 'react';
import Aside from './Aside';
// import Dashboard from './tab/Dashboard/Dashboard';
// import Categories from './tab/Categories';
// import ProductsAdmin from './tab/ProductsAdmin';
// import Orders from './tab/Orders';
// import Users from './tab/Users';

import '../css/admin/datepicker3.css'
import '../css/admin/styles.css';
import routesTab from './routesTab';
import {Switch, Route} from 'react-router-dom';

class AdminMain extends React.Component{

    componentDidMount(){
        var test = 'ADMIN';
        let { history} = this.props;
        //console.log(history)
        // var a = sessionStorage.key('')
        // console.log(a)

        if (test in sessionStorage){
            // var email = sessionStorage.getItem('TOKEN');
            // email = email.replace(/"/g, "");
            // this.setState({
            //     email: email
            // })
            //alert("Xin chao")
        } else{
            
            //console.log("err")
            //alert("Bạn chưa đăng nhập.")
            history.push("/login-admin");

        }

    } 

    render(){
        return(
                <div>
                    <Aside />
    				<div>           
                        {this.showContentMenu(routesTab)}
                    </div>                    
                </div>
                )
    		}
    showContentMenu = (routesTab) => {
        var result = null;
        if(routesTab.length > 0){
            result = routesTab.map((route, index) => {
                return(
                <Route 
                    key={index} 
                    path={route.path}
                    exact={route.exact}
                    layout={route.layout}
                    component={route.main}
                />
                )
            } )
        }
    return <Switch>{result}</Switch>;
    }            
}	

export default AdminMain;