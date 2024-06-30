import React, { useContext, useRef, useEffect } from 'react';
import { FormContext } from './FormContext';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  formatValue?: (value: string) => string;
  parseValue?: (value: string) => string;
}

export const Input: React.FC<InputProps> = ({
  name,
  label,
  type = 'text',
  formatValue = (v) => v,
  parseValue = (v) => v,
  ...props
}) => {
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
    const rawValue = e.target.value;
    const parsedValue = parseValue(rawValue);
    setFormData((prev) => ({ ...prev, [name]: parsedValue }));
  };

  return (
    <div className='input-container'>
      <label htmlFor={name}>{label}</label>
      <input
        ref={inputRef}
        type={type}
        id={name}
        name={name}
        value={formatValue(formData[name] || '')}
        onChange={handleChange}
        {...props}
      />
      {errors[name] && <span className='error-message'>{errors[name]}</span>}
    </div>
  );
};
