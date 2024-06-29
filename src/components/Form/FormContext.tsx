import React, { createContext, useState, useRef, ReactNode } from 'react';
import { FormData, FormErrors, InputRef } from './types';

interface FormContextType {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  errors: FormErrors;
  setErrors: React.Dispatch<React.SetStateAction<FormErrors>>;
  registerInput: (name: string, ref: InputRef) => void;
  focusInput: (name: string) => void;
  resetForm: () => void;
}

export const FormContext = createContext<FormContextType | undefined>(
  undefined
);

export const FormProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<FormData>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const inputRefs = useRef<{ [key: string]: InputRef }>({});
  const registerInput = (name: string, ref: InputRef) => {
    inputRefs.current[name] = ref;
  };

  const focusInput = (name: string) => {
    inputRefs.current[name]?.focus();
  };

  const resetForm = () => {
    const emptyForm = Object.keys(inputRefs.current).reduce((acc, key) => {
      acc[key] = '';
      return acc;
    }, {} as FormData);
    setFormData(emptyForm);
    setErrors({});
    const firstInputName = Object.keys(inputRefs.current)[0];
    if (firstInputName) {
      focusInput(firstInputName);
    }
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        errors,
        setErrors,
        registerInput,
        focusInput,
        resetForm,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
