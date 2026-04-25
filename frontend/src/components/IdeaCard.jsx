import { Mail, Phone, User } from 'lucide-react';
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

export default function IdeaCard({ idea }) {
  // Simple check to parse keywords if they are a comma-separated string
  const keywordsList = Array.isArray(idea.keywords) 
    ? idea.keywords 
    : (idea.keywords ? idea.keywords[0]?.split(',').map(k => k.trim()) : []);

  return (
    <div className="glass-card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', height: '100%', borderTop: '4px solid var(--primary)', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative background element */}
      <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%' }}></div>
      
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '12px', lineHeight: '1.3' }}>
          {idea.title}
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '16px', color: 'var(--text-muted)' }}>
          <User size={16} />
          <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>{idea.authorName || 'Anonymous'}</span>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6', display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {idea.details}
        </p>
      </div>

      <div style={{ marginBottom: '24px', flexGrow: 1 }}>
        <div style={{ marginBottom: '16px', background: '#F9FAFB', padding: '12px', borderRadius: '8px', border: '1px solid #F3F4F6' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Roles Needed</span>
          <p style={{ fontSize: '1rem', color: 'var(--primary)', fontWeight: '600', marginTop: '4px' }}>{idea.rolesNeeded}</p>
        </div>
        
        <div style={{ marginBottom: '16px' }}>
          <span style={{ display: 'inline-block', padding: '6px 12px', background: 'rgba(124, 58, 237, 0.1)', color: 'var(--primary)', borderRadius: '999px', fontSize: '0.85rem', fontWeight: '700' }}>
            {idea.stage}
          </span>
        </div>

        {keywordsList.length > 0 && (
          <div className="flex" style={{ gap: '8px', flexWrap: 'wrap', marginTop: '16px' }}>
            {keywordsList.map((kw, idx) => (
              <span key={idx} style={{ padding: '6px 12px', background: '#F3F4F6', color: '#4B5563', borderRadius: '8px', fontSize: '0.85rem', fontWeight: '500' }}>
                #{kw}
              </span>
            ))}
          </div>
        )}
      </div>

      <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: '20px', display: 'flex', gap: '20px', alignItems: 'center' }}>
        <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#9CA3AF' }}>Connect:</span>
        <div style={{ display: 'flex', gap: '16px' }}>
          {idea.contactLinks?.instagram && (
            <a href={idea.contactLinks.instagram.startsWith('http') ? idea.contactLinks.instagram : `https://instagram.com/${idea.contactLinks.instagram}`} target="_blank" rel="noopener noreferrer" style={{ color: '#E1306C', transition: 'transform 0.2s' }} onMouseOver={e => e.currentTarget.style.transform='scale(1.2)'} onMouseOut={e => e.currentTarget.style.transform='scale(1)'}>
              <FaInstagram size={22} />
            </a>
          )}
          {idea.contactLinks?.twitter && (
            <a href={idea.contactLinks.twitter.startsWith('http') ? idea.contactLinks.twitter : `https://twitter.com/${idea.contactLinks.twitter}`} target="_blank" rel="noopener noreferrer" style={{ color: '#1DA1F2', transition: 'transform 0.2s' }} onMouseOver={e => e.currentTarget.style.transform='scale(1.2)'} onMouseOut={e => e.currentTarget.style.transform='scale(1)'}>
              <FaTwitter size={22} />
            </a>
          )}
          {idea.contactLinks?.linkedin && (
            <a href={idea.contactLinks.linkedin.startsWith('http') ? idea.contactLinks.linkedin : `https://linkedin.com/in/${idea.contactLinks.linkedin}`} target="_blank" rel="noopener noreferrer" style={{ color: '#0A66C2', transition: 'transform 0.2s' }} onMouseOver={e => e.currentTarget.style.transform='scale(1.2)'} onMouseOut={e => e.currentTarget.style.transform='scale(1)'}>
              <FaLinkedin size={22} />
            </a>
          )}
          {idea.contactLinks?.github && (
            <a href={idea.contactLinks.github.startsWith('http') ? idea.contactLinks.github : `https://github.com/${idea.contactLinks.github}`} target="_blank" rel="noopener noreferrer" style={{ color: '#333', transition: 'transform 0.2s' }} onMouseOver={e => e.currentTarget.style.transform='scale(1.2)'} onMouseOut={e => e.currentTarget.style.transform='scale(1)'}>
              <FaGithub size={22} />
            </a>
          )}
          {idea.contactLinks?.whatsapp && (
            <a href={`https://wa.me/${idea.contactLinks.whatsapp}`} target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', transition: 'transform 0.2s' }} onMouseOver={e => e.currentTarget.style.transform='scale(1.2)'} onMouseOut={e => e.currentTarget.style.transform='scale(1)'}>
              <FaWhatsapp size={22} />
            </a>
          )}
          {idea.contactLinks?.email && (
            <a href={`mailto:${idea.contactLinks.email}`} style={{ color: '#D44638', transition: 'transform 0.2s' }} onMouseOver={e => e.currentTarget.style.transform='scale(1.2)'} onMouseOut={e => e.currentTarget.style.transform='scale(1)'}>
              <Mail size={22} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
