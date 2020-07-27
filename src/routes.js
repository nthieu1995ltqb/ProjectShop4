import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFound from './pages/NotFound/NotFound';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Header from './components/Header'
import Footer from './components/Footer'

import Checkout from './pages/Checkout/Checkout';
import News from './pages/News/News';
import Products from './pages/Products/Products';
import ProductFilter from './pages/Products/ProductFilter';
import Signup from './pages/Signup/Signup'
import ProductDetails from './pages/ProductDetails/ProductDetails';
import BlogSingle from './pages/BlogSingle/BlogSingle';
import CartContainer from './pages/Cart/CartContainer';

//Admin Layout
import AdminMain from './admin/AdminMain';
import HeaderAdmin from './admin/HeaderAdmin';
// import Aside from './admin/Aside';
import LoginAdmin from './admin/LoginAdmin'




const UserLayout = props => (
  <div>
    <Header/>
    {props.children}
    <Footer/>
  </div>
)

const AdminLayout = props => (
  <div>
    <HeaderAdmin/>
    {/* <Aside/> */}
    {props.children}
  </div>
)  

const routes = [
    {
        path: '/',
        exact: true,
        layout: UserLayout,
        main: ({history}) => <HomePage history={history} />
    },
    {
        path: '/contact',
        exact: false,
        layout: UserLayout,
        main: () => <Contact />
    },
    {
        path: '/login',
        exact: false,
        layout: UserLayout,
        main: ({history}) => <Login history={history} />
    },
    {
        path: '/cart',
        exact: false,
        layout: UserLayout,
        main: () => <CartContainer />
    },
    {
        path: '/news',
        exact: false,
        layout: UserLayout,
        main: () => <News />
    },
    {
        path: '/checkout',
        exact: false,
        layout: UserLayout,
        main: ({history}) => <Checkout history={history} />
    },
    {
        path: '/products/:slug',
        exact: false,
        layout: UserLayout,
        main: ({match}) => <ProductFilter match={match}/>
    },
        {
        path: '/products',
        exact: false,
        layout: UserLayout,
        main: ({history}) => <Products history={history} />
    },
    {
        path: '/signup',
        exact: false,
        layout: UserLayout,
        main: ({history}) => <Signup history={history} />
    },
    {
        path: '/product-details/:slug/:id',
        exact: false,
        layout: UserLayout,
        main: ({match}) => <ProductDetails match={match}/>
    },
    {
        path: '/blog-single/:id',
        exact: false,
        layout: UserLayout,
        main: ({match}) => <BlogSingle match={match} />
    },
    {
        path: '/admin',
        exact: false,
        layout: AdminLayout,
        main: ({history}) => <AdminMain history={history} />
    },
    {
        path: '/login-admin',
        exact: false,
        layout: AdminLayout,
        main: ({history}) => <LoginAdmin history={history} />
    },
    {
        path: '/',
        exact: false,
        layout: UserLayout,
        main: () => <NotFound />
    }
]

export default routes;