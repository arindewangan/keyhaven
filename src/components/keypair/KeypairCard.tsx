import React from 'react';
import { Key, Check, RefreshCw, Download, Trash2 } from 'lucide-react';
import { Keypair } from '../../types';

interface KeypairCardProps {
  keypair: Keypair;
  isActive: boolean;
  onSelect: () => void;
  onExport: () => void;
  onDelete: () => void;
}

export const KeypairCard: React.FC<KeypairCardProps> = ({
  keypair,
  isActive,
  onSelect,
  onExport,
  onDelete,
}) => (
  <div
    className={`p-4 border rounded-lg ${
      isActive ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'
    }`}
  >
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <Key className="h-5 w-5 text-indigo-600" />
        <span className="font-medium">{keypair.name}</span>
      </div>
      <div className="flex space-x-2">
        {isActive && <Check className="h-5 w-5 text-green-500" />}
        <button
          onClick={onSelect}
          className="p-1 text-gray-600 hover:text-indigo-600"
        >
          <RefreshCw className="h-5 w-5" />
        </button>
        <button
          onClick={onExport}
          className="p-1 text-gray-600 hover:text-indigo-600"
        >
          <Download className="h-5 w-5" />
        </button>
        <button
          onClick={onDelete}
          className="p-1 text-gray-600 hover:text-red-600"
        >
          <Trash2 className="h-5 w-5" />
        </button>
      </div>
    </div>
    <div className="mt-2 text-sm text-gray-500">
      <div>Public Key: {keypair.publicKey.slice(0, 16)}...</div>
      <div>Created: {new Date(keypair.createdAt).toLocaleDateString()}</div>
    </div>
  </div>
);