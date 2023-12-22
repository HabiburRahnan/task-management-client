import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './page/Home/Home.jsx';
import Login from './page/Login/Login.jsx';
import Register from './page/Register/Register.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import About from './page/About/About.jsx';
import AllTask from './page/AllTask/AllTask.jsx';
import Dashboard from './Layout/Dashboard.jsx';
import AddTask from './page/Dashboard/AddTask/AddTask.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Benefit from './page/Benefit/Benefit.jsx';
import CompletedTask from './page/Dashboard/CompletedTask/CompletedTask.jsx';
import MyTask from './page/Dashboard/MyTask/MyTask.jsx';



const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/allTask',
        element:<AllTask></AllTask>
      },
      {
        path:'/benefit',
        element:<Benefit></Benefit>
      },
    ]
  },
  {
    path:"/dashboard",
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:"/dashboard/addTask",
        element:<AddTask></AddTask>

      },
      {
        path:"/dashboard/completed",
        element:<CompletedTask></CompletedTask>

      },
      {
        path:"/dashboard/myTask",
        element:<MyTask></MyTask>

      },
      {
        path:"/dashboard/allTask",
        element:<AllTask></AllTask>

      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <QueryClientProvider client={queryClient}>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </QueryClientProvider>
  </React.StrictMode>,
)
