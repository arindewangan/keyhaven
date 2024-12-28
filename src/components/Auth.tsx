import React, { useState } from 'react';
import { Lock, KeyRound } from 'lucide-react';
import { PasswordInput } from './auth/PasswordInput';
import zxcvbn from 'zxcvbn';
import toast from 'react-hot-toast';

interface AuthProps {
  onAuth: (password: string) => void;
  isInitialSetup: boolean;
}

export const Auth: React.FC<AuthProps> = ({ onAuth, isInitialSetup }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isInitialSetup) {
      if (password !== confirmPassword) {
        toast.error('Passwords do not match');
        return;
      }
      
      const passwordStrength = zxcvbn(password);
      if (passwordStrength.score < 3) {
        toast.error('Password is too weak. Please choose a stronger password.');
        return;
      }
    }
    
    onAuth(password);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center">
            <Lock className="h-6 w-6 text-indigo-600" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            {isInitialSetup ? 'Set Master Password' : 'Unlock Manager'}
          </h2>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <PasswordInput
              value={password}
              onChange={setPassword}
              placeholder="Master Password"
              isLast={!isInitialSetup}
            />
            {isInitialSetup && (
              <PasswordInput
                value={confirmPassword}
                onChange={setConfirmPassword}
                placeholder="Confirm Master Password"
                isFirst={false}
              />
            )}
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <KeyRound className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" />
              </span>
              {isInitialSetup ? 'Set Password' : 'Unlock'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};