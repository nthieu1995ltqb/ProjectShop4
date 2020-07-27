const defaultState = [];

const admin=(state=defaultState, action)=>{
	
    switch(action.type){
		case 'ADMIN_DATA':
            state = action.admins
                return [...state]
        // case "LOGIN_SUCCESS":
        //     console.log('login ok');
        //     return {
        //         ...state,
        //         userError: null
        //     }
        default:
            return [...state];
    }
}

export default admin;