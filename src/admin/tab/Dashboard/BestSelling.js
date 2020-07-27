import React from 'react';

class BestSelling extends React.Component{
    render(){
        return(
			<table className="table table-best-selling">
			  <thead className="thead-dark">
			    <tr>
			      <th scope="col">STT</th>
			      <th scope="col">Tên</th>
			      <th scope="col">Giá</th>
			      <th scope="col">Số Lượng</th>
			      <th scope="col">Lợi Nhuận</th>
			      <th scope="col">Tình Trạng</th>
			    </tr>
			  </thead>
			  <tbody>
			    <tr>
			      <th scope="row">1</th>
			      <td>Áo sơ mi MS 17M4903</td>
			      <td>33$</td>
			      <td>355</td>
			      <td>5,460$</td>
			      <td><label className="label label-success">Còn hàng</label></td>
			    </tr>
			    <tr>
			      <th scope="row">2</th>
			      <td>Áo sơ mi MS 17M4903</td>
			      <td>33$</td>
			      <td>355</td>
			      <td>5,460$</td>
			      <td><label className="label label-success">Còn hàng</label></td>
			    </tr>
			    <tr>
			      <th scope="row">3</th>
			      <td>Áo sơ mi MS 17M4903</td>
			      <td>33$</td>
			      <td>355</td>
			      <td>5,460$</td>
			      <td><label className="label label-warning">Sắp hết</label></td>
			    </tr>
			    <tr>
			      <th scope="row">4</th>
			      <td>Áo sơ mi MS 17M4903</td>
			      <td>33$</td>
			      <td>355</td>
			      <td>5,460$</td>
			      <td><label className="label label-warning">Sắp hết</label></td>
			    </tr>
			    <tr>
			      <th scope="row">5</th>
			      <td>Áo sơ mi MS 17M4903</td>
			      <td>33$</td>
			      <td>355</td>
			      <td>5,460$</td>
			      <td><label className="label label-success">Còn hàng</label></td>
			    </tr>
			  </tbody>			  
			</table>	
        );
    }
}    

export default BestSelling;