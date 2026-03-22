import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Work from './pages/Work';
import CaseStudy from './pages/CaseStudy';
import About from './pages/About';

function App() {
  return (
    <Router>
      <ScrollToTop />

      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:id" element={<CaseStudy />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;