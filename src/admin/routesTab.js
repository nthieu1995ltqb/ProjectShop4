import React from 'react';
// import AdminMain from './AdminMain';
import Dashboard from './tab/Dashboard/Dashboard';
import Categories from './tab/Categories';
import Products from './tab/ProductsAdmin';
import Orders from './tab/Orders';
import Users from './tab/Users';


const routesTab = [ 
    {
        path: '/admin',
        exact: true,
        main: () => <Dashboard />
    },
    {
        path: '/admin/dashboard',
        exact: true,
        main: () => <Dashboard />
    },    
    {
        path: '/admin/products',
        exact: false,
        main: () => <Products />
    },
    {
        path: '/admin/categories',
        exact: false,
        main: () => <Categories />
    },
    {
        path: '/admin/users',
        exact: false,
        main: () => <Users />
    },
    {
        path: '/admin/ordes',
        exact: false,
        main: () => <Orders />
    }    
]

export default routesTab;