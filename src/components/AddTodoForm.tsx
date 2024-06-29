import { Form } from './Form/Form';
import { FormProvider } from './Form/FormContext';
import { Input } from './Form/Input';
import { FormData } from './Form/types';
import './AddTodoForm.scss';

interface AddTodoFormProps {
  addTodo: (todoTitle: string, context: string) => void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const handleSubmit = (data: FormData) => {
    addTodo(data.todoTitle, data.content);
  };

  return (
    <div className='add-todo-form'>
      <FormProvider>
        <Form onSubmit={handleSubmit}>
          <Input name='todoTitle' label='제목' />
          <Input name='content' label='내용' />
          <button type='submit'>제출</button>
        </Form>
      </FormProvider>
    </div>
  );
};

export default AddTodoForm;
