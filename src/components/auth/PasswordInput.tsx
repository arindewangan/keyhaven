import React from 'react';

interface PasswordInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  isFirst?: boolean;
  isLast?: boolean;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  value,
  onChange,
  placeholder,
  isFirst = true,
  isLast = true,
}) => (
  <input
    type="password"
    required
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className={`appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 ${
      isFirst ? 'rounded-t-md' : ''
    } ${isLast ? 'rounded-b-md' : ''} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
    placeholder={placeholder}
  />
);