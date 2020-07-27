import React from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import * as action from '../actions/actions';

class Aside extends React.Component{
    constructor(){
            super();
            this.state = {
                isMenFashion: true,
                isWomenFashion: true
               
            }
        }
    componentDidMount(){
    //Get categories Men's fashion
        axios({
            method: 'GET',
            url: "http://localhost:3000/categories?type=nam",
            data: null
        }).then(res =>{
            this.props.listCategoriesMen(res.data)
            // this.setState({
            //     categoriesListMen: res.data
            // })

        });
    
    //Get categories Women's fashion
       axios({
            method: 'GET',
            url: "http://localhost:3000/categories?type=nu",
            data: null
        }).then(res =>{
            this.props.listCategoriesWomen(res.data)
            // this.setState({
            //     categoriesListWomen: res.data
            // })
        });
      
    }      

    onToggleCategoryMen=(e)=>{
        e.preventDefault();
        this.setState({
            isMenFashion: !this.state.isMenFashion
        }) 
    }
    
    onToggleCategoryWomen=(e)=>{
        e.preventDefault();
        this.setState({
            isWomenFashion: !this.state.isWomenFashion
        })    
    }

    //Get product by slug
    onSlug=(slug)=>{
        axios({
            method: 'GET',
            url: `http://localhost:3000/products?slug=${slug}`,
            data: null
        }).then(res =>{
            this.props.listProductsBySlug(res.data)
        });
    }


    render(){
        //var {isMenFashion, isWomenFashion, categoriesListWomen, categoriesListMen} = this.state
        var {isMenFashion, isWomenFashion} = this.state
        var { categoriesMen, categoriesWomen } = this.props
        var showDataMen = categoriesMen.map((category, index)=>{
            // return <li key={indexMen}><NavLink to={`/products/${categoryMen.slug}`}>{categoryMen.name}</NavLink></li>
            // });
            return <li key={index}><NavLink to={`/products/${category.slug}`} onClick={()=>{this.onSlug(category.slug)}}>{category.name}</NavLink></li>
            });
        var showDataWomen = categoriesWomen.map((category, index)=>{
            // return <li key={indexWomen}><NavLink to={`/products/${categoryWomen.slug}`}>{categoryWomen.name}</NavLink></li>
            // }); 
            return <li key={index}><NavLink to={`/products/${category.slug}`} onClick={()=>{this.onSlug(category.slug)}}>{category.name}</NavLink></li>
            });            
        return(

            <div className="col-sm-3">
                <div className="left-sidebar">
                    <h2>Thể Loại</h2>
                    <div className="panel-group category-products" id="accordian">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <a  data-toggle="collapse" 
                                        data-parent="#accordian" 
                                        href="#nam"
                                        onClick={this.onToggleCategoryMen}>
                                        <span className="badge pull-right"><i className={isMenFashion ? "fa fa-plus" : 'fa fa-minus'}></i></span>
                                        Thời Trang Nam
                                    </a>
                                </h4>
                            </div>
                            <div id="nam" className={"panel-collapse" && isMenFashion ? "collapse" : ''}>
                                <div className="panel-body">
                                    <ul>
                                        {showDataMen}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <a  data-toggle="collapse" 
                                        data-parent="#accordian" 
                                        href="#nu"
                                        onClick={this.onToggleCategoryWomen}>
                                        <span className="badge pull-right"><i className={isWomenFashion ? "fa fa-plus" : 'fa fa-minus'} ></i></span>
                                        Thời Trang Nữ
                                    </a>
                                </h4>
                            </div>
                            <div id="nu" className={"panel-collapse" && isWomenFashion ? "collapse" : ''}>
                            
                                <div className="panel-body">
                                    <ul>
                                        {showDataWomen}            
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="brands_products">
                        <h2>Nhãn Hiệu</h2>
                        <div className="brands-name">
                            <ul className="nav flex-column nav-stacked">
                                <li><NavLink to="#"> <span className="pull-right">(22)</span>Nike</NavLink></li>
                                <li><NavLink to="#"> <span className="pull-right">(58)</span>Gucci</NavLink></li>
                            </ul>
                        </div>
                    </div>
                
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        categoriesMen: state.categories.categories_men,
        categoriesWomen: state.categories.categories_women   
    }
}

const mapDispatchToProps = (dispatch, props)=>{
    return{
        listCategoriesMen: (categories_men)=>{
            dispatch(action.fetchCategoriesMen(categories_men));
        },
        listCategoriesWomen: (categories_women)=>{
            dispatch(action.fetchCategoriesWomen(categories_women));
        },
        listProductsBySlug: (productsBySlug)=>{
            dispatch(action.fetchProductBySlug(productsBySlug));
        }

    }
}

// export default Aside;
export default connect(mapStateToProps, mapDispatchToProps)(Aside);