import React from 'react';
import {NavLink} from 'react-router-dom';

class Aside extends React.Component{
    render(){
        return(
        		<div id="sidebar-collapse" className="col-sm-3 col-lg-2 sidebar-admin">
					<div className="profile-sidebar">
						<div className="profile-userpic">
							<i className="fa fa-user-circle-o" aria-hidden="true"></i>
						</div>
						<div className="profile-usertitle">
							<div className="profile-usertitle-name">Admin</div>
						</div>
						<div className="clear"></div>
					</div>
					<div className="divider"></div>
					<form role="search">
						<div className="form-group">
							<input type="text" className="form-control" placeholder="Search"/>
						</div>
					</form>
					<ul className="nav menu">
						<li><NavLink to="/admin/dashboard"><i className="fa fa-tachometer" aria-hidden="true">&nbsp;</i>Dashboard</NavLink></li>
						<li><NavLink to="/admin/categories"><i className="fa fa-folder-open-o" aria-hidden="true">&nbsp;</i>Categories</NavLink></li>
						<li><NavLink to="/admin/products"><i className="fa fa-cubes" aria-hidden="true">&nbsp;</i>Products</NavLink></li>
						<li><NavLink to="/admin/orders"><i className="fa fa-shopping-cart" aria-hidden="true">&nbsp;</i>Orders</NavLink></li>
						<li><NavLink to="/admin/users"><i className="fa fa-user" aria-hidden="true">&nbsp;</i>User</NavLink></li>						
						<li><NavLink to="/login-admin" onClick={() => this.onLogOut()} ><i className="fa fa-power-off">&nbsp;</i>Logout</NavLink></li>
					</ul>
				</div>
        );
	}
	
	onLogOut = () =>{
		sessionStorage.removeItem('ADMIN');
	}

}    

export default Aside;