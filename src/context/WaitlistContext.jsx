import { createContext, useContext, useState } from 'react';

const WaitlistContext = createContext(null);

export const WaitlistProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [hasJoined, setHasJoined] = useState(false);

  const incrementCount = () => setCount((c) => c + 1);

  return (
    <WaitlistContext.Provider value={{ count, hasJoined, setHasJoined, incrementCount }}>
      {children}
    </WaitlistContext.Provider>
  );
};

export const useWaitlistContext = () => {
  const ctx = useContext(WaitlistContext);
  if (!ctx) throw new Error('useWaitlistContext must be used within WaitlistProvider');
  return ctx;
};
