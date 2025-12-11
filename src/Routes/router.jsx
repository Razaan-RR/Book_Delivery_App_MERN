import { createBrowserRouter } from 'react-router'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/HomePage/Home'
import AuthLayout from '../layouts/AuthLayout'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'
import DashboardHome from "../pages/Dashboard/DashboardHome";

export let router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: '/',
    Component: AuthLayout,
    children: [
      {
        path: 'login',
        Component: Login,
      },
      {
        path: 'register',
        Component: Register,
      },
    ],
  },
])
