/**
 * @jest-environment jsdom
 */
import { getLocalStorageTodo } from './get-local-storage-todo';

describe('getLocalStorageTodo', () => {
  beforeEach(() => {});

  it('should get empty array from localstorage', () => {
    const todos = getLocalStorageTodo();

    expect(todos).toEqual([]);
  });

  it('should get empty array from localstorage', () => {
    Storage.prototype.getItem = jest.fn(
      () => '[{"id":1,"name":"name","completed":false}]'
    );
    const todos = getLocalStorageTodo();

    expect(todos).toEqual([
      {
        id: 1,
        name: 'name',
        completed: false,
      },
    ]);
  });
});
