import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { ItemDetails } from '../components/ItemDetails/ItemDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'details/:itemId',
        element: <ItemDetails />,
      },
    ],
  },
  {
    path: '/page/:page',
    element: <App />,
    children: [
      {
        path: 'details/:itemId',
        element: <ItemDetails />,
      },
    ],
  },
]);
