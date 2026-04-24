import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Ideas from './pages/Ideas';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar flex justify-between items-center container" style={{ padding: '24px 16px', flexWrap: 'wrap' }}>
          <Link to="/" className="logo flex items-center gap-2">
            <img src="/assets/logo.png" alt="Idea-Connect Logo" style={{ height: '40px', width: 'auto', borderRadius: '50%' }} />
            <span style={{ fontWeight: '700', fontSize: '1.2rem', color: 'var(--text-dark)' }}>Idea-Connect</span>
          </Link>

          <div className="nav-links flex gap-6" style={{ fontWeight: '500', color: 'var(--text-muted)' }}>
            <Link to="/" style={{ color: 'var(--primary)', fontWeight: '600' }}>Home</Link>
            <Link to="/ideas" style={{ transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--primary)'} onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>Ideas</Link>
            <Link to="#" style={{ transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--primary)'} onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>Contact</Link>
            <Link to="#" style={{ transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--primary)'} onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>About</Link>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ideas" element={<Ideas />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
