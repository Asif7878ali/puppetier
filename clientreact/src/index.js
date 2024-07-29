import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signin from './pages/Signin';


const appRouting = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/signin',
          element: <Signin/>
        },
      ]
    }
  ])
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<RouterProvider router={appRouting} />);