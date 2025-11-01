import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import AdminPage from './pages/AdminPage/AdminPage.jsx';
import ChangePasswordPage from './pages/ChangePasswordPage/ChangePasswordPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/admin',
    element: <AdminPage />,
  },
  {
    path: '/change-password',
    element: <ChangePasswordPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
