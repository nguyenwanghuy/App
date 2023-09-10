import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Thematic from './pages/Thematic';
import CardItem from './components/CardItem';

function App() {
  return (
    <div className='bg-slate-200'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/chuyen-de' element={<Thematic />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
