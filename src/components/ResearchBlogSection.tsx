import React, { useState } from 'react';
import { RESEARCH_PAPERS, BLOG_POSTS, LOGO_URL } from '../data/mockData';
import { ResearchPaper, BlogPost } from '../types';
import { BookOpen, FileText, Download, Sparkles, Clock, ArrowRight, X, Share2, Eye, Bookmark, Tag, Search, Layers, ChevronRight, Filter } from 'lucide-react';

export const ResearchBlogSection: React.FC = () => {
  const [paperSearch, setPaperSearch] = useState<string>('');
  const [blogSearch, setBlogSearch] = useState<string>('');
  const [selectedPaperCategory, setSelectedPaperCategory] = useState<string>('All');
  const [selectedBlogCategory, setSelectedBlogCategory] = useState<string>('All');
  
  const [selectedPaper, setSelectedPaper] = useState<ResearchPaper | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const ALL_20_KNOWLEDGE_CATEGORIES = [
    'All',
    'Research Reports',
    'White Papers',
    'Rural Development Studies',
    'Education Research',
    'Employment & Skill Development Insights',
    'Entrepreneurship & Livelihood Reports',
    'Women Empowerment Articles',
    'Community Development Stories',
    'Government Schemes & Policy Updates',
    'CSR & ESG Resources',
    'Volunteer Experiences',
    'Field Visit Reports',
    'Annual Impact Reports',
    'Success Stories',
    'Opinion & Thought Leadership Articles',
    'Rural Innovation Case Studies',
    'Sustainable Development Resources',
    'Digital Literacy Articles',
    'Youth Development Resources',
    'Financial Inclusion & Entrepreneurship Guides'
  ];

  const filteredPapers = RESEARCH_PAPERS.filter(paper => {
    const matchesCategory = selectedPaperCategory === 'All' || paper.category === selectedPaperCategory;
    const matchesSearch = !paperSearch || 
      paper.title.toLowerCase().includes(paperSearch.toLowerCase()) || 
      paper.abstract.toLowerCase().includes(paperSearch.toLowerCase()) ||
      paper.authors.some(a => a.toLowerCase().includes(paperSearch.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCategory = selectedBlogCategory === 'All' || post.category === selectedBlogCategory;
    const matchesSearch = !blogSearch || 
      post.title.toLowerCase().includes(blogSearch.toLowerCase()) || 
      post.summary.toLowerCase().includes(blogSearch.toLowerCase()) ||
      post.author.toLowerCase().includes(blogSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-nature-parchment botanical-overlay text-stone-900 border-t border-emerald-900/10">
      
      {/* SECTION 1: KNOWLEDGE CENTRE & RESEARCH LIBRARY */}
      <section id="knowledge-centre" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B5E20]/10 text-[#1B5E20] text-xs font-bold tracking-widest uppercase border border-[#1B5E20]/20">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Digital Knowledge Hub & Publication Library</span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
            Research & Insights Library
          </h2>

          <p className="text-stone-600 text-base sm:text-lg">
            Access our open-access research papers, policy briefs, empirical workforce studies (CEQI), and annual impact reports shaping rural India’s development roadmap.
          </p>

          {/* Search Bar */}
          <div className="pt-2 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-4 top-3.5" />
            <input
              type="text"
              value={paperSearch}
              onChange={(e) => setPaperSearch(e.target.value)}
              placeholder="Search research papers, topics, authors..."
              className="w-full pl-11 pr-4 py-2.5 rounded-full bg-white border border-stone-200 text-xs shadow-xs focus:outline-none focus:ring-2 focus:ring-[#1B5E20]"
            />
          </div>

          {/* Category Filter Pills (20 Categories Supported) */}
          <div className="pt-4 flex flex-wrap justify-center gap-2 max-h-40 overflow-y-auto p-2">
            {ALL_20_KNOWLEDGE_CATEGORIES.slice(0, 10).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedPaperCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                  selectedPaperCategory === cat
                    ? 'bg-[#1B5E20] text-white shadow-md'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Digital Publication Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPapers.map((paper) => (
            <div
              key={paper.id}
              className="bg-white rounded-[32px] overflow-hidden border border-emerald-900/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Cover Banner */}
              <div className="relative h-48 overflow-hidden bg-stone-100">
                <img
                  src={paper.coverImage || '/Photos/1BEBE08D-B612-4FBF-BC69-CA9621905A58.PNG'}
                  alt={paper.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[#1B5E20] text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-xs">
                  {paper.category}
                </span>
                <span className="absolute bottom-3 right-4 text-white text-[10px] font-medium opacity-90">
                  {paper.readTime}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-7 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-serif-title text-xl font-bold text-stone-900 group-hover:text-[#1B5E20] transition-colors leading-snug">
                    {paper.title}
                  </h3>
                  <p className="text-stone-500 text-xs font-medium italic">{paper.subtitle}</p>
                  <p className="text-stone-600 text-xs line-clamp-3 leading-relaxed pt-1">
                    {paper.abstract}
                  </p>
                </div>

                {/* Key Empirical Highlights */}
                <div className="bg-nature-soft p-4 rounded-2xl border border-emerald-900/5 space-y-1.5">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#B8860B] block">Empirical Finding</span>
                  <p className="text-xs text-stone-800 font-medium flex items-start gap-1.5">
                    <span className="text-[#1B5E20] font-bold">✓</span>
                    <span>{paper.keyFindings[0]}</span>
                  </p>
                </div>

                {/* Card Actions */}
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedPaper(paper)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#1B5E20]" />
                    <span>Read Online</span>
                  </button>

                  <a
                    href={paper.pdfUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1B5E20] hover:bg-[#0D47A1] text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* SECTION 2: EDITORIAL BLOG & FIELD CHRONICLES */}
      <section id="editorial-blog" className="py-24 bg-white border-t border-emerald-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0D47A1]/10 text-[#0D47A1] text-xs font-bold tracking-widest uppercase border border-[#0D47A1]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Editorial Journal & Field Chronicles</span>
            </div>

            <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
              Grassroots Thought Leadership & Stories
            </h2>

            <p className="text-stone-600 text-base sm:text-lg">
              In-depth articles written by field directors, educators, and volunteer mentors exploring rural transformation, digital literacy, and community economic resilience.
            </p>

            {/* Blog Search */}
            <div className="pt-2 max-w-md mx-auto relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-4 top-3.5" />
              <input
                type="text"
                value={blogSearch}
                onChange={(e) => setBlogSearch(e.target.value)}
                placeholder="Search articles by title, author, or keyword..."
                className="w-full pl-11 pr-4 py-2.5 rounded-full bg-stone-50 border border-stone-200 text-xs shadow-xs focus:outline-none focus:ring-2 focus:ring-[#0D47A1]"
              />
            </div>

            {/* Blog Category Filter Pills */}
            <div className="pt-4 flex flex-wrap justify-center gap-2 max-h-40 overflow-y-auto p-2">
              {ALL_20_KNOWLEDGE_CATEGORIES.slice(4, 18).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedBlogCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                    selectedBlogCategory === cat
                      ? 'bg-[#0D47A1] text-white shadow-md'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Medium-Style Article Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="bg-nature-parchment rounded-[32px] overflow-hidden border border-stone-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-stone-900 text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-xs">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">
                      {post.date} • {post.readTime}
                    </div>
                    <h3 className="font-serif-title font-bold text-xl text-stone-900 group-hover:text-[#1B5E20] transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-stone-600 text-xs line-clamp-3 leading-relaxed">
                      {post.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-200/60 flex items-center justify-between text-xs font-bold text-[#1B5E20]">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#1B5E20] text-white text-[10px] flex items-center justify-center font-serif">
                        {post.author[0]}
                      </span>
                      <span className="text-stone-700 text-xs">{post.author}</span>
                    </div>
                    <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* READ ONLINE MODAL FOR RESEARCH PAPERS */}
      {selectedPaper && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-4xl w-full p-6 sm:p-10 shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto animate-in zoom-in-95">
            <button
              onClick={() => setSelectedPaper(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-bold text-[#1B5E20] uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                {selectedPaper.category}
              </span>
              <h3 className="font-serif-title text-3xl font-bold text-stone-900 mt-2">{selectedPaper.title}</h3>
              <p className="text-stone-500 text-sm font-medium">{selectedPaper.subtitle}</p>
              <div className="text-xs text-stone-400 font-medium">Authors: {selectedPaper.authors.join(', ')} • Published: {selectedPaper.publishDate}</div>
            </div>

            {/* Paper Content Sections */}
            <div className="space-y-6 text-stone-800 text-sm leading-relaxed border-t border-b border-stone-200 py-6">
              <div className="bg-amber-50/60 p-5 rounded-2xl border border-amber-200 space-y-2">
                <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wider text-[#B8860B]">Executive Abstract</h4>
                <p className="text-stone-700 text-xs sm:text-sm">{selectedPaper.abstract}</p>
              </div>

              {selectedPaper.fullTextSections ? (
                selectedPaper.fullTextSections.map((sec, idx) => (
                  <div key={idx} className="space-y-2">
                    <h4 className="font-bold text-stone-900 text-base">{sec.heading}</h4>
                    <p className="text-stone-700">{sec.body}</p>
                  </div>
                ))
              ) : (
                <div className="space-y-3">
                  <h4 className="font-bold text-stone-900 text-base">Key Empirical Findings</h4>
                  <ul className="space-y-2">
                    {selectedPaper.keyFindings.map((kf, kfIdx) => (
                      <li key={kfIdx} className="flex items-start gap-2 bg-emerald-50 p-3.5 rounded-xl text-stone-800">
                        <span className="text-[#1B5E20] font-bold">✓</span>
                        <span>{kf}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <a
                href={selectedPaper.pdfUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#1B5E20] text-white font-bold text-xs uppercase flex items-center justify-center gap-2 shadow-md hover:bg-[#0D47A1] transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Full PDF Document</span>
              </a>

              <button
                onClick={() => setSelectedPaper(null)}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-stone-100 text-stone-800 font-bold text-xs uppercase hover:bg-stone-200 cursor-pointer"
              >
                Close Reader
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MEDIUM-STYLE EDITORIAL ARTICLE MODAL */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/85 backdrop-blur-md animate-in fade-in">
          <div className="bg-white rounded-[32px] max-w-4xl w-full p-6 sm:p-10 shadow-2xl relative space-y-8 max-h-[92vh] overflow-y-auto animate-in zoom-in-95">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors z-10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Article Header */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 rounded-full bg-[#1B5E20]/10 text-[#1B5E20] text-xs font-bold uppercase tracking-widest">
                  {selectedPost.category}
                </span>
                <span className="text-xs text-stone-400 font-medium">{selectedPost.date} • {selectedPost.readTime}</span>
              </div>

              <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
                {selectedPost.title}
              </h2>

              {/* Author Bio Bar */}
              <div className="flex items-center gap-4 py-3 border-t border-b border-stone-100">
                <div className="w-12 h-12 rounded-full bg-[#1B5E20] text-white font-serif font-bold text-xl flex items-center justify-center">
                  {selectedPost.author[0]}
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">{selectedPost.author}</h4>
                  <p className="text-xs text-stone-500 font-medium">{selectedPost.role} • Charitarth Foundation</p>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-md">
              <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
            </div>

            {/* Table of Contents */}
            {selectedPost.tableOfContents && (
              <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 space-y-2">
                <h4 className="font-bold text-stone-900 text-xs uppercase tracking-wider flex items-center gap-2 text-[#B8860B]">
                  <Layers className="w-4 h-4" />
                  <span>Table of Contents</span>
                </h4>
                <ul className="space-y-1.5 text-xs text-stone-700 font-medium">
                  {selectedPost.tableOfContents.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 hover:text-[#1B5E20] cursor-pointer">
                      <ChevronRight className="w-3 h-3 text-[#1B5E20]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Rich Typography Body Content */}
            <div className="space-y-6 text-stone-800 text-base sm:text-lg leading-relaxed font-sans">
              {selectedPost.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Pull Quote */}
            {selectedPost.pullQuote && (
              <div className="my-8 p-8 bg-emerald-900 text-white rounded-3xl border-l-8 border-[#D4AF37] space-y-3 shadow-lg">
                <p className="font-serif-title italic text-xl sm:text-2xl leading-relaxed">
                  "{selectedPost.pullQuote.text}"
                </p>
                <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
                  — {selectedPost.pullQuote.author}
                </div>
              </div>
            )}

            {/* Embedded Authentic Image Gallery */}
            {selectedPost.galleryImages && selectedPost.galleryImages.length > 0 && (
              <div className="space-y-3 pt-4">
                <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wider text-[#1B5E20]">Field Photography</h4>
                <div className="grid grid-cols-2 gap-4">
                  {selectedPost.galleryImages.map((img, idx) => (
                    <img key={idx} src={img} alt="Field activity" className="rounded-2xl h-44 w-full object-cover shadow-sm hover:scale-105 transition-transform" />
                  ))}
                </div>
              </div>
            )}

            {/* Infographics Data Callouts */}
            {selectedPost.infographics && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                {selectedPost.infographics.map((info, idx) => (
                  <div key={idx} className="bg-stone-50 p-5 rounded-2xl border border-stone-200 text-center space-y-1">
                    <div className="font-serif-title font-bold text-2xl text-[#1B5E20]">{info.value}</div>
                    <div className="text-xs font-bold text-stone-900">{info.label}</div>
                    <div className="text-[10px] text-stone-500 leading-tight">{info.detail}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Social Share & Footer */}
            <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-3 text-xs font-bold text-stone-600">
                <Share2 className="w-4 h-4 text-[#1B5E20]" />
                <span>Share this article:</span>
                <button onClick={() => alert('Link copied to clipboard!')} className="px-3 py-1 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 cursor-pointer">Copy Link</button>
              </div>

              <button
                onClick={() => setSelectedPost(null)}
                className="px-6 py-2.5 rounded-full bg-[#1B5E20] text-white font-bold text-xs uppercase hover:bg-[#0D47A1] cursor-pointer"
              >
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
