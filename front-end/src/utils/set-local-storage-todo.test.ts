/**
 * @jest-environment jsdom
 */
import { setLocalStorageTodo } from './set-local-storage-todo';

describe('setLocalStorageTodo', () => {
  it('should set todos items to localstorage', () => {
    jest.spyOn(window.localStorage.__proto__, 'setItem');
    window.localStorage.__proto__.setItem = jest.fn();

    const todos = [{ id: 'id', name: 'name', completed: true }];
    setLocalStorageTodo(todos);

    expect(localStorage.setItem).toHaveBeenCalledWith(
      'todos',
      JSON.stringify(todos)
    );
  });
});
