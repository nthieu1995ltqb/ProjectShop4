import React from 'react';
import Aside from '../../components/Aside'
import Blog from '../../components/Blog'
import axios from 'axios';
import {NavLink} from 'react-router-dom';

class News extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            postsList: [],
        }
    }
    componentDidMount(){
        axios({
            method: 'GET',
            url: 'http://localhost:3000/posts',
            data: null
        }).then(res =>{
            this.setState({
                postsList: res.data
            })
        });
    }

    render(){
        var showPosts = this.state.postsList.map((post, index)=>{
            return <Blog    key={index}
                            post={post}
                            img={post.img}
                            title={post.title}
                            content={post.content}/>
        })
        return(
            <div>
                <div className="container" >
                    <div className="row">
                        <Aside />
                        
                        <div className="col-sm-9">
                            <div className="blog-post-area">
                                <h2 className="title text-center">Tin Tức</h2>
                                    {showPosts}                               
                                <div className="pagination-area">
                                    <ul className="pagination">
                                        <li><NavLink className="active" to="#" >1</NavLink></li>
                                        <li><NavLink to="#">2</NavLink></li>
                                        <li><NavLink to="#">3</NavLink></li>
                                        <li><NavLink to="#"><i className="fa fa-angle-double-right"></i></NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default News;