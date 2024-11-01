import React from 'react';
import Home from '../screens/HomePage';
import About from '../screens/about';
import Product from '../screens/Product';
import AppParent from '../components/nav/AppParent';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BestSellers from '../components/BestSellers/bestSellers';
import Contact from '../screens/Contact';
import ProductDetail from '../components/DetailPage';
import Toast from '../components/Toast'
import Modal from '../components/Modal';


function Routes() {
    const router = createBrowserRouter(
        [{
            path: '/',
            element: <AppParent />,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/product",
                    element: <Product />
                }, {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/bestsellers",
                    element: <BestSellers />
                },
                {
                    path: "/contact",
                    element: <Contact />
                },
                {
                    path: "/ProductDetail/:id",
                    element: <ProductDetail />
                }

            ]
        }]
    )
    return (
        <>
        <RouterProvider router={router} />
        </>
    )
}

export default Routes