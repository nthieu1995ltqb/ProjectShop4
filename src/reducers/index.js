import {combineReducers} from 'redux';
import products from './products';
import user from './user';
import cartProduct from './cartProduct';
import checkUser from './checkUser'
import categories from './categories';
import admin from './admin'

const appReducers = combineReducers({
	products,
	user,
	cartProduct,
	checkUser,
	categories,
	admin
});

export default appReducers;