import React from 'react';
import { NavLink } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div style={{"color":"red", "fontSize":"18px"}}>{text}</div>;


class Contact extends React.Component{
    static defaultProps = {
        center: {
          lat: 16.0745992,
          lng: 108.2185226
        },
        zoom: 15
      };

    render(){
        return(
            <div id="contact-page" className="container">
                <div className="bg">
                    <div className="row">    		
                        <div className="col-sm-12">    			   			
                            <h2 className="title text-center">Liên Hệ <strong>Chúng Tôi</strong></h2>    			    				    				
                            <div id="map">
                                <div style={{ height: '60vh', width: '100%', margin: "30px 0" }}>
                                    <GoogleMapReact
                                      bootstrapURLKeys={{ key: "AIzaSyAObW_IM0IyCFXk2JJnt6rR1Vle6BB4Nas" }}
                                      defaultCenter={this.props.center}
                                      defaultZoom={this.props.zoom}>
                                      <AnyReactComponent
                                        lat={16.0745992}
                                        lng={108.2185226}
                                        text="EShopper"
                                      />
                                    </GoogleMapReact>
                                </div>
                            </div>
                        </div>			 		
                    </div>    	
                    <div className="row">  	
                        <div className="col-sm-8">
                            <div className="contact-form">
                                <h2 className="title text-center">Liên Lạc</h2>
                                
                                <form id="main-contact-form" className="contact-form row" name="contact-form" method="post">
                                    <div className="form-group col-md-6">
                                        <input type="text" name="name" className="form-control" required="required" placeholder="Tên"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="email" name="email" className="form-control" required="required" placeholder="Email"/>
                                    </div>
                                    <div className="form-group col-md-12">
                                        <input type="text" name="subject" className="form-control" required="required" placeholder="Đối Tượng"/>
                                    </div>
                                    <div className="form-group col-md-12">
                                        <textarea name="message" id="message" required="required" className="form-control" rows="8" placeholder="Nội Dung"></textarea>
                                    </div>                        
                                    <div className="form-group col-md-12">
                                        <input type="submit" name="submit" className="btn btn-primary pull-right" value="Gửi"/>
                                    </div>
                                </form>
                            </div>
                        
                        </div>
                        <div className="col-sm-4">
                            <div className="contact-info">
                                <h2 className="title text-center">Thông Tin Liên Hệ</h2>
                                <address>
                                    <p>Công Ty E-Shopper</p>
                                    <p>Địa Chỉ: Đà Nẵng, Việt Nam</p>
                                    
                                    <p>Số Điện Thoại: +84 123 456 789</p>
                                    
                                    <p>Email: xxx@gmail.com</p>
                                </address>
                                <div className="social-networks">
                                    <h2 className="title text-center">Mạng Xã Hội</h2>
                                    <ul>
                                        <li>
                                            <NavLink to="#"><i className="fa fa-facebook"></i></NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="#"><i className="fa fa-twitter"></i></NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="#"><i className="fa fa-google-plus"></i></NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="#"><i className="fa fa-youtube"></i></NavLink>
                                        </li>
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

export default Contact;