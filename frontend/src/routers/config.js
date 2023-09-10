
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import AskTutor from '../pages/AskTutor/Index';
import HomePage  from '../pages/Home/Index';
import Login from '../pages/Login/Index';
import Register from '../pages/Register/Index';

export const routes = [
  // {
  //   path: '/',
  //   component: <PrivateRoute component={HomePage  }/>,
  // },
  {
    path: '/',
    component: <HomePage />,
  },
  {
    path: '/ask',
    component: <AskTutor />,
  },
  {
    path: '/login',
    component: <Login />,
  },
  {
    path: '/register',
    component: <Register />,
  },
];
