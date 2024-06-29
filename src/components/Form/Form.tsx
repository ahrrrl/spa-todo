import React, { useContext } from 'react';
import { FormContext } from './FormContext';
import { FormData } from './types';
import { validateForm } from './utils/validation';

interface FormProps {
  onSubmit: (data: FormData) => void;
  children: React.ReactNode;
}

export const Form: React.FC<FormProps> = ({ onSubmit, children }) => {
  const context = useContext(FormContext);
  if (!context) throw new Error('Form must be used within a FormProvider');
  const { formData, setErrors, resetForm } = context;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    console.log(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      onSubmit(formData);
      resetForm();
    } else {
      const firstErrorField = Object.keys(newErrors)[0];
      context.focusInput(firstErrorField);
    }
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
};
