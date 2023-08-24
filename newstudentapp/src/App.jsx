import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Landing,} from './pages';
import Login from './pages/LoginStudent';
import LoginAdmin from './pages/LoginAdmin';
import LoginMentor from './pages/LoginMentor';
//import LoginMentor from './pages/LoginMentor';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/register',
    element: <Login />,
  },
  {
    path: '/admin',
    element: <LoginAdmin />,
  },
  {
    path: '/mentor',
    element: <LoginMentor />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;