import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
//import { Carousel, Modal,Button, Panel,Image,Row,Col } from 'react-bootstrap';


import routes from './routes';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import {connect} from 'react-redux';
import * as action from './actions/actions';
import axios from 'axios';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
    <Route {...rest} render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )} /> )
  

class App extends React.Component {

    componentDidMount(){
        axios({
            method: 'GET',
            url: 'http://localhost:3000/products?_page=1&_limit=9',
            data: null
        }).then(res =>{
            this.props.listProducts(res.data);  
            //console.log(res.data)   
        });
    }

    render(){
        return (
            // <BrowserRouter>
            //     <div className="">
            //         <Header />
            //         {this.showContentMenu(routes)}
            //         <Footer />
            //     </div>
            // </BrowserRouter>

            <BrowserRouter>
                <div className="">
                    {this.showContentMenu(routes)}
                </div>
            </BrowserRouter>
        );
    }

    showContentMenu = (routes) => {
        var result = null;
        if(routes.length > 0){
            result = routes.map((route, index) => {
                return(
                <AppRoute 
                    key={index} 
                    path={route.path}
                    exact={route.exact}
                    layout={route.layout}
                    component={route.main}
                />
                )
            } )
        }
    return <Switch>{result}</Switch>;
    }

}

const mapDispatchToProps = (dispatch, props)=>{
    return{
        listProducts: (products)=>{
            dispatch(action.fetchProduct(products));
        }
    }
}

//export default App;
export default connect(null, mapDispatchToProps)(App);