import { useState } from 'react';
import axios from 'axios';
import { X } from 'lucide-react';

export default function AddIdeaModal({ isOpen, onClose, onIdeaAdded }) {
  const [formData, setFormData] = useState({
    authorName: '',
    title: '',
    details: '',
    rolesNeeded: '',
    stage: 'Idea phase',
    keywords: '',
    instagram: '',
    whatsapp: '',
    email: '',
    linkedin: '',
    github: '',
    twitter: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const payload = {
        authorName: formData.authorName,
        title: formData.title,
        details: formData.details,
        rolesNeeded: formData.rolesNeeded,
        stage: formData.stage,
        keywords: formData.keywords.split(',').map(k => k.trim()).filter(k => k),
        contactLinks: {
          instagram: formData.instagram,
          whatsapp: formData.whatsapp,
          email: formData.email,
          linkedin: formData.linkedin,
          github: formData.github,
          twitter: formData.twitter
        }
      };
      
      const res = await axios.post('http://localhost:5000/api/ideas', payload);
      onIdeaAdded(res.data);
      onClose();
      // Reset form
      setFormData({ authorName: '', title: '', details: '', rolesNeeded: '', stage: 'Idea phase', keywords: '', instagram: '', whatsapp: '', email: '', linkedin: '', github: '', twitter: '' });
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to post idea');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center" style={{ marginBottom: '24px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-dark)' }}>Post an Idea</h2>
          <button onClick={onClose} style={{ background: 'transparent', padding: '8px', borderRadius: '50%' }} className="hover:bg-gray-100">
            <X size={24} color="var(--text-muted)" />
          </button>
        </div>

        {error && <div style={{ padding: '12px', background: '#FEE2E2', color: '#DC2626', borderRadius: '8px', marginBottom: '16px', fontSize: '0.9rem' }}>{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Your Name <span style={{color: 'red'}}>*</span></label>
            <input type="text" name="authorName" className="input-field" placeholder="E.g., John Doe" value={formData.authorName} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label className="form-label">Title <span style={{color: 'red'}}>*</span></label>
            <input type="text" name="title" className="input-field" placeholder="E.g., Next-Gen AI Study App" value={formData.title} onChange={handleChange} required />
          </div>
          
          <div className="form-group">
            <label className="form-label">Details <span style={{color: 'red'}}>*</span></label>
            <textarea name="details" className="input-field" placeholder="Describe your vision, target audience, and current progress..." value={formData.details} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label className="form-label">Roles Needed <span style={{color: 'red'}}>*</span></label>
            <input type="text" name="rolesNeeded" className="input-field" placeholder="E.g., React Developer, UI Designer" value={formData.rolesNeeded} onChange={handleChange} required />
          </div>

          <div className="flex gap-4">
            <div className="form-group" style={{ flex: 1 }}>
              <label className="form-label">Stage <span style={{color: 'red'}}>*</span></label>
              <select name="stage" className="input-field" value={formData.stage} onChange={handleChange}>
                <option value="Idea phase">Idea phase</option>
                <option value="Prototyping">Prototyping</option>
                <option value="MVP ready">MVP ready</option>
                <option value="Scaling">Scaling</option>
              </select>
            </div>
            
            <div className="form-group" style={{ flex: 1 }}>
              <label className="form-label">Keywords</label>
              <input type="text" name="keywords" className="input-field" placeholder="E.g., edtech, ai, frontend (comma separated)" value={formData.keywords} onChange={handleChange} />
            </div>
          </div>

          <div style={{ marginTop: '24px', marginBottom: '16px', borderTop: '1px solid #E5E7EB', paddingTop: '16px' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '16px' }}>Contact Links</h3>
            
            <div className="form-group">
              <label className="form-label">Instagram Handle/URL</label>
              <input type="text" name="instagram" className="input-field" placeholder="e.g., your_handle or https://instagram.com/..." value={formData.instagram} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label className="form-label">Twitter/X Handle</label>
              <input type="text" name="twitter" className="input-field" placeholder="e.g., your_handle" value={formData.twitter} onChange={handleChange} />
            </div>
            
            <div className="form-group">
              <label className="form-label">LinkedIn URL</label>
              <input type="text" name="linkedin" className="input-field" placeholder="e.g., https://linkedin.com/in/..." value={formData.linkedin} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label className="form-label">GitHub Username</label>
              <input type="text" name="github" className="input-field" placeholder="e.g., your_username" value={formData.github} onChange={handleChange} />
            </div>
            
            <div className="form-group">
              <label className="form-label">WhatsApp Number</label>
              <input type="text" name="whatsapp" className="input-field" placeholder="e.g., +1234567890" value={formData.whatsapp} onChange={handleChange} />
            </div>
            
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input type="email" name="email" className="input-field" placeholder="e.g., you@example.com" value={formData.email} onChange={handleChange} />
            </div>
          </div>

          <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '16px' }} disabled={loading}>
            {loading ? 'Posting...' : 'Post Idea'}
          </button>
        </form>
      </div>
    </div>
  );
}
