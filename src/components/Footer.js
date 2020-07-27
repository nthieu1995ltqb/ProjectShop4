import React from 'react';
import { NavLink } from 'react-router-dom';

class Footer extends React.Component{
    render(){
        return(
            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-2">
                                <div className="companyinfo">
                                    <h2><span>e</span>-shopper</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor</p>
                                </div>
                            </div>
                            <div className="col-sm-7">
                                <div className="col-sm-3">
                                    <div className="video-gallery text-center">
                                        <div >
                                            <div className="iframe-img">
                                                <img src="../../images/home/iframe1.png" alt="" />
                                            </div>
                                            <div className="overlay-icon">
                                                <i className="fa fa-play-circle-o"></i>
                                            </div>
                                        </div>
                                        <p>Sản phẩm</p>
                                        
                                    </div>
                                </div>
                                
                                <div className="col-sm-3">
                                    <div className="video-gallery text-center">
                                        <div >
                                            <div className="iframe-img">
                                                <img src="../../images/home/iframe2.png" alt="" />
                                            </div>
                                            <div className="overlay-icon">
                                                <i className="fa fa-play-circle-o"></i>
                                            </div>
                                        </div>
                                        <p>Sản phẩm</p>
                                        
                                    </div>
                                </div>
                                
                                <div className="col-sm-3">
                                    <div className="video-gallery text-center">
                                        <div >
                                            <div className="iframe-img">
                                                <img src="../../images/home/iframe3.png" alt="" />
                                            </div>
                                            <div className="overlay-icon">
                                                <i className="fa fa-play-circle-o"></i>
                                            </div>
                                        </div>
                                        <p>Sản phẩm</p>
                                        
                                    </div>
                                </div>
                                
                                <div className="col-sm-3">
                                    <div className="video-gallery text-center">
                                        <div >
                                            <div className="iframe-img">
                                                <img src="../../images/home/iframe4.png" alt="" />
                                            </div>
                                            <div className="overlay-icon">
                                                <i className="fa fa-play-circle-o"></i>
                                            </div>
                                        </div>
                                        <p>Sản phẩm</p>
                            
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="address">
                                    <img src="../../images/home/map.png" alt="" />
                                    <p>Thành Phố Đà Nẵng, Việt Nam</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="footer-widget">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-2">
                                <div className="single-widget">
                                    <h2>Thông Tin</h2>
                                    <ul className="nav flex-column nav-stacked">
                                        <li className="nav-item"><NavLink to="#">Tài khoản của tôi</NavLink></li>
                                        <li><NavLink to="#">Sản phẩm yêu thích</NavLink></li>
                                        <li><NavLink to="#">Lịch sử mua hàng</NavLink></li>
                                        <li><NavLink to="#">Chính sách đổi trả</NavLink></li>
                                        <li><NavLink to="#">Góp ý kiến, khiếu nại</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="single-widget">
                                    <h2>Hỗ Trợ Dịch Vụ</h2>
                                    <ul className="nav flex-column nav-stacked">
                                        <li><NavLink to="#">Hệ thống cửa hàng</NavLink></li>
                                        <li><NavLink to="#">Hướng dẫn mua hàng</NavLink></li>
                                        <li><NavLink to="#">Hướng dẫn thanh toán</NavLink></li>
                                        <li><NavLink to="#">Tích điểm đổi quà</NavLink></li>
                                        <li><NavLink to="#">Câu hỏi thường gặp</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="single-widget">
                                    <h2>Chính Sách Ưu Đãi</h2>
                                    <ul className="nav flex-column nav-stacked">
                                        <li><NavLink to="#">Chính sách giao hàng</NavLink></li>
                                        <li><NavLink to="#">Chính sách đổi trả</NavLink></li>
                                        <li><NavLink to="#">Chính sách bảo hành</NavLink></li>
                                        <li><NavLink to="#">Giới thiệu sản phẩm mới</NavLink></li>
                                        <li><NavLink to="#">Chính sách trả góp</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="single-widget">
                                    <h2>Tin Tức</h2>
                                    <ul className="nav flex-column nav-stacked">
                                        <li><NavLink to="#">Tin mới</NavLink></li>
                                        <li><NavLink to="#">Khuyến mãi</NavLink></li>
                                        <li><NavLink to="#">Tuyển dụng</NavLink></li>
                                        <li><NavLink to="#">Download</NavLink></li>
                                        <li><NavLink to="#">Copyright</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="single-widget">
                                    <h2>Đăng Ký Nhận Thông Tin Từ Cửa Hàng</h2>
                                    <form action="#" className="searchform">
                                        
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Địa chỉ email của bạn" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                            <span className="input-group-btn">
                                                <button className="btn btn-outline-secondary" type="submit"><i className="fa fa-arrow-circle-o-right"></i></button>
                                            </span>
                                        </div>
        
                                        <p>Bạn sẽ luôn được cập nhập các sản phẩm mới và tin khuyến mãi sớm nhất</p>
                                    </form>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <p className="pull-left">Thiết kế bởi FE08: Nguyễn Trung Hiếu và Bùi Xuân Quý </p>
                            
                        </div>
                    </div>
                </div>
                
            </footer>
            
        )
    }
}

export default Footer;