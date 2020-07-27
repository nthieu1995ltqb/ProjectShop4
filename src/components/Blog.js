import React from 'react';
import {NavLink} from 'react-router-dom';

class Blog extends React.Component{
    render(){
        var { id, title, img, content } = this.props.post
        var subContent = content.substr(0,250) + " ... "
        return(
            <div className="single-blog-post">
                
                <div className="row">
                    <NavLink to={`/blog-single/${id}`} className="blog-link">
                        <div className="summary-content">
                            <div className="col-sm-4 col-xs-12"> 
                                <img src={"./" + img} alt="" />                          
                            </div>
                            <div className="col-sm-8 col-xs-12">
                                <h3>{title}</h3>
                                <p>{subContent}</p>
                                <button className="btn btn-primary" to="#">Đọc tiếp</button>
                            </div>
                        </div>
                    </NavLink>
                </div>        
                
                
            </div>
        )
    }
}

export default Blog;