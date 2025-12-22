import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Agenda } from './pages/Agenda';
import { Tickets } from './pages/Tickets';
import { Partners } from './pages/Partners';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="agenda" element={<Agenda />} />
          <Route path="partners" element={<Partners />} />
          <Route path="tickets" element={<Tickets />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
