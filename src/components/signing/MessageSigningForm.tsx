import React, { useState } from 'react';
import { signMessage } from '../../utils/crypto';
import { Keypair } from '../../types';
import toast from 'react-hot-toast';

interface MessageSigningFormProps {
  activeKeypair?: Keypair;
}

export const MessageSigningForm: React.FC<MessageSigningFormProps> = ({ activeKeypair }) => {
  const [message, setMessage] = useState('');
  const [signature, setSignature] = useState('');

  const handleSignMessage = () => {
    if (!message) {
      toast.error('Please enter a message to sign');
      return;
    }

    if (!activeKeypair) {
      toast.error('No active keypair selected');
      return;
    }

    try {
      const newSignature = signMessage(message, activeKeypair.privateKey);
      setSignature(newSignature);
      toast.success('Message signed successfully');
    } catch (error) {
      toast.error('Failed to sign message');
    }
  };

  return (
    <div className="space-y-4">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter message to sign..."
        className="w-full h-32 p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
      />
      <button
        onClick={handleSignMessage}
        disabled={!activeKeypair}
        className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:bg-gray-400"
      >
        Sign Message
      </button>
      {signature && (
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Signature
          </label>
          <textarea
            readOnly
            value={signature}
            className="mt-1 w-full h-24 p-3 bg-gray-50 border border-gray-300 rounded-md"
          />
        </div>
      )}
    </div>
  );
};