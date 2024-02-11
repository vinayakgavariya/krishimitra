import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css'
import App from './App';
import './index.css'
import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom"
import Landing from './pages/Landing';
import Experts from './pages/Experts';
import Form from './components/Form';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path:"/experts",
    element:<Experts/>
  },{
    path:'/form',
    element:<Form/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
  <RouterProvider router={router}/>
 </React.StrictMode>
);
