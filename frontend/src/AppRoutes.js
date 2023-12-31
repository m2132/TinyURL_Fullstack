import React from 'react';
import Home from "./components/Home";
import Login from "./components/Login";
import TinyUrl from "./components/TinyUrl";
import TinyUrlTarget from "./components/TinyUrlTarget";
import Register from './components/Register';
import Chart from './components/chart.js'
import About from './components/About.js'
const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    // {
    //     path: '/public',
    //     element: <Public />
    // },
    // {
    //     path: '/private',
    //     element: <Private />
    // },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/link',
        element: <TinyUrl />
    },
    {
        path: '/Target',
        element: <TinyUrlTarget  />
    },
    {
        path: '/chart',
        element: <Chart/>
    },
    {
        path: '/about',
        element: <About/>
    },
];

export default AppRoutes;
