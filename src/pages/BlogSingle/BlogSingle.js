import React from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
import Aside from '../../components/Aside'
class BlogSingle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            postById: []
        }
    }
    componentDidMount(){
        var {id} = this.props.match.params
        axios({
            method: 'GET',
            url: `http://localhost:3000/posts/${id}`,
            data: null
        }).then(res =>{
            this.setState({
                postById: res.data
            })
        });
    }

    // nextPost=(id)=>{
    //     //console.log(id)
    // }
   
    render(){
        //console.log(this.state.id)
        var { title, img, content } = this.state.postById
        return(
            <div className="container" >
                <div className="row">
                    <Aside />                    
                    <div className="col-sm-9">
                        <div className="blog-post-area">
                            <h2 className="title text-center">Nội Dung</h2>
                            <div className="single-blog-post">
                                <h3>{title}</h3>
                                <div className="post-meta">
                                    <ul>
                                        <li><i className="fa fa-user"></i> Tác Giả</li>
                                        <li><i className="fa fa-clock-o"></i> Thời Gian</li>
                                        <li><i className="fa fa-calendar"></i> Ngày Tháng</li>
                                    </ul>
                                    <span>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-half-o"></i>
                                    </span>
                                </div>
                                <NavLink to="">
                                    <img src={"./../"+img} alt=""/>
                                </NavLink>
                                <p>{content}</p>
                                <div className="pager-area">
                                    <ul className="pager pull-right">
                                        <li><NavLink to="#">Trước</NavLink></li>
                                        <li><NavLink to="#">Tiếp</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>	
                    {/* a */}
                </div>
            </div>
        )
    }
}

export default BlogSingle;