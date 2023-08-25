import ChatPage from '../pages/Home/Index';
import Login from '../pages/Login/Index';
import Register from '../pages/Register/Index';

export const routes = [
  {
    path: '/',
    component: <ChatPage />,
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
