import React from 'react';
import {Bar} from 'react-chartjs-2';

class SalesTotal extends React.Component{
	constructor(){
		super();
		this.state = {
			data: {
				labels: ["T1","T2","T3","T4","T5","T6","T7","T8","T9","T10","T11","T12"],
				datasets: [
					{
						label: "2018",
						backgroundColor: "rgba(0, 0, 0, 0.1)",
						data: [3677, 2950, 5488, 3495, 4257, 2588, 3128, 5176, 6332, 4255, 3868, 6790],
						fill: true
					},
					{
						label: "2019",
						backgroundColor: "#708faf",
						data: [4121, 5638, 7749, 5221, 3596, 4823, 3560, 3996, 5385, 6794, 4538, 7973]
					}
				]
			}
		}
	}	
    render(){
        return(
            <div>
            	<Bar
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

export default SalesTotal;