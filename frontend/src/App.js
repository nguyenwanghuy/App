import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './routers/config';
import AuthState from './context/AuthenContext/AuthState';

function App() {
  return (
    <BrowserRouter>
    <AuthState>
      
    <Routes>
        {routes.map((route, index) => {
          const { path, component } = route;
          return <Route key={index} path={path} element={component} />;
        })}
      </Routes>

    </AuthState>
    </BrowserRouter>
  );
}

export default App;
