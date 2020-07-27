import React from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';

class Categories extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			categories: [],
			name: "",
			slug: "",
			type: "",
            pageActive: 1,
            page: [1,2,3]
		}
	}

    componentDidMount(){
        axios({
            method: 'GET',
            url: "http://localhost:3000/categories?_page=1&_limit=7",
            data: null
        }).then(res =>{
            this.setState({
                categories: res.data
            })
		})
    }

    onChange=(e)=>{
    	var name = e.target.name;
    	var value = e.target.value;
    	this.setState({
    		[name] : value
    	})
    }

    addCategory=(e)=>{
    	e.preventDefault();
    	var { id, name, slug, type } =  this.state
    	if (id) {
	        axios({
	            method: 'PUT',
	            url: `http://localhost:3000/categories/${id}`,
	            data: {
	            	name: name,
	            	slug: slug,
	            	type: type
	            }
	        }).then(res =>{
	        	confirm('Cập nhật thành công!')//eslint-disable-line
	        }) 
    	} else {
	        axios({
	            method: 'POST',
	            url: "http://localhost:3000/categories",
	            data: {
	            	name: name,
	            	slug: slug,
	            	type: type
	            }
	        }).then(res =>{
	        	confirm('Thêm chuyên mục thành công!')//eslint-disable-line
	        })     		
    	}
    }	 	

    onDeleteCategory=(id)=>{
    	if (confirm('Bạn muốn xóa chuyên mục này?')){//eslint-disable-line
	        axios({
	            method: 'DELETE',
	            url: `http://localhost:3000/categories/${id}`,
	            data: null
	        }).then(res =>{
	        	confirm('Xóa chuyên mục thành công!')//eslint-disable-line
	        })  
    	}
    }

    onEditCategory=(id)=>{
        axios({
            method: 'GET',
            url: `http://localhost:3000/categories/${id}`,
            data: null
        }).then(res =>{
            this.setState({
                id: res.data.id,
                name: res.data.name,
                slug: res.data.slug,
                type: res.data.type
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
            url: `http://localhost:3000/categories?_page=${page}&_limit=7`,
            data: null
        }).then(res =>{
            this.setState({
                    categories: res.data
                })
            })
        }        

    render(){
    	//var { name, slug, type } = this.state
    	var { name, slug } = this.state
    	var showCategories = this.state.categories.map((category, index)=>{
    		return 	<tr key={index}>
				      <th scope="row">{category.id}</th>
				      <td>{category.name}</td>
				      <td>{category.type === 'nam' ? 'Nam' : 'Nữ'}</td>
				      <td>{category.slug}</td>
				      <td>	<NavLink to="#" onClick={()=>{this.onEditCategory(category.id)}}><i className="fa fa-pencil-square-o"></i></NavLink>&nbsp;
				      		<NavLink to="#" onClick={()=>{this.onDeleteCategory(category.id)}}><i className="fa fa-trash-o"></i></NavLink>
				      </td>
				    </tr>
    	})

        var showPages = this.state.page.map((page, index)=>{
            return <li  key={index}><NavLink to="#"
                        className={this.state.pageActive === page ? 'active' : ''} 
                        onClick={(e)=>{this.handlerPaginate(e, page)}}>{page}</NavLink></li>
        })
        return(
        	<div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main-area mt-10">
				<div className="panel panel-default">
					<div className="panel-heading clearfix mb-10">
						Danh Sách Chuyên Mục
						</div>
							<form onSubmit={this.addCategory}>
								<div className="col-md-4 col-sm-4 col-xs-12 mb-3">
									<div className="input-group input-group-sm mb-10">
										<span className="input-group-addon">Tên</span>
										<input 	type="text" 
												className="form-control input-lg" 
												placeholder="Tên chuyên mục" 
												name="name" value={name}
												onChange={this.onChange}/>
									</div>			
								</div>
								<div className="col-md-3 col-sm-3 col-xs-12 mb-3">
									<div className="input-group input-group-sm mb-10">
										<span className="input-group-addon">Slug</span>
										<input 	type="text" 
												className="form-control input-lg" 
												placeholder="Ex: ao-khoac-nam" 
												name="slug" value={slug}
												onChange={this.onChange}/>
									</div>			
								</div>
								<div className="col-md-3 col-sm-3 col-xs-12 mb-3">												
										<select 	className="form-control input-sm mb-10"													
													name="type"
													onChange={this.onChange}>
													<option>Loại</option>
													<option value="nam">Thời Trang Nam</option>
													<option value="nu">Thời Trang Nữ</option>
										</select>
								</div>			
								<div className="col-md-2 col-sm-2 col-xs-12 mb-3">
								{/* da~ button con` the? "a" ?? <a><button type="submit" className="btn btn-primary"><i className="fa fa-plus"></i>&nbsp;Thêm Chuyên Mục</button></a> */}
								<button type="submit" className="btn btn-primary"><i className="fa fa-plus"></i>&nbsp;Thêm Chuyên Mục</button>
								</div>
							</form>			
					<div className="panel-body">
						<table className="table">
						  <thead>
						    <tr>
						      <th scope="col">ID</th>
						      <th scope="col">Tên</th>
						      <th scope="col">Phân Loại</th>
						      <th scope="col">Slug</th>
						    </tr>
						  </thead>
						  <tbody>
						    {showCategories}
						  </tbody>
						</table>
	                    <div class="pagination-area-admin">
                            <ul class="pagination">
                                {showPages}
                                <li><NavLink to="#"><i class="fa fa-angle-double-right"></i></NavLink></li>
                            </ul>
                    	</div>
					</div>
				</div>
			</div>
        );
    }
}    

export default Categories;