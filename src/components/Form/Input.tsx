import React, { useContext, useRef, useEffect } from 'react';
import { FormContext } from './FormContext';

interface InputProps {
  name: string;
  label: string;
  type?: string;
}

export const Input: React.FC<InputProps> = ({ name, label, type = 'text' }) => {
  const context = useContext(FormContext);
  if (!context) throw new Error('Input must be used within a FormProvider');
  const { formData, setFormData, errors, registerInput } = context;

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      registerInput(name, inputRef.current);
    }
  }, [name, registerInput]);

  useEffect(() => {
    setFormData((prev) => {
      if (prev[name] === undefined) {
        return { ...prev, [name]: '' };
      }
      return prev;
    });
  }, [name, setFormData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [name]: e.target.value }));
  };

  return (
    <div className='input-container'>
      <label htmlFor={name}>{label}</label>
      <input
        ref={inputRef}
        type={type}
        id={name}
        name={name}
        value={formData[name] || ''}
        onChange={handleChange}
      />
      {errors[name] && <span className='error-message'>{errors[name]}</span>}
    </div>
  );
};
