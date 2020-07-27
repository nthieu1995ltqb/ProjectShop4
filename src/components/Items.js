import React from 'react';
// import Item from './Item';
// import axios from 'axios';
// import {connect} from 'react-redux';
// import * as action from './../actions/actions';

class Items extends React.Component{


    render(){  
  
        return(
            <div className="col-sm-9 padding-right">
                <div className="features_items">
                    <h2 className="title text-center">sản phẩm nổi bật</h2>
                    <div className="row">
                        {/* {showProducts} */}
                        {this.props.children}
                    </div>
                    
                </div>

                <div className="recommended_items" >
                    <h2 className="title text-center">Sản phẩm khuyến mãi</h2>
                    <div id="recommended-item-carousel" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="row">
                                {/* {showProducts} */}
                                {this.props.children}
                            </div>    
                        </div>
                        
                    </div>
                </div>
            </div>
            )
        }
    }


export default Items;
// export default connect(mapStateToProps, mapDispatchToProps)(Items);