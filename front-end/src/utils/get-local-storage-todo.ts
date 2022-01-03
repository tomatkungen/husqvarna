import { iTodos } from '../interfaces/interfaces';

const TODO_KEY = 'todos';

export const getLocalStorageTodo = (): iTodos => {
  const value = window.localStorage.getItem(TODO_KEY);

  if (!value) {
    return [];
  }

  return JSON.parse(value) || [];
};
