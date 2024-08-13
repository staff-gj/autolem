import React from 'react';
import ReactDOM from 'react-dom/client';
import QuemSomos from './components/layout/Quemsomos';
import { Route, BrowserRouter } from "react-router-dom";
import Home from './components/layout/Home';
import Matricula from './components/layout/Matricula';
import Contato from './components/layout/Contato';
import Layout from './components/layout/Layout';

import {
  createBrowserRouter, RouterProvider
} from "react-router-dom";
import Home2 from './components/layout/Home2';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home2/>,
  },
  {
    path: "/quemsomos",
    element: <QuemSomos/>,
  },
  {
    path: "/matricula",
    element: <Matricula/>,
  },
  {
    path: "/contato",
    element: <Contato/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
