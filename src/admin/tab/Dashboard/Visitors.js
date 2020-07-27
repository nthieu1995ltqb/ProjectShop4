import React from 'react';
import {Line} from 'react-chartjs-2';

class Visitors extends React.Component{
	constructor(){
		super();
		this.state = {
			data: {
				labels: ["18th","20th","22th","24th","26th","28th","30th"],
				datasets: [
					{
						label: "T12",
						backgroundColor: "rgba(0, 0, 0, 0.1)",
						data: [35, 15, 10, 23, 42, 18, 19],
						fill: true
					},
					{
						label: "T11",
						backgroundColor: "#96dc4a",
						data: [21, 17, 34, 12, 22, 29, 38]
					}
				]
			}
		}
	}	
    render(){
        return(
            <div>
            	<Line
	    			options = {{
						responsive: true,
    					borderWidth: 10					
    				}}
    				data = {this.state.data}
            	/>
            </div>
        );
    }
}    

export default Visitors;