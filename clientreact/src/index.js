import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signin from './pages/Signin';
import Contact from './pages/Contact';
import Dashboard from './components/Dashboard';
import ManageWhatsapp from './components/ManageWhatsapp';


const appRouting = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        { path: '/', element: <Home/> },
        { path: '/login', element: <Login/> },
        { path: '/signin', element: <Signin/> },
        { path: '/contact', element: <Contact/> },
        { path: '/user/dashboard', element: <Dashboard/> },
        { path: '/user/device_settings', element: <ManageWhatsapp/> },
      ]
    }
  ])
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<RouterProvider router={appRouting} />);