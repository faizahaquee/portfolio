import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';
import ClientPage from './pages/ClientPage';
import Resume from './pages/Resume';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study/:id" element={<CaseStudy />} />
        <Route path="/client/:id" element={<ClientPage />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <BackToTop />
    </>
  );
}

export default App;