import { createBrowserRouter } from 'react-router'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/HomePage/Home'
import AuthLayout from '../layouts/AuthLayout'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'
import DashboardHome from '../pages/Dashboard/DashboardHome'
import DashboardLayout from '../layouts/DashboardLayout'
import RequireAuth from '../components/Dashboard/RequireAuth'
import MyOrders from '../pages/User/MyOrders'
import MyProfile from '../pages/User/MyProfile'
import Invoices from '../pages/User/Invoices'
import AddBook from '../pages/Librarian/AddBook'
import MyBooks from '../pages/Librarian/MyBooks'
import Orders from '../pages/Librarian/Orders'
import AllUsers from '../pages/Admin/AllUsers'
import ManageBooks from '../pages/Admin/ManageBooks'

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
  {
    path: '/dashboard',
    Component: DashboardLayout,
    children: [
      {
        index: true,
        Component: () => (
          <RequireAuth>
            <DashboardHome />
          </RequireAuth>
        ),
      },

      {
        path: 'my-orders',
        Component: () => (
          <RequireAuth>
            <MyOrders />
          </RequireAuth>
        ),
      },
      {
        path: 'my-profile',
        Component: () => (
          <RequireAuth>
            <MyProfile />
          </RequireAuth>
        ),
      },
      {
        path: 'invoices',
        Component: () => (
          <RequireAuth>
            <Invoices />
          </RequireAuth>
        ),
      },

      {
        path: 'add-book',
        Component: () => (
          <RequireAuth allowedRoles={['librarian', 'admin']}>
            <AddBook />
          </RequireAuth>
        ),
      },
      {
        path: 'my-books',
        Component: () => (
          <RequireAuth allowedRoles={['librarian', 'admin']}>
            <MyBooks />
          </RequireAuth>
        ),
      },
      {
        path: 'orders',
        Component: () => (
          <RequireAuth allowedRoles={['librarian', 'admin']}>
            <Orders />
          </RequireAuth>
        ),
      },

      {
        path: 'all-users',
        Component: () => (
          <RequireAuth allowedRoles={['admin']}>
            <AllUsers />
          </RequireAuth>
        ),
      },
      {
        path: 'manage-books',
        Component: () => (
          <RequireAuth allowedRoles={['admin']}>
            <ManageBooks />
          </RequireAuth>
        ),
      },
    ],
  },
])
