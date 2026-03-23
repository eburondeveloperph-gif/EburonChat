import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './auth';

export default function MainPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [connectionStatus, setConnectionStatus] = useState('Connecting to Max 2.0...');

  useEffect(() => {
    const timer = setTimeout(() => setConnectionStatus('Connected to Max 2.0'), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-[100dvh] flex flex-col relative bg-gradient-to-b from-[#092C23] to-[#030C0A] overflow-hidden">
        
        {/* Header - Sticky */}
        <header className="sticky top-0 flex justify-between items-center px-6 py-4 z-40 bg-[#092C23]/80 backdrop-blur-md">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-teal-500/50 glow-avatar p-[2px]">
                <img src={user?.photoURL || "https://i.pravatar.cc/150?img=47"} alt="User" className="w-full h-full object-cover rounded-full" referrerPolicy="no-referrer" />
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="flex items-center gap-1.5 bg-teal-900/30 px-3 py-1.5 rounded-full border border-teal-500/20">
                    <div className={`w-2 h-2 rounded-full ${connectionStatus.includes('Connecting') ? 'bg-amber-400 animate-pulse' : 'bg-teal-400'}`}></div>
                    <span className="text-[10px] uppercase tracking-widest text-teal-300 font-medium">{connectionStatus}</span>
                </div>
            </div>
            <button className="w-[42px] h-[42px] rounded-full bg-[#071E18]/80 border border-teal-500/30 flex items-center justify-center text-teal-100 glow-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
            </button>
        </header>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto no-scrollbar pb-28 relative z-10">
            
            {/* Background Glows */}
            <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-teal-500/10 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="absolute top-[20%] right-[-50px] w-48 h-48 bg-teal-300/10 rounded-full blur-[60px] pointer-events-none"></div>

            {/* Main Interactive Orb */}
            <main className="flex flex-col items-center mt-6 px-6 relative">
                <div onClick={() => navigate('/voice')} className="w-[280px] h-[280px] rounded-full border border-teal-500/40 glow-orb flex flex-col items-center justify-center relative overflow-hidden backdrop-blur-md cursor-pointer transition transform active:scale-95">
                    <div className="absolute inset-0 w-full h-full opacity-30">
                        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-teal-200">
                            <path d="M -20 150 C 60 180, 140 80, 220 50" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M 20 -20 C 50 60, 100 140, 180 220" stroke="currentColor" strokeWidth="1" />
                            <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4"/>
                        </svg>
                    </div>

                    <div className="relative z-10 text-center flex flex-col items-center">
                        <p className="text-[15px] text-teal-50/80 mb-1 flex items-center gap-2">
                            Hi, there <span className="text-lg">👋</span>
                        </p>
                        <h2 className="text-[28px] font-bold text-white mb-6 tracking-wide drop-shadow-lg">Tap to chat</h2>
                        
                        <div className="flex items-center gap-[3px] h-6">
                            <div className="w-[2px] h-3 bg-white rounded-full"></div>
                            <div className="w-[2px] h-5 bg-white rounded-full"></div>
                            <div className="w-[3px] h-6 bg-white rounded-full shadow-[0_0_10px_#fff]"></div>
                            <div className="w-[2px] h-5 bg-white rounded-full"></div>
                            <div className="w-[2px] h-3 bg-white rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="w-full text-left mt-10 max-w-md mx-auto">
                    <h3 className="text-[17px] font-semibold text-white mb-4 pl-1">Help that feels human.</h3>
                    
                    <div className="flex flex-col gap-3">
                        <div onClick={() => navigate('/chat')} className="feature-card rounded-[24px] p-4 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="w-[42px] h-[42px] rounded-full bg-teal-900/30 border border-teal-500/30 flex items-center justify-center text-teal-400 glow-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-[15px] font-semibold text-white tracking-wide">Generating visual</p>
                                    <p className="text-[12px] text-teal-50/60 mt-0.5">Visuals, instantly from input.</p>
                                </div>
                            </div>
                            <div className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/50">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                            </div>
                        </div>

                        <div onClick={() => navigate('/chat')} className="feature-card rounded-[24px] p-4 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="w-[42px] h-[42px] rounded-full bg-teal-900/30 border border-teal-500/30 flex items-center justify-center text-teal-400 glow-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-[15px] font-semibold text-white tracking-wide">Organizing matters</p>
                                    <p className="text-[12px] text-teal-50/60 mt-0.5">Goal and progress syncs.</p>
                                </div>
                            </div>
                            <div className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/50">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                            </div>
                        </div>

                        <div onClick={() => navigate('/chat')} className="feature-card rounded-[24px] p-4 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="w-[42px] h-[42px] rounded-full bg-teal-900/30 border border-teal-500/30 flex items-center justify-center text-teal-400 glow-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-[15px] font-semibold text-white tracking-wide">Education bill</p>
                                    <p className="text-[12px] text-teal-50/60 mt-0.5">Learning builds the future.</p>
                                </div>
                            </div>
                            <div className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/50">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>

        {/* Bottom Fixed Action Area */}
        <footer className="w-full px-6 pb-8 pt-6 bg-gradient-to-t from-[#020A08] via-[#020A08]/90 to-transparent flex items-center justify-center gap-3 z-20 mt-auto">
            <div className="w-full max-w-md flex items-center gap-3">
                <div onClick={() => navigate('/chat')} className="flex-1 h-[56px] rounded-[28px] bg-[#071411]/80 border border-white/10 backdrop-blur-md flex items-center justify-between px-5 cursor-pointer">
                    <span className="text-[14px] text-teal-50/60">Ask me anything...</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/80"><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></svg>
                </div>
                
                <div onClick={() => navigate('/chat')} className="w-[56px] h-[56px] rounded-full bg-[#071411] border border-teal-500/50 flex items-center justify-center text-teal-400 shadow-[0_0_20px_rgba(45,212,191,0.3)] shrink-0 transition-transform active:scale-95 cursor-pointer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><line x1="12" y1="8" x2="12" y2="14"></line><line x1="9" y1="11" x2="15" y2="11"></line></svg>
                </div>
            </div>
        </footer>
    </div>
  );
}
