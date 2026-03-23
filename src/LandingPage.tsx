import { motion } from 'motion/react';
import { useAuth } from './auth';
import { LogIn, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const { signInWithGoogle, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    await signInWithGoogle();
    navigate('/main');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-max-accent)] rounded-full mix-blend-screen filter blur-[120px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-max-accent)] rounded-full mix-blend-screen filter blur-[120px] opacity-10 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 flex flex-col items-center text-center max-w-md w-full"
      >
        <div className="w-24 h-24 rounded-full glass-panel flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(0,255,163,0.2)]">
          <Sparkles className="w-10 h-10 text-[var(--color-max-accent)]" />
        </div>
        
        <h1 className="text-5xl font-bold mb-4 tracking-tight">
          Max <span className="text-[var(--color-max-accent)]">2.0</span>
        </h1>
        <p className="text-[var(--color-max-text-muted)] text-lg mb-12">
          Your specialized AI Chief-of-Staff. Ready to oversee the operation, Master E.
        </p>

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full glass-pill py-4 px-6 flex items-center justify-center gap-3 text-lg font-medium hover:bg-[var(--color-max-card-border)] transition-all duration-300 group shadow-[0_0_20px_rgba(0,255,163,0.1)] hover:shadow-[0_0_30px_rgba(0,255,163,0.3)]"
        >
          {loading ? (
            <div className="w-6 h-6 border-2 border-[var(--color-max-accent)] border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <>
              <LogIn className="w-5 h-5 text-[var(--color-max-accent)] group-hover:scale-110 transition-transform" />
              <span>Authenticate Identity</span>
            </>
          )}
        </button>
      </motion.div>
    </div>
  );
}
