import { AtSign, Mail, Phone } from 'lucide-react'; // AtSign for Instagram roughly, Phone for Whatsapp

export default function IdeaCard({ idea }) {
  // Simple check to parse keywords if they are a comma-separated string
  const keywordsList = Array.isArray(idea.keywords) 
    ? idea.keywords 
    : (idea.keywords ? idea.keywords[0]?.split(',').map(k => k.trim()) : []);

  return (
    <div className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', height: '100%', borderTop: '4px solid var(--primary)' }}>
      <div style={{ marginBottom: '16px' }}>
        <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '8px' }}>
          {idea.title}
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.5', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {idea.details}
        </p>
      </div>

      <div style={{ marginBottom: '16px', flexGrow: 1 }}>
        <div style={{ marginBottom: '12px' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#4B5563', textTransform: 'uppercase' }}>Roles Needed:</span>
          <p style={{ fontSize: '0.95rem', color: 'var(--primary)', fontWeight: '500' }}>{idea.rolesNeeded}</p>
        </div>
        
        <div style={{ marginBottom: '12px' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#4B5563', textTransform: 'uppercase' }}>Stage:</span>
          <span style={{ display: 'inline-block', marginLeft: '8px', padding: '4px 10px', background: 'rgba(124, 58, 237, 0.1)', color: 'var(--primary)', borderRadius: '999px', fontSize: '0.8rem', fontWeight: '600' }}>
            {idea.stage}
          </span>
        </div>

        {keywordsList.length > 0 && (
          <div className="flex" style={{ gap: '8px', flexWrap: 'wrap', marginTop: '12px' }}>
            {keywordsList.map((kw, idx) => (
              <span key={idx} style={{ padding: '4px 10px', background: '#F3F4F6', color: '#4B5563', borderRadius: '6px', fontSize: '0.8rem' }}>
                #{kw}
              </span>
            ))}
          </div>
        )}
      </div>

      <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: '16px', display: 'flex', gap: '16px' }}>
        {idea.contactLinks?.instagram && (
          <a href={idea.contactLinks.instagram.startsWith('http') ? idea.contactLinks.instagram : `https://instagram.com/${idea.contactLinks.instagram}`} target="_blank" rel="noopener noreferrer" style={{ color: '#E1306C', transition: 'transform 0.2s' }} onMouseOver={e => e.currentTarget.style.transform='scale(1.1)'} onMouseOut={e => e.currentTarget.style.transform='scale(1)'}>
            <AtSign size={24} />
          </a>
        )}
        {idea.contactLinks?.whatsapp && (
          <a href={`https://wa.me/${idea.contactLinks.whatsapp}`} target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', transition: 'transform 0.2s' }} onMouseOver={e => e.currentTarget.style.transform='scale(1.1)'} onMouseOut={e => e.currentTarget.style.transform='scale(1)'}>
            <Phone size={24} />
          </a>
        )}
        {idea.contactLinks?.email && (
          <a href={`mailto:${idea.contactLinks.email}`} style={{ color: '#D44638', transition: 'transform 0.2s' }} onMouseOver={e => e.currentTarget.style.transform='scale(1.1)'} onMouseOut={e => e.currentTarget.style.transform='scale(1)'}>
            <Mail size={24} />
          </a>
        )}
      </div>
    </div>
  );
}
