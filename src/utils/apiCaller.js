import axios from 'axios';

export default function callApi(endpoint, method='GET', body){
	return axios({
			method: method,
			url: `http://localhost:3000/${endpoint}`,
			data: body
		}).catch(error =>{
		});
}