export interface Keypair {
  publicKey: string;
  privateKey: string;
  createdAt: number;
  name: string;
}

export interface EncryptedStorage {
  keypairs: Keypair[];
  activeKeypairIndex: number;
}

export interface AuthState {
  isAuthenticated: boolean;
  masterPassword?: string;
}