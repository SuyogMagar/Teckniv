import React from 'react';
import { Navigate } from 'react-router-dom';

/**
 * ProtectedRoute - restricts access to a route based on user role.
 * @param {ReactNode} children - The component to render if access is allowed.
 * @param {string[]} allowedRoles - Array of allowed roles (default: ['admin'])
 */
const ProtectedRoute = ({ children, allowedRoles = ['admin'] }) => {
  const user = (() => {
    try {
      return JSON.parse(localStorage.getItem('tk_user'));
    } catch {
      return null;
    }
  })();

  if (!user || !allowedRoles.includes(user.role)) {
    // Redirect to home or login if not authorized
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute; 