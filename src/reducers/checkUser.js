
var initialState = {
    loggingIn: false
}

//var initialState = []
// var data = JSON.parse(sessionStorage.getItem('TOKEN'));
// var initialState = data ? data : [];


const checkUser = (state = initialState, action) => {
    var {userLogin} = action
  
    switch(action.type){
        case 'CHECK_USER':
            
            // console.log("ok")
            //console.log(state)
            // state = sessionStorage.setItem('TOKEN', JSON.stringify(state));
            sessionStorage.setItem('TOKEN', JSON.stringify(userLogin))
            
           // return [...state];
            
            return {
                loggingIn: true,
            };
        case 'LOGOUT_USER':
        
            //console.log("abc")
            
            sessionStorage.removeItem('TOKEN', JSON.stringify(userLogin));
            //return [...state];
            
            return {
                loggingIn: false,
            };

        // default: 
        // return [...state];
        default:
            //return [...state];
            
            return state
    }
}



export default checkUser; 