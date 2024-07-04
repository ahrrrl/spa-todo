import { FormData, Formatters } from '../../hooks/useForm/types';

export const createFormatters = <T extends FormData>(): Formatters<T> =>
  ({
    todoTitle: (value: string) => value.trim(),
    content: (value: string) => value.trim(),
  } as Formatters<T>);
