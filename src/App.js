import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import ScrollTop from './components/ScrollTop';
import Home from './pages/Home';
import useLenis from './hooks/useLenis';
import './App.css';

function App() {
  useLenis();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-night font-body text-paper antialiased">
      <Loader />
      <CustomCursor />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.45 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default App;
