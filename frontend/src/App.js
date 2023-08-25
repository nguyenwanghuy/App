import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './routers/config';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => {
          const { path, component } = route;
          return <Route key={index} path={path} element={component} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
