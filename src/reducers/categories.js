const defaultState = {
		categories_men: [],
		categories_women: []
}

const categories=(state=defaultState, action)=>{
	//console.log(action.categories_men)
    switch(action.type){
		case "FETCH_CATEGORIES_MEN":
			state.categories_men = action.categories_men
            return {...state}   
		case "FETCH_CATEGORIES_WOMEN":
			var {categories_women} = action;
			var {categories_men} = state;
            state = {
            	categories_men: categories_men,
            	categories_women: categories_women
            }
            return {...state}             
        default:
            return {...state};
    }
}

export default categories;