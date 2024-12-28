import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Auth } from './components/Auth';
import { KeypairManager } from './components/KeypairManager';
import { loadFromStorage } from './utils/storage';
import { useAuth } from './hooks/useAuth';
import { useKeypairs } from './hooks/useKeypairs';

function App() {
  const { auth, handleAuth, handleLogout } = useAuth();
  const {
    keypairs,
    setKeypairs,
    activeKeypairIndex,
    setActiveKeypairIndex,
    handleAddKeypair,
    handleDeleteKeypair,
    handleSelectKeypair
  } = useKeypairs(auth.masterPassword);

  const onAuth = (password: string) => {
    const storedData = handleAuth(password);
    if (storedData) {
      setKeypairs(storedData.keypairs);
      setActiveKeypairIndex(storedData.activeKeypairIndex);
    }
  };

  const onLogout = () => {
    handleLogout();
    setKeypairs([]);
    setActiveKeypairIndex(0);
  };

  return (
    <>
      <Toaster position="top-right" />
      {!auth.isAuthenticated ? (
        <Auth
          onAuth={onAuth}
          isInitialSetup={!loadFromStorage(auth.masterPassword || '')}
        />
      ) : (
        <KeypairManager
          keypairs={keypairs}
          activeKeypairIndex={activeKeypairIndex}
          onAddKeypair={handleAddKeypair}
          onDeleteKeypair={handleDeleteKeypair}
          onSelectKeypair={handleSelectKeypair}
          onLogout={onLogout}
        />
      )}
    </>
  );
}

export default App;