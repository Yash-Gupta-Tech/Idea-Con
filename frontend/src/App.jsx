import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Home from './pages/Home';
import Ideas from './pages/Ideas';
import Contact from './pages/Contact';
import Message from './pages/Message';
import './index.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  return (
    <Router>
      <div className="app">
        <nav className="navbar flex justify-between items-center container" style={{ padding: '24px 16px', position: 'relative' }}>
          <Link to="/" className="logo flex items-center gap-2" onClick={closeMenu} style={{ zIndex: 100 }}>
            <img src="/assets/logo.png" alt="Idea-Connect Logo" style={{ height: '40px', width: 'auto', borderRadius: '50%' }} />
            <span style={{ fontWeight: '700', fontSize: '1.2rem', color: 'var(--text-dark)' }}>Idea-Connect</span>
          </Link>

          <button 
            className="mobile-menu-btn" 
            onClick={toggleMenu} 
            style={{ 
              display: 'none', 
              background: 'transparent', 
              color: 'var(--text-dark)', 
              zIndex: 100, 
              padding: '8px' 
            }}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`} style={{ display: 'flex', gap: '24px', fontWeight: '500' }}>
            <NavLink to="/" onClick={closeMenu} className="nav-item">Home</NavLink>
            <NavLink to="/ideas" onClick={closeMenu} className="nav-item">Ideas</NavLink>
            <NavLink to="/contact" onClick={closeMenu} className="nav-item">Contact</NavLink>
            <NavLink to="/message" onClick={closeMenu} className="nav-item">Message</NavLink>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ideas" element={<Ideas />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/message" element={<Message />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
