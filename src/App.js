import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/ProfileFn';
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';

const Instamart = lazy(() => import('./components/Instamart'));
// use of lazy loading
// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On Demand Loading
// Dynamic Import

const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet/>
            <Footer />
        </>
    );
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <Body/>
            },
            {
                path: '/about',
                element: <About/>,
                children: [
                    {
                        path: 'profile',
                        element: <Profile />
                    }
                ]
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantMenu/>
            },
            {
                path: '/instamart',
                element: (
                    <Suspense fallback={<h2>Loading...</h2>}>
                        <Instamart />
                    </Suspense>)
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);