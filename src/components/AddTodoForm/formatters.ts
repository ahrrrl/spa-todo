import { FormData, Formatters } from '../../hooks/useForm/types';

export const createFormatters = <T extends FormData>(): Formatters<T> =>
  ({
    todoTitle: (value: string) => value,
    content: (value: string) => value,
  } as Formatters<T>);
