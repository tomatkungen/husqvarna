import React from 'react';
import { TodoProvider } from './provider/todo-provider';
import { TodoApp } from './todo-app/todo-app';

export const App: React.FC = () => {
  return (
    <TodoProvider>
      <TodoApp />
    </TodoProvider>
  );
};
