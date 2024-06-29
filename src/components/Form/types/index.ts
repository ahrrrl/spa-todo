export interface FormData {
  [key: string]: string;
}

export interface FormErrors {
  [key: string]: string;
}

export interface InputRef extends HTMLInputElement {
  focus: () => void;
}
