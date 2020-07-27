import React from 'react';
import {Pie} from 'react-chartjs-2';

class BrowserUsage extends React.Component{
	constructor(){
		super();
		this.state = {
			data: {
				labels: ["Chrom","FireFox","Opera","Safari","IE"],
				datasets: [
					{
						backgroundColor: ["#dc3545","#fd7e14","#6f42c1","#007bff","#28a745"],
						data: [526, 211, 89, 45, 15],
						cutoutPercentage: 50,
						rotation: -0.5 * Math.PI
					}
				]
			}
		}
	}	
    render(){
        return(
            <div>
            	<Pie
	    			options = {{
						responsive: true,
    					borderWidth: 10,
    					cutoutPercentage: 50		
    				}}
    				data = {this.state.data}
            	/>
            </div>
        );
    }
}    

export default BrowserUsage;