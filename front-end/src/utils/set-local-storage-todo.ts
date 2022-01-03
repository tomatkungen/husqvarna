import { iTodos } from '../interfaces/interfaces';

const TODO_KEY = 'todos';

export const setLocalStorageTodo = (data: iTodos) => {
  window.localStorage.setItem(TODO_KEY, JSON.stringify(data));
};
