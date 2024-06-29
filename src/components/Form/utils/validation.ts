import { FormData, FormErrors } from '../types';

// HTML 및 스크립트 태그 필터링 함수
const sanitizeInput = (input: string): string => {
  const element = document.createElement('div');
  element.innerText = input;
  return element.innerHTML;
};

export const validateForm = (data: FormData): FormErrors => {
  const errors: FormErrors = {};

  Object.entries(data).forEach(([key, value]) => {
    const sanitizedValue = sanitizeInput(value);

    if (key === 'todoTitle') {
      if (sanitizedValue.trim().length === 0) {
        errors[key] = '제목을 입력해 주세요.';
      } else if (sanitizedValue.length > 16) {
        errors[
          key
        ] = `제목은 최대 16자까지 입력할 수 있습니다. 현재: ${sanitizedValue.length}자리`;
      } else if (sanitizedValue !== value) {
        errors[key] = '제목에 허용되지 않는 문자가 포함되어 있습니다.';
      }
    }

    if (key === 'content') {
      if (sanitizedValue.trim().length === 0) {
        errors[key] = '내용을 입력해주세요.';
      } else if (sanitizedValue.length > 80) {
        errors[
          key
        ] = `내용은 최대 80자까지 입력할 수 있습니다. 현재: ${sanitizedValue.length}자리`;
      } else if (sanitizedValue !== value) {
        errors[key] = '내용에 허용되지 않는 문자가 포함되어 있습니다.';
      }
    }
  });

  return errors;
};
