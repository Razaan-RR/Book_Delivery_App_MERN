import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Sidebar() {
  const { user } = useAuth();

  return (
    <aside className="w-64 bg-white border-r dark:bg-gray-800 dark:border-gray-700 min-h-screen p-4">
      <h2 className="text-lg font-semibold mb-6">Dashboard</h2>

      <nav className="space-y-2">
        <NavLink to="/dashboard" end className={({isActive})=> isActive ? 'font-bold' : ''}>Overview</NavLink>

        <div className="mt-4">
          <h3 className="text-sm text-gray-500">User</h3>
          <NavLink to="/dashboard/my-orders" className={({isActive})=> isActive ? 'font-semibold' : ''}>My Orders</NavLink>
          <NavLink to="/dashboard/my-profile" className={({isActive})=> isActive ? 'font-semibold' : ''}>My Profile</NavLink>
          <NavLink to="/dashboard/invoices" className={({isActive})=> isActive ? 'font-semibold' : ''}>Invoices</NavLink>
        </div>

        {user?.role === 'librarian' && (
          <div className="mt-4">
            <h3 className="text-sm text-gray-500">Librarian</h3>
            <NavLink to="/dashboard/add-book">Add Book</NavLink>
            <NavLink to="/dashboard/my-books">My Books</NavLink>
            <NavLink to="/dashboard/orders">Orders</NavLink>
          </div>
        )}

        {user?.role === 'admin' && (
          <div className="mt-4">
            <h3 className="text-sm text-gray-500">Admin</h3>
            <NavLink to="/dashboard/all-users">All Users</NavLink>
            <NavLink to="/dashboard/manage-books">Manage Books</NavLink>
          </div>
        )}
      </nav>
    </aside>
  );
}
