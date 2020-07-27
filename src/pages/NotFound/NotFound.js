import React from 'react';
import {NavLink} from 'react-router-dom';

class NotFound extends React.Component{
    render(){
        return(
            <div className="container text-center">
                <div className="content-404">
                    <img src="images/404/404.png" className="img-responsive" alt="error" />
                    <h1><b>Lỗi!</b> Không tìm thấy trang</h1>
                    <h2><NavLink to="/">Trở về Trang Chủ</NavLink></h2>
                </div>
            </div>
        )
    }
}

export default NotFound;