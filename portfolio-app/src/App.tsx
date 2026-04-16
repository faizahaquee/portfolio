import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study/:id" element={<CaseStudy />} />
      </Routes>
      <BackToTop />
    </>
  );
}

export default App;