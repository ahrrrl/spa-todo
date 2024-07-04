import React, { useRef } from 'react';
import Input from '../input';
import useForm from '../../hooks/useForm';
import { createFormatters } from './formatters';
import { createValidators } from './validators';
import { FormData, FormRefs } from '../../hooks/useForm/types';
import useTodo from '../../hooks/useTodo';
import './AddTodoForm.scss';

interface TodoFormData extends FormData {
  todoTitle: string;
  content: string;
}

const initialData: TodoFormData = {
  todoTitle: '',
  content: '',
};

const AddTodoForm: React.FC = () => {
  const formatters = createFormatters<TodoFormData>();
  const validators = createValidators<TodoFormData>();
  const { addTodo } = useTodo();
  const { formData, setFormData, errors, handleInputChange, handleSubmit } =
    useForm(initialData, formatters, validators);

  const refs: FormRefs<TodoFormData> = {
    todoTitle: useRef<HTMLInputElement>(null),
    content: useRef<HTMLInputElement>(null),
  };

  const onSuccess = (formData: TodoFormData) => {
    addTodo(formData.todoTitle, formData.content);
    setFormData(initialData); // 입력 필드를 초기화
    refs.todoTitle.current?.focus(); // 첫 번째 입력 필드에 포커스
  };
  const onError = () => {};

  return (
    <div className='add-todo-form'>
      <form onSubmit={(event) => handleSubmit(event, refs, onSuccess, onError)}>
        <Input
          ref={refs.todoTitle}
          type='text'
          name='todoTitle'
          value={formData.todoTitle}
          onChange={handleInputChange}
          placeholder='할 일 제목'
          error={errors.todoTitle}
        />
        <Input
          ref={refs.content}
          type='text'
          name='content'
          value={formData.content}
          onChange={handleInputChange}
          placeholder='할 일 내용'
          error={errors.content}
        />
        <button type='submit'>추가</button>
      </form>
    </div>
  );
};

export default AddTodoForm;
