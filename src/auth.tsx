import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Mock Auth Context since Firebase setup failed due to "Brand is disabled"
// Master E can replace this with real Firebase Auth later.

interface User {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check local storage for mock session
    const storedUser = localStorage.getItem('max2_mock_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const signInWithGoogle = async () => {
    setLoading(true);
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    const mockUser = {
      uid: 'mock-uid-123',
      displayName: 'Master E',
      email: 'eburondeveloperph@gmail.com',
      photoURL: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MasterE&backgroundColor=041a15',
    };
    setUser(mockUser);
    localStorage.setItem('max2_mock_user', JSON.stringify(mockUser));
    setLoading(false);
  };

  const signOut = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 400));
    setUser(null);
    localStorage.removeItem('max2_mock_user');
    setLoading(false);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signInWithGoogle, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
