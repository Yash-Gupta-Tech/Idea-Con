import { useState, useEffect } from 'react';
import axios from 'axios';
import { Plus } from 'lucide-react';
import IdeaCard from '../components/IdeaCard';
import AddIdeaModal from '../components/AddIdeaModal';

export default function Ideas() {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [stageFilter, setStageFilter] = useState('');

  useEffect(() => {
    fetchIdeas();
  }, []);

  const fetchIdeas = async () => {
    try {
      setLoading(true);
      const res = await axios.get('https://idea-connect-backend.onrender.com');
      setIdeas(res.data);
      setError(null);
    } catch (err) {
      setError('Failed to load ideas. Is the backend running?');
    } finally {
      setLoading(false);
    }
  };

  const handleIdeaAdded = (newIdea) => {
    setIdeas([newIdea, ...ideas]);
  };

  const filteredIdeas = ideas.filter(idea => {
    const matchesSearch = idea.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          idea.details.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          idea.rolesNeeded.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStage = stageFilter ? idea.stage === stageFilter : true;
    return matchesSearch && matchesStage;
  });

  return (
    <div className="container animate-fade-in" style={{ paddingBottom: '100px', paddingTop: '40px' }}>
      
      <div style={{ marginBottom: '40px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '16px' }}>
          Discover <span style={{ color: 'var(--primary)' }}>Opportunities</span>
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          Browse through exciting projects, find your next big venture, or connect with talented individuals to bring your own vision to life.
        </p>
      </div>

      <div className="flex gap-4" style={{ marginBottom: '32px', maxWidth: '800px', margin: '0 auto 32px' }}>
        <input 
          type="text" 
          placeholder="Search by title, role, or keywords..." 
          className="input-field" 
          style={{ flex: 2 }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select 
          className="input-field" 
          style={{ flex: 1 }}
          value={stageFilter}
          onChange={(e) => setStageFilter(e.target.value)}
        >
          <option value="">All Stages</option>
          <option value="Idea phase">Idea phase</option>
          <option value="Prototyping">Prototyping</option>
          <option value="MVP ready">MVP ready</option>
          <option value="Scaling">Scaling</option>
        </select>
      </div>

      {loading && <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>Loading ideas...</div>}
      
      {error && <div style={{ textAlign: 'center', padding: '40px', color: '#DC2626', background: '#FEE2E2', borderRadius: '12px' }}>{error}</div>}
      
      {!loading && !error && ideas.length === 0 && (
        <div style={{ textAlign: 'center', padding: '60px', background: 'var(--card-bg)', borderRadius: '16px', border: '1px dashed #D1D5DB' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--text-dark)', marginBottom: '8px' }}>No ideas yet</h3>
          <p style={{ color: 'var(--text-muted)' }}>Be the first to share your vision!</p>
        </div>
      )}

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
        gap: '24px' 
      }}>
        {filteredIdeas.map(idea => (
          <IdeaCard key={idea._id} idea={idea} />
        ))}
      </div>

      {/* Floating Action Button */}
      <button 
        onClick={() => setIsModalOpen(true)}
        className="btn-primary"
        style={{
          position: 'fixed',
          bottom: '40px',
          right: '40px',
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
          boxShadow: '0 10px 25px rgba(124, 58, 237, 0.5)',
          zIndex: 100
        }}
        aria-label="Add Idea"
      >
        <Plus size={32} />
      </button>

      <AddIdeaModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onIdeaAdded={handleIdeaAdded} 
      />
      
    </div>
  );
}
