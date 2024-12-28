import { EncryptedStorage } from '../types';
import { encryptData, decryptData } from './crypto';

const STORAGE_KEY = 'maci-keypair-manager';

export const saveToStorage = (data: EncryptedStorage, password: string): void => {
  const encrypted = encryptData(data, password);
  localStorage.setItem(STORAGE_KEY, encrypted);
};

export const loadFromStorage = (password: string): EncryptedStorage | null => {
  const storedData = localStorage.getItem(STORAGE_KEY);
  if (!storedData) return null;
  
  try {
    return decryptData(storedData, password) as EncryptedStorage;
  } catch (error) {
    console.error('Failed to decrypt storage:', error);
    return null;
  }
};

export const clearStorage = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};