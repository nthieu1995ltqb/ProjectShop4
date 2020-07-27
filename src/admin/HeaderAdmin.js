import React from 'react';
import {NavLink} from 'react-router-dom';

class HeaderAdmin extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#sidebar-collapse"><span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span></button>
                        <NavLink className="navbar-brand" to="#"><span>E</span>-Shopper</NavLink>
                    </div>
                </div>
            </nav>
        );
    }
}    

export default HeaderAdmin;