import React from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';

class ProductsAdmin extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			products: [],
			categories: [],
			category: "",
			id: "",
			name: "",
			img1: "images/home/thoitrangnu/somi/somi-nu-1_0.jpg",
			img2: "images/home/thoitrangnu/somi/somi-nu-1_1.jpg",
			img3: "images/home/thoitrangnu/somi/somi-nu-1_2.jpg",
			price: "",
			tradeMark: "",
			slug: "",
			status: true,
			rating: 4,
            pageActive: 1,
            page: [1,2,3,4,5,6,7,8,9,10]
		}
	}

    componentDidMount(){
        axios({
            method: 'GET',
            url: "http://localhost:3000/products?_page=1&_limit=10",
            data: null
        }).then(res =>{
            this.setState({
                products: res.data
            })
		})
        axios({
            method: 'GET',
            url: "http://localhost:3000/categories",
            data: null
        }).then(res =>{
            this.setState({
                categories: res.data
            })
		})
    }

    onChange=(e)=>{
    	var name = e.target.name;
    	var value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    	this.setState({
    		[name] : value
    	})
    }


    addProduct=()=>{
    	var { id, name, tradeMark, img1, img2, img3, price, slug, status, rating } = this.state
    	if (id) {
	        axios({
	            method: 'PUT',
	            url: `http://localhost:3000/products/${id}`,
	            data: {
	            	name: name,
	            	img1: img1,
	            	img2: img2,
	            	img3: img3,
	            	price: price,
	            	tradeMark: tradeMark,
	            	slug: slug,
	            	status: status,
	            	rating: rating
	            }
	        }).then(res =>{
	        	confirm('Cập nhật thành công!')//eslint-disable-line
	        })  
    	} else {
	        axios({
	            method: 'POST',
	            url: "http://localhost:3000/products",
	            data: {
	            	name: name,
	            	img1: img1,
	            	img2: img2,
	            	img3: img3,
	            	price: price,
	            	tradeMark: tradeMark,
	            	slug: slug,
	            	status: status,
	            	rating: rating
	            }
	        }).then(res =>{
	        	confirm('Thêm sản phẩm thành công!')//eslint-disable-line
	        })    		
    	}

    }

    onDeleteProduct=(id)=>{
    	if (confirm('Bạn muốn xóa sản phẩm này?')){//eslint-disable-line
	        axios({
	            method: 'DELETE',
	            url: `http://localhost:3000/products/${id}`,
	            data: null
	        }).then(res =>{
	        	confirm('Xóa sản phẩm thành công!')//eslint-disable-line
	        })  
    	}
    }

    onEditProduct=(id)=>{
        axios({
            method: 'GET',
            url: `http://localhost:3000/products/${id}`,
            data: null
        }).then(res =>{
            this.setState({
                id: res.data.id,
                name: res.data.name,
                img1: res.data.img1,
                img2: res.data.img2,
                img3: res.data.img3,
                price: res.data.price,
                tradeMark: res.data.tradeMark,
                slug: res.data.slug,
                status: res.data.status
            })
		})    	
    }

    handlerPaginate=(e, page)=>{
        e.preventDefault()
        this.setState({
            pageActive: page
        })
        axios({
            method: 'GET',
            url: `http://localhost:3000/products?_page=${page}&_limit=10`,
            data: null
        }).then(res =>{
            this.setState({
                    products: res.data
                })
            })
        }     

    render(){
    	//console.log(this.state.id)
    	//var { name, price, tradeMark, status, slug, rating } = this.state
    	var { name, price, tradeMark, status } = this.state
    	var showListProducts = this.state.products.map((product, index)=>{
			return 	<tr key={index}>
				      <th scope="row">{product.id}</th>
				      <td>{product.name}</td>
				      <td>${product.price}</td>
				      <td>{product.tradeMark}</td>
				      <td>{product.slug}</td>
				      <td><label className={product.status ? 'label label-success' : 'label label-danger'}>{product.status ? 'Còn hàng' : 'Hết hàng'}</label></td>
				      <td>{product.rating}/5</td>
				      <td>	<NavLink to="#"><i className="fa fa-pencil-square-o" onClick={()=>{this.onEditProduct(product.id)}}></i></NavLink>&nbsp;
				      		<NavLink to="#"><i className="fa fa-trash-o" onClick={()=>{this.onDeleteProduct(product.id)}}></i></NavLink>
				      </td>
				    </tr>
    	});

    	var showCategories = this.state.categories.map((category, index)=>{
    		return <option key={index} value={category.slug}>{category.name}</option>
    	})

        var showPages = this.state.page.map((page, index)=>{
            return <li  key={index}><NavLink to="#"
                        className={this.state.pageActive === page ? 'active' : ''} 
                        onClick={(e)=>{this.handlerPaginate(e, page)}}>{page}</NavLink></li>
        })
        return(
        	<div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main-area">
    						<div className="row mt-10">
    							<div className="col-md-9 col-sm-9 col-xs-12 mb-3">
								<div className="panel panel-default">
									<div className="panel-heading clearfix">Danh sách sản phẩm</div>
									<div className="panel-body">
    								<table className="table">
									  <thead>
									    <tr>
									      <th scope="col">ID</th>
									      <th scope="col">Tên</th>
									      <th scope="col">Giá</th>
									      <th scope="col">Thương hiệu</th>
									      <th scope="col">Thể loại</th>
									      <th scope="col">Tình trạng</th>
									      <th scope="col">Rating</th>
									      <th scope="col"></th>
									    </tr>
									  </thead>
									  <tbody>
									 	{showListProducts}
									  </tbody>
									</table>
									</div>
				                    <div class="pagination-area-admin">
			                            <ul class="pagination">
			                                {showPages}
			                                <li><NavLink to="#"><i class="fa fa-angle-double-right"></i></NavLink></li>
			                            </ul>
			                        </div>
									</div>
    							</div>
    							<div className="col-md-3 col-sm-3 col-xs-12 mb-3">
								<div className="panel panel-default">
									<div className="panel-heading clearfix mb-50">Thêm mới sản phẩm</div>
									<div className="panel-body">
									<form onSubmit={this.addProduct}>
										<div className="input-group input-group-sm mb-10">
											<span className="input-group-addon">Tên</span>
											<input 	type="text" 
													className="form-control input-lg" 
													placeholder="Tên sản phẩm" 
													name="name" value={name}
													onChange={this.onChange}/>
										</div>

										<div className="input-group input-group-sm mb-10">
											<span className="input-group-addon">Giá</span>
											<input 	type="number" 
													className="form-control input-lg" 
													placeholder="Giá sản phẩm ($)" 
													name="price" value={price}
													onChange={this.onChange}/>
										</div>
										<div className="input-group input-group-sm mb-10">
											<span className="input-group-addon">Thương hiệu</span>
											<input 	type="text" 
													className="form-control input-lg" 
													placeholder="Thương hiệu" 
													name="tradeMark" value={tradeMark}
													onChange={this.onChange}/>
										</div>
										<label>Thể loại</label>					
										<select 	className="form-control input-sm mb-10"													
													name="slug"
													onChange={this.onChange}>
													<option>Chọn thể loại</option>
													{showCategories}
										</select>																		
										<label className="col-sm-12 radio-inline mb-10">
											<input 	type="checkbox" 
													name="status" value={status}
													onChange={this.onChange}
													checked={status}/>&nbsp; Còn Hàng			
										</label>
										<button type="submit" className="btn btn-info"><i class="fa fa-plus">&nbsp;</i>Thêm Sản Phẩm</button>
									</form>	
									</div>
								</div>
    							</div>
    						</div>

        	</div>
        );
    }
}    

export default ProductsAdmin;