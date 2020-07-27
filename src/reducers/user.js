const defaultState = [];

const user=(state=defaultState, action)=>{
	
    switch(action.type){
		case 'USER_DATA':
            state = action.users
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

export default user;