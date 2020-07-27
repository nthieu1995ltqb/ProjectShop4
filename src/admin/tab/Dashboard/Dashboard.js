import React from 'react';
import SalesTotal from './SalesTotal';
import Visitors from './Visitors';
import BrowserUsage from './BrowserUsage';
import BestSelling from './BestSelling';

class Dashboard extends React.Component{
    render(){
        return(
        	<div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main-area">
				<div className="row">
						<div className="col-xs-12 col-md-3 col-lg-33">
							<div className="panel mt-20">
								<div className="panel panel-teal panel-widget border-right">
									<div className="row">
										<span className="bg-icon"><em className="fa fa-xl fa-shopping-cart color-blue"></em></span>
										<div className="large">195</div>
										<div className="text-muted">Đơn hàng mới</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xs-12 col-md-3 col-lg-3">
							<div className="panel mt-20">
								<div className="panel panel-blue panel-widget border-right">
									<div className="row"><em className="fa fa-xl fa-comments color-orange"></em>
										<div className="large">71</div>
										<div className="text-muted">Bình luận</div>
									</div>
								</div>
							</div>	
						</div>
						<div className="col-xs-12 col-md-3 col-lg-3">
							<div className="panel mt-20">
								<div className="panel panel-orange panel-widget border-right">
									<div className="row"><em className="fa fa-xl fa-users color-teal"></em>
										<div className="large">58</div>
										<div className="text-muted">Thành viên mới</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xs-12 col-md-3 col-lg-3">
							<div className="panel mt-20">
								<div className="panel panel-red panel-widget ">
									<div className="row"><em className="fa fa-xl fa-search color-red"></em>
										<div className="large">5.6k</div>
										<div className="text-muted">Lượt xem trang</div>
									</div>
								</div>
							</div>
						</div>
				</div>	
				<div className="row">
					<div className="col-md-6">
						<div className="panel panel-default">
							<div className="panel-heading">
								Sản Phẩm Bán Chạy
							</div>
							<div className="panel-body">
		 						<BestSelling/>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="panel panel-default">
							<div className="panel-heading">
								Tổng Sales
							</div>
							<div className="panel-body">
								<SalesTotal/>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						<div className="panel panel-default">
							<div className="panel-heading">
								Khách Hàng Trực Tuyến
							</div>
							<div className="panel-body">
								<Visitors/>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="panel panel-default">
							<div className="panel-heading">
								Trình Duyệt
							</div>
							<div className="panel-body">
								<BrowserUsage/>
							</div>
						</div>
					</div>
				</div>
        	</div>
        );
    }
}    

export default Dashboard;