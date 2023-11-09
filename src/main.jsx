import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomeView from './components/Home/HomeView.jsx';
import BlogView from './components/Blog/BlogView.jsx';
import ComponentsView from './components/Components/ComponentsView.jsx';
import AboutView from './components/About/AboutView.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeView/>,
  },
  {
    path: "/components",
    element: <ComponentsView/>,
  },
  {
    path: "/about",
    element: <AboutView/>,
  },
  {
    path: "/blog",
    element: <BlogView/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
