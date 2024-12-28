import { box, randomBytes, sign } from 'tweetnacl';
import { encodeBase64, decodeBase64, encodeUTF8, decodeUTF8 } from 'tweetnacl-util';
import CryptoJS from 'crypto-js';

export const generateKeypair = () => {
  const keypair = sign.keyPair();
  return {
    publicKey: encodeBase64(keypair.publicKey),
    privateKey: encodeBase64(keypair.secretKey),
    createdAt: Date.now(),
    name: `Keypair ${new Date().toLocaleDateString()}`
  };
};

export const signMessage = (message: string, privateKey: string) => {
  const messageUint8 = decodeUTF8(message);
  const privateKeyUint8 = decodeBase64(privateKey);
  const signature = sign.detached(messageUint8, privateKeyUint8);
  return encodeBase64(signature);
};

export const verifySignature = (message: string, signature: string, publicKey: string) => {
  const messageUint8 = decodeUTF8(message);
  const signatureUint8 = decodeBase64(signature);
  const publicKeyUint8 = decodeBase64(publicKey);
  return sign.detached.verify(messageUint8, signatureUint8, publicKeyUint8);
};

export const encryptData = (data: any, password: string) => {
  const dataStr = JSON.stringify(data);
  return CryptoJS.AES.encrypt(dataStr, password).toString();
};

export const decryptData = (encryptedData: string, password: string) => {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedData, password);
    const decryptedStr = bytes.toString(CryptoJS.enc.Utf8);
    return JSON.parse(decryptedStr);
  } catch (error) {
    throw new Error('Decryption failed');
  }
};