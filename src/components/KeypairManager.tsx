import React from 'react';
import { Plus } from 'lucide-react';
import { generateKeypair } from '../utils/crypto';
import { Keypair } from '../types';
import { KeypairCard } from './keypair/KeypairCard';
import { MessageSigningForm } from './signing/MessageSigningForm';
import toast from 'react-hot-toast';

interface KeypairManagerProps {
  keypairs: Keypair[];
  activeKeypairIndex: number;
  onAddKeypair: (keypair: Keypair) => void;
  onDeleteKeypair: (index: number) => void;
  onSelectKeypair: (index: number) => void;
  onLogout: () => void;
}

export const KeypairManager: React.FC<KeypairManagerProps> = ({
  keypairs,
  activeKeypairIndex,
  onAddKeypair,
  onDeleteKeypair,
  onSelectKeypair,
  onLogout,
}) => {
  const handleGenerateKeypair = () => {
    const newKeypair = generateKeypair();
    onAddKeypair(newKeypair);
    toast.success('New keypair generated successfully');
  };

  const handleExportKeypair = (keypair: Keypair) => {
    const keypairData = JSON.stringify(keypair, null, 2);
    const blob = new Blob([keypairData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `keypair-${keypair.name}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('Keypair exported successfully');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">KeyHaven - A-MACI Keypair Manager</h1>
            <button
              onClick={onLogout}
              className="px-4 py-2 text-sm text-red-600 hover:text-red-700"
            >
              Logout
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">Keypairs</h2>
                <button
                  onClick={handleGenerateKeypair}
                  className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Generate New Keypair
                </button>
              </div>

              <div className="space-y-4">
                {keypairs.map((keypair, index) => (
                  <KeypairCard
                    key={index}
                    keypair={keypair}
                    isActive={index === activeKeypairIndex}
                    onSelect={() => onSelectKeypair(index)}
                    onExport={() => handleExportKeypair(keypair)}
                    onDelete={() => onDeleteKeypair(index)}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800">Sign Message</h2>
              <MessageSigningForm
                activeKeypair={keypairs[activeKeypairIndex]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};