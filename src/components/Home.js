import React from 'react';
import Slider from './Slider';
import Aside from './Aside';
import Items from './Items';

class Home extends React.Component{
    render(){
        console.log("tesst")
        return(
            <div>
                <Slider />
                <div className="container" >
                    <div className="row">
                        <Aside />
                        <Items />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;