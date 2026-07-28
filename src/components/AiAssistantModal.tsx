import React, { useState } from 'react';
import { Sparkles, Send, User, Bot, X, Loader2, Heart, ShieldCheck } from 'lucide-react';

interface AiAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDonateModal: () => void;
}

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

export const AiAssistantModal: React.FC<AiAssistantModalProps> = ({
  isOpen,
  onClose,
  onOpenDonateModal
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      text: 'Namaste! I am Charitarth AI Impact & Career Advisor. Ask me anything about our 80G tax benefits, research papers (CEQI), field programs in 200+ villages, or how your donation or skills can create the highest impact!'
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userText = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', text: userText }]);
    setLoading(true);

    try {
      const response = await fetch('/api/ai-assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userText })
      });
      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', text: data.reply || 'Thank you for connecting with Charitarth Foundation!' }
      ]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: 'Charitarth Foundation empowers rural India through Education, Employment, and Entrepreneurship. All donations are 50% Tax Exempt under Section 80G. How may I assist your contribution journey?'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const QUICK_QUESTIONS = [
    'How does 80G tax exemption work?',
    'Where does a ₹1,000 donation go?',
    'What is the Charitarth Employment Quality Index (CEQI)?',
    'How can a developer/teacher volunteer?'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full h-[80vh] flex flex-col shadow-2xl relative overflow-hidden animate-in zoom-in-95 border border-stone-200">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-6 bg-gradient-to-r from-[#1B5E20] via-[#0D47A1] to-[#1B5E20] text-white flex items-center justify-between shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white p-1 flex items-center justify-center border border-amber-300">
              <img src="/Photos/logo.png" alt="Charitarth Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="font-serif-title font-bold text-lg leading-tight">Charitarth AI Impact & Career Advisor</h3>
              <p className="text-[10px] text-stone-200">Powered by Gemini AI • Real-Time Field Intelligence</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat History Messages */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 bg-[#FAF9F6]">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-3 ${
                m.role === 'user' ? 'flex-row-reverse' : ''
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shadow-sm ${
                  m.role === 'user' ? 'bg-[#0D47A1] text-white' : 'bg-[#1B5E20] text-white'
                }`}
              >
                {m.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`p-4 rounded-2xl max-w-[80%] text-xs sm:text-sm leading-relaxed shadow-sm ${
                  m.role === 'user'
                    ? 'bg-[#0D47A1] text-white rounded-tr-none'
                    : 'bg-white border border-stone-200 text-stone-800 rounded-tl-none'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
              <Loader2 className="w-4 h-4 animate-spin text-[#1B5E20]" />
              <span>Consulting Charitarth Knowledge Base...</span>
            </div>
          )}
        </div>

        {/* Quick Question Prompts */}
        <div className="p-3 bg-stone-100 border-t border-stone-200 overflow-x-auto flex gap-2">
          {QUICK_QUESTIONS.map((q, idx) => (
            <button
              key={idx}
              onClick={() => { setInput(q); }}
              className="px-3 py-1.5 rounded-full bg-white border border-stone-200 text-[11px] text-stone-700 hover:border-[#1B5E20] hover:text-[#1B5E20] flex-shrink-0 transition-colors cursor-pointer font-medium"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Chat Input Form */}
        <form onSubmit={handleSend} className="p-4 bg-white border-t border-stone-200 flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask AI about 80G tax exemptions, scholarships, or volunteering..."
            className="flex-1 px-4 py-3 rounded-xl border border-stone-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1B5E20]"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="p-3 rounded-xl bg-[#1B5E20] hover:bg-[#124216] disabled:opacity-50 text-white transition-colors cursor-pointer"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
};
