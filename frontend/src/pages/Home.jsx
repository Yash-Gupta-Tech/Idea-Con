import { Link } from 'react-router-dom';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="container" style={{ paddingBottom: '60px' }}>
      <div className="hero flex items-center justify-between" style={{ minHeight: '80vh', position: 'relative' }}>

        {/* Left Side Content */}
        <div className="hero-content animate-slide-up" style={{ flex: '1', paddingRight: '40px', maxWidth: '600px', zIndex: 1 }}>
          <p style={{
            color: 'var(--primary)',
            fontWeight: '700',
            letterSpacing: '1px',
            fontSize: '0.85rem',
            marginBottom: '20px',
            textTransform: 'uppercase'
          }}>
            CONNECT • COLLABORATE • CREATE
          </p>

          <h1 style={{
            fontSize: '4.5rem',
            lineHeight: '1.1',
            fontWeight: '800',
            color: '#1F2937',
            marginBottom: '24px'
          }}>
            Great ideas.<br />
            <span style={{ color: 'var(--primary)' }}>Stronger together.</span>
          </h1>

          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-muted)',
            lineHeight: '1.6',
            marginBottom: '40px',
            maxWidth: '480px'
          }}>
            Find your team. Build your vision.<br />
            Connecting founders with technical partners<br />
            to turn ideas into impact.
          </p>

          <div className="flex gap-4 items-center flex-wrap">
            <Link to="/ideas">
              <button className="btn-primary flex items-center gap-2" style={{ padding: '16px 32px', fontSize: '1rem' }}>
                Explore Ideas <ArrowRight size={20} />
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="hero-image animate-fade-in" style={{ flex: '1', display: 'flex', justifyContent: 'flex-end', position: 'relative', zIndex: 0 }}>
          {/* Abstract background shape */}
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(124, 58, 237, 0.05))',
            borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
            zIndex: -1,
            top: '5%',
            right: '-10%',
            filter: 'blur(20px)'
          }}></div>
          <img
            src="/assets/Side-Cherector.png"
            alt="Hero Character"
            style={{
              maxWidth: '120%',
              height: 'auto',
              objectFit: 'contain',
              marginRight: '-10%',
              maxHeight: '600px',
              position: 'relative',
              left: '30px',
              top: '-35px'
            }}
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-container animate-slide-up" style={{ animationDelay: '0.2s', marginTop: '-20px' }}>
        <div className="glass-card flex justify-between" style={{ padding: '32px 48px', borderRadius: '24px' }}>

          <div className="stat-item flex-col items-center" style={{ flex: 1, textAlign: 'center', borderRight: '1px solid #E5E7EB' }}>
            <h3 style={{ fontSize: '2rem', color: 'var(--primary)', fontWeight: '800', marginBottom: '4px' }}>0</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>Ideas Posted</p>
          </div>

          <div className="stat-item flex-col items-center" style={{ flex: 1, textAlign: 'center', borderRight: '1px solid #E5E7EB' }}>
            <h3 style={{ fontSize: '2rem', color: 'var(--primary)', fontWeight: '800', marginBottom: '4px' }}>0</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>Active Members</p>
          </div>

          <div className="stat-item flex-col items-center" style={{ flex: 1, textAlign: 'center', borderRight: '1px solid #E5E7EB' }}>
            <h3 style={{ fontSize: '2rem', color: 'var(--primary)', fontWeight: '800', marginBottom: '4px' }}>0</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>Teams Formed</p>
          </div>

          <div className="stat-item flex-col items-center" style={{ flex: 1, textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', color: 'var(--primary)', fontWeight: '800', marginBottom: '4px' }}>India</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>Current-Place</p>
          </div>

        </div>
      </div>
    </div>
  );
}
