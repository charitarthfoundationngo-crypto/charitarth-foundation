import React, { useState, useEffect } from 'react';
import { Search, X, BookOpen, Briefcase, Lightbulb, FileText, Sparkles, MapPin, Users } from 'lucide-react';
import { RESEARCH_PAPERS, BLOG_POSTS, PILLARS_DATA, SUCCESS_STORIES, VOLUNTEER_ROLES } from '../data/mockData';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const searchQuery = query.toLowerCase().trim();

  const matchingPapers = searchQuery
    ? RESEARCH_PAPERS.filter(p => p.title.toLowerCase().includes(searchQuery) || p.abstract.toLowerCase().includes(searchQuery))
    : [];

  const matchingPosts = searchQuery
    ? BLOG_POSTS.filter(p => p.title.toLowerCase().includes(searchQuery) || p.summary.toLowerCase().includes(searchQuery))
    : [];

  const matchingStories = searchQuery
    ? SUCCESS_STORIES.filter(s => s.name.toLowerCase().includes(searchQuery) || s.title.toLowerCase().includes(searchQuery))
    : [];

  const matchingRoles = searchQuery
    ? VOLUNTEER_ROLES.filter(v => v.title.toLowerCase().includes(searchQuery) || v.description.toLowerCase().includes(searchQuery))
    : [];

  const hasResults = matchingPapers.length > 0 || matchingPosts.length > 0 || matchingStories.length > 0 || matchingRoles.length > 0;

  const scrollToElement = (id: string) => {
    onClose();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-stone-950/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl relative space-y-4 border border-stone-200 animate-in zoom-in-95">
        
        {/* Search Header Input */}
        <div className="flex items-center gap-3 pb-4 border-b border-stone-100">
          <Search className="w-5 h-5 text-[#1B5E20]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search papers, blog posts, stories, volunteer roles..."
            className="flex-1 text-base font-medium text-stone-900 focus:outline-none placeholder:text-stone-400"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto space-y-4 pr-1">
          {!searchQuery ? (
            <div className="text-center py-8 space-y-2 text-stone-400">
              <Sparkles className="w-8 h-8 text-[#D4AF37] mx-auto opacity-70" />
              <p className="text-xs font-medium">Type any keyword like <span className="text-[#1B5E20] font-bold">"CEQI"</span>, <span className="text-[#1B5E20] font-bold">"Solar"</span>, <span className="text-[#1B5E20] font-bold">"Hardoi"</span>, or <span className="text-[#1B5E20] font-bold">"Volunteer"</span>...</p>
            </div>
          ) : !hasResults ? (
            <div className="text-center py-8 text-stone-500 text-xs font-medium">
              No matching records found for "{query}". Try searching for Education, CEQI, or Volunteer.
            </div>
          ) : (
            <div className="space-y-4">
              
              {/* Matching Papers */}
              {matchingPapers.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#1B5E20]">Research Papers ({matchingPapers.length})</div>
                  {matchingPapers.map((paper) => (
                    <div
                      key={paper.id}
                      onClick={() => scrollToElement('knowledge-centre')}
                      className="p-3 rounded-2xl bg-stone-50 hover:bg-emerald-50 border border-stone-100 hover:border-emerald-200 cursor-pointer transition-colors space-y-1"
                    >
                      <h4 className="font-bold text-xs text-stone-900">{paper.title}</h4>
                      <p className="text-[11px] text-stone-500 line-clamp-1">{paper.abstract}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Matching Posts */}
              {matchingPosts.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#0D47A1]">Editorial Blog ({matchingPosts.length})</div>
                  {matchingPosts.map((post) => (
                    <div
                      key={post.id}
                      onClick={() => scrollToElement('editorial-blog')}
                      className="p-3 rounded-2xl bg-stone-50 hover:bg-blue-50 border border-stone-100 hover:border-blue-200 cursor-pointer transition-colors space-y-1"
                    >
                      <h4 className="font-bold text-xs text-stone-900">{post.title}</h4>
                      <p className="text-[11px] text-stone-500 line-clamp-1">{post.summary}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Matching Stories */}
              {matchingStories.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#B8860B]">Success Stories ({matchingStories.length})</div>
                  {matchingStories.map((story) => (
                    <div
                      key={story.id}
                      onClick={() => scrollToElement('stories')}
                      className="p-3 rounded-2xl bg-stone-50 hover:bg-amber-50 border border-stone-100 hover:border-amber-200 cursor-pointer transition-colors space-y-1"
                    >
                      <h4 className="font-bold text-xs text-stone-900">{story.name} — {story.title}</h4>
                      <p className="text-[11px] text-stone-500 line-clamp-1">"{story.quote}"</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Matching Volunteer Roles */}
              {matchingRoles.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-800">Volunteer Roles ({matchingRoles.length})</div>
                  {matchingRoles.map((role) => (
                    <div
                      key={role.id}
                      onClick={() => scrollToElement('volunteer')}
                      className="p-3 rounded-2xl bg-stone-50 hover:bg-emerald-50 border border-stone-100 hover:border-emerald-200 cursor-pointer transition-colors space-y-1"
                    >
                      <h4 className="font-bold text-xs text-stone-900">{role.title}</h4>
                      <p className="text-[11px] text-stone-500 line-clamp-1">{role.description}</p>
                    </div>
                  ))}
                </div>
              )}

            </div>
          )}
        </div>

        {/* Footer Hint */}
        <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[10px] text-stone-400">
          <span>Press ESC or click X to close</span>
          <span>Charitarth Global Search Index</span>
        </div>

      </div>
    </div>
  );
};
