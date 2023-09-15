import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Thematic from './pages/Thematic';
import HomePage from './pages/Home/Index.js';
import AskTutor from './pages/AskTutor/Index';
import AuthState from './context/AuthenContext/AuthState';
function App() {
  return (
    <BrowserRouter>
      <AuthState>
        <div className='bg-slate-200'>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/hoi-gia-su' element={<AskTutor />} />
            <Route path='/chuyen-de' element={<Thematic />} />
          </Routes>
          <Footer />
        </div>
      </AuthState>
    </BrowserRouter>
  );
}

export default App;
