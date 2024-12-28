import { useState, useCallback } from 'react';
import { Keypair } from '../types';
import { saveToStorage } from '../utils/storage';
import toast from 'react-hot-toast';

export const useKeypairs = (masterPassword?: string) => {
  const [keypairs, setKeypairs] = useState<Keypair[]>([]);
  const [activeKeypairIndex, setActiveKeypairIndex] = useState(0);

  const saveKeypairs = useCallback((newKeypairs: Keypair[], newActiveIndex: number) => {
    if (!masterPassword) return;
    try {
      saveToStorage(
        { keypairs: newKeypairs, activeKeypairIndex: newActiveIndex },
        masterPassword
      );
    } catch (error) {
      toast.error('Failed to save keypairs');
    }
  }, [masterPassword]);

  const handleAddKeypair = useCallback((keypair: Keypair) => {
    const newKeypairs = [...keypairs, keypair];
    setKeypairs(newKeypairs);
    saveKeypairs(newKeypairs, activeKeypairIndex);
  }, [keypairs, activeKeypairIndex, saveKeypairs]);

  const handleDeleteKeypair = useCallback((index: number) => {
    const newKeypairs = keypairs.filter((_, i) => i !== index);
    const newActiveIndex = index === activeKeypairIndex ? 0 : activeKeypairIndex;
    setKeypairs(newKeypairs);
    setActiveKeypairIndex(newActiveIndex);
    saveKeypairs(newKeypairs, newActiveIndex);
  }, [keypairs, activeKeypairIndex, saveKeypairs]);

  const handleSelectKeypair = useCallback((index: number) => {
    setActiveKeypairIndex(index);
    saveKeypairs(keypairs, index);
  }, [keypairs, saveKeypairs]);

  return {
    keypairs,
    setKeypairs,
    activeKeypairIndex,
    setActiveKeypairIndex,
    handleAddKeypair,
    handleDeleteKeypair,
    handleSelectKeypair
  };
};