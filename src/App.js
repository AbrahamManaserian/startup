import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import { Grid, Typography } from '@mui/material';
import Root from './components/Root';
import PreferredPage from './pages/PreferredPage';
import BasketPage from './pages/BasketPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import BrandsPage from './pages/BrandsPage';
import ShopsPage from './pages/ShopsPage';
import ArmenianShoesPage from './pages/ArmenianShoesPage';
import SalesPage from './pages/SalesPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'brands',
        element: <BrandsPage />,
      },
      {
        path: 'shops',
        element: <ShopsPage />,
      },
      {
        path: 'sales',
        element: <SalesPage />,
      },
      {
        path: '/help',
        element: <SalesPage />,
      },
      {
        path: '/care',
        element: <SalesPage />,
      },
      {
        path: '/contacts',
        element: <SalesPage />,
      },
      {
        path: 'slippers',
        element: <SalesPage />,
      },
      {
        path: '/inserts',
        element: <SalesPage />,
      },
      {
        path: '/winter',
        element: <SalesPage />,
      },
      {
        path: '/autumn',
        element: <SalesPage />,
      },
      {
        path: '/spring',
        element: <SalesPage />,
      },
      {
        path: '/summer',
        element: <SalesPage />,
      },
      {
        path: 'armenian',
        element: <ArmenianShoesPage />,
      },
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: '/preferred',
        element: <PreferredPage />,
      },
      {
        path: '/basket',
        element: <BasketPage />,
      },
      {
        path: '/signin',
        element: <SignInPage />,
      },
      {
        path: '/signup',
        element: <SignUpPage />,
      },
    ],
  },
  // {
  //   path: '/about',
  //   element: <AboutPage />,
  // },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
