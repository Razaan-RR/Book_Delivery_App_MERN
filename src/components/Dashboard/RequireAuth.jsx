import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function RequireAuth({ children, allowedRoles = ['user','librarian','admin'] }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <div className="p-6">Loading...</div>;

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // role-based check
  if (!allowedRoles.includes(user.role)) {
    return <div className="p-6 text-red-500">Access denied.</div>;
  }

  return children;
}
