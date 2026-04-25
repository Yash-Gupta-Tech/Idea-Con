import React from 'react';
import { Quote, Heart, Users, Lightbulb, Rocket, Handshake, Globe2 } from 'lucide-react';

const Message = () => {
  return (
    <div className="message-page container animate-fade-in">
      
      {/* Hero Section */}
      <div className="message-hero">
        
        {/* Left Content */}
        <div className="message-hero-left">
          <p style={{ color: 'var(--primary-dark)', fontWeight: '700', letterSpacing: '1px', fontSize: '0.9rem', textTransform: 'uppercase' }}>
            About Idea-Connect
          </p>
          <h1>
            Built for Dreamers.<br/>
            <span style={{ color: 'var(--primary-light)' }}>Made for Doers.</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.6', maxWidth: '600px' }}>
            Idea-Connect was created to help people like you — students, dreamers, and future founders — find the right people, the right ideas, and the right direction.
          </p>
          
          {/* Features Row */}
          <div className="flex flex-wrap gap-6 mt-4 message-features-row">
            <div className="flex items-center gap-4">
              <div style={{ background: 'rgba(124, 58, 237, 0.1)', padding: '16px', borderRadius: '16px', color: 'var(--primary)' }}>
                <Users size={24} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <h4 style={{ fontWeight: '700', color: 'var(--text-dark)', fontSize: '1rem' }}>Connect</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '140px' }}>Find the right people.</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div style={{ background: 'rgba(124, 58, 237, 0.1)', padding: '16px', borderRadius: '16px', color: 'var(--primary)' }}>
                <Lightbulb size={24} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <h4 style={{ fontWeight: '700', color: 'var(--text-dark)', fontSize: '1rem' }}>Collaborate</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '140px' }}>Share ideas and work together.</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div style={{ background: 'rgba(124, 58, 237, 0.1)', padding: '16px', borderRadius: '16px', color: 'var(--primary)' }}>
                <Rocket size={24} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <h4 style={{ fontWeight: '700', color: 'var(--text-dark)', fontSize: '1rem' }}>Create Impact</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '140px' }}>Build solutions that matter.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Character & Floating Card */}
        <div className="message-hero-right">
          
          {/* Floating Background Glow */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: '120%', height: '120%', background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, rgba(255,255,255,0) 70%)',
            zIndex: 1, borderRadius: '50%'
          }}></div>

          <img 
            src="/assets/message.png" 
            alt="Founder Character" 
            style={{ width: '100%', maxWidth: '450px', objectFit: 'contain', zIndex: 2, position: 'relative', right:112, bottom: 56, }} 
          />
          
          {/* Floating Founder Card */}
          <div className="glass-card message-founder-card" style={{ width:309 , padding:12, height:160 }}>
            <p style={{ color: 'var(--primary-light)', fontWeight: '600', fontSize: '0.9rem', marginBottom: '5px' }}>Founder</p>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '9px' }}>Yash Gupta</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.80rem', lineHeight: '1.4', marginBottom: '11px' }}>
              I believe that a single idea can change a life, and a strong team can change the world.
            </p>
            <p style={{ color: 'var(--primary-dark)', fontWeight: '700', fontSize: '1.1rem' }}>— Yash</p>
          </div>
        </div>
      </div>

      {/* Message For You Box */}
      <div className="glass-card message-box">
        
        <div className="message-box-content">
          {/* Quote Icon */}
          <div style={{ flexShrink: 0 }}>
            <Quote size={64} style={{ color: 'var(--primary-light)', transform: 'rotate(180deg)' }} />
          </div>

          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              A Message for You <span style={{ color: '#EF4444' }}>❤️</span>
            </h2>

            <div className="message-text-columns">
              {/* Left Text */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>
                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                  If you're here, it means you have something inside you —<br/>
                  a dream, a spark, a hunger to create something of your own.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <p style={{ color: 'var(--primary-dark)', fontWeight: '600', fontSize: '1rem' }}>Maybe you have no idea right now.</p>
                  <p style={{ color: 'var(--primary-dark)', fontWeight: '600', fontSize: '1rem' }}>Maybe you don't have a team.</p>
                  <p style={{ color: 'var(--primary-dark)', fontWeight: '600', fontSize: '1rem' }}>Maybe you even doubt yourself sometimes.</p>
                </div>
                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                  That's okay. Every great journey begins with confusion.
                </p>
                <p style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-dark)' }}>
                  You don't need to have it all figured out.
                </p>
                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                  You just need to take the first step — and we're here to walk<br/>
                  that path with you.
                </p>
              </div>

              {/* Right Text */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative', textAlign: 'left' }}>
                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                  This platform is for students, builders, thinkers, and dreamers<br/>
                  who want to create something meaningful.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <p style={{ color: 'var(--primary-dark)', fontWeight: '600', fontSize: '1rem' }}>No matter where you are right now,</p>
                  <p style={{ color: 'var(--primary-dark)', fontWeight: '600', fontSize: '1rem' }}>your future self will thank you for not giving up today.</p>
                </div>
                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                  Share your ideas. Find your people. Build your dreams.
                </p>
                <p style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--primary-dark)' }}>
                  You have the potential. We just help you connect it.
                </p>
                
                <div style={{ position: 'relative', marginTop: '32px', marginBottom: '20px' }}>
                  <p style={{ fontSize: '2.2rem', fontFamily: "'Caveat', cursive", color: 'var(--primary-light)', transform: 'rotate(-2deg)' }}>
                    Keep building. Keep believing. Never stop.
                  </p>
                  <div style={{ position: 'absolute', bottom: '4px', left: '0', width: '300px', height: '2px', background: 'var(--primary-light)', transform: 'rotate(-2deg)', opacity: '0.5',  }}></div>
                </div>

                <div style={{ position: 'absolute', bottom: '-10px', right: '0' }}>
                  <Heart size={40} style={{ color: 'red', strokeWidth: 1.5 }} fill="red" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Stats Section */}
      <div className="glass-card message-stats-container">
        
        <div className="message-stats-mission">
          <div className="flex items-center gap-6">
            <div style={{ color: 'var(--primary-light)' }}>
              <Rocket size={40} />
            </div>
            <div style={{ textAlign: 'left' }}>
              <h3 style={{ fontWeight: '800', fontSize: '1.2rem', color: 'var(--text-dark)' }}>Our Mission</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.4', maxWidth: '200px', marginTop: '4px' }}>
                To connect dreamers and doers to build the future together.
              </p>
            </div>
          </div>
        </div>

        <div className="message-stats-grid">
          
          <div className="message-stat-item">
            <div style={{ color: 'var(--primary-light)' }}>
              <Users size={32} />
            </div>
            <div style={{ textAlign: 'left' }}>
              <h3 style={{ fontWeight: '800', fontSize: '1.4rem', color: 'var(--text-dark)' }}>0+</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Ideas Shared</p>
            </div>
          </div>

          <div className="message-stat-item">
            <div style={{ color: 'var(--primary-light)' }}>
              <Users size={32} />
            </div>
            <div style={{ textAlign: 'left' }}>
              <h3 style={{ fontWeight: '800', fontSize: '1.4rem', color: 'var(--text-dark)' }}>0+</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Active Members</p>
            </div>
          </div>

          <div className="message-stat-item">
            <div style={{ color: 'var(--primary-light)' }}>
              <Handshake size={32} />
            </div>
            <div style={{ textAlign: 'left' }}>
              <h3 style={{ fontWeight: '800', fontSize: '1.4rem', color: 'var(--text-dark)' }}>0+</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Collaborations</p>
            </div>
          </div>

          <div className="message-stat-item">
            <div style={{ color: 'var(--primary-light)' }}>
              <Globe2 size={32} />
            </div>
            <div style={{ textAlign: 'left' }}>
              <h3 style={{ fontWeight: '800', fontSize: '1.4rem', color: 'var(--text-dark)' }}>0</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Countries</p>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  );
};

export default Message;

