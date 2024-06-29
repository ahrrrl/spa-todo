import { FormData, FormErrors } from '../types';

export const validateForm = (data: FormData): FormErrors => {
  const errors: FormErrors = {};

  Object.entries(data).forEach(([key, value]) => {
    if (!value || value.trim().length === 0) {
      errors[key] = '이 필드는 필수입니다.';
    } else if (key === 'title' && value.length > 16) {
      errors[key] = '제목은 최대 16자까지 입력할 수 있습니다';
    }
    if (key === 'title') {
      if (value.trim().length === 0) {
        errors[key] = '제목을 입력해 주세요.';
      } else if (value.length > 16) {
        errors[key] = '제목은 최대 16자까지 입력할 수 있습니다';
      }
    }

    if (key === 'content') {
      if (value.trim().length === 0) {
        errors[key] = '내용을 입력해주세요.';
      } else if (value.length > 80) {
        errors[
          key
        ] = `내용은 최대 80자까지 입력할 수 있습니다 : ${value.length}`;
      }
    }
  });

  return errors;
};