import { RefObject, ChangeEvent } from 'react';

export type FormData = Record<string, string | File | null>;

export type FormErrors<T extends FormData> = Partial<Record<keyof T, string>>;

export type FormRefs<T extends FormData> = {
  [K in keyof T]: RefObject<HTMLInputElement>;
};

export type ValidatorFn<T> = (value: T) => string | undefined;

export type FormatterFn<T> = (value: T) => T;

export type Validators<T extends FormData> = {
  [K in keyof T]: ValidatorFn<T[K]>;
};

export type Formatters<T extends FormData> = {
  [K in keyof T]: FormatterFn<T[K]>;
};

export type InputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => void;
