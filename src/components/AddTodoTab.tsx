import React, { useState, FormEvent, useCallback } from 'react';

interface AddTodoTabProps {
  addTodo: (title: string, context: string) => void;
}

const AddTodoTab: React.FC<AddTodoTabProps> = React.memo(({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [context, setContext] = useState('');

  const handleAddTodo = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      addTodo(title, context);
      setTitle('');
      setContext('');
    },
    [title, context, addTodo]
  );

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='제목'
          required
        />
        <input
          value={context}
          onChange={(e) => setContext(e.target.value)}
          placeholder='내용'
          required
        />
        <button type='submit'>추가</button>
      </form>
    </div>
  );
});

export default AddTodoTab;
