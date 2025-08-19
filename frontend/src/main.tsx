import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './styles.css';
import { AppLayout } from './ui/AppLayout';
import { Home } from './ui/Home';
import { Pricing } from './ui/Pricing';
import { Dashboard } from './ui/Dashboard';
import { SignIn } from './ui/SignIn';
import { SignUp } from './ui/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'pricing', element: <Pricing /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'signin', element: <SignIn /> },
      { path: 'signup', element: <SignUp /> }
    ]
  }
]);

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

