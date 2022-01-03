import './../../node_modules/director/build/director.js';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { eActiveState } from '../enums/enums.js';
import { iTodo, iTodos } from '../interfaces/interfaces.js';
import { getLocalStorageTodo } from '../utils/get-local-storage-todo.js';
import { guid } from '../utils/guid.js';
import { setLocalStorageTodo } from '../utils/set-local-storage-todo.js';

declare var Router: any;

export const TodoContext = React.createContext({
  add: (_: string) => {},
  update: (_: iTodo) => {},
  remove: (_: iTodo) => {},
  toggleAll: (_: boolean) => {},
  removeCompleted: () => {},
  activeState: eActiveState.ALL_TODOS,
  todos: [] as iTodos,
});

export const TodoProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [todos, setTodos] = useState<iTodos>(getLocalStorageTodo());
  const [activeState, setActiveState] = useState<eActiveState>(
    eActiveState.ALL_TODOS
  );

  useEffect(() => {
    const router = Router({
      '/': () => {
        setActiveState(eActiveState.ALL_TODOS);
      },
      '/active': () => {
        setActiveState(eActiveState.ACTIVE_TODOS);
      },
      '/completed': () => {
        setActiveState(eActiveState.COMPLETED_TODOS);
      },
    });

    router.init('/');
  }, []);

  const add = (name: string) => {
    if (name === '') return;

    setTodos((prev) => {
      prev.push({
        id: guid(),
        name,
        completed: false,
      });

      setLocalStorageTodo(prev);
      return [...prev];
    });
  };

  const update = (todo: iTodo) => {
    setTodos((prevTodos) => {
      prevTodos.forEach((t) => {
        if (t.id === todo.id) {
          t.completed = todo.completed;
          t.name = todo.name;
        }
      });

      setLocalStorageTodo(prevTodos);
      return [...prevTodos];
    });
  };

  const remove = (todo: iTodo) => {
    setTodos((prevTodos) => {
      const findIndex = prevTodos.findIndex((t) => t.id === todo.id);

      if (findIndex !== -1) {
        prevTodos.splice(findIndex, 1);
      }

      setLocalStorageTodo(prevTodos);
      return [...prevTodos];
    });
  };

  const toggleAll = (toggle: boolean) => {
    setTodos((prevTodos) => {
      prevTodos.forEach((t) => {
        t.completed = toggle;
      });

      setLocalStorageTodo(prevTodos);
      return [...prevTodos];
    });
  };

  const removeCompleted = () => {
    setTodos((prevTodos) => {
      const newTodos = prevTodos.filter((t) => t.completed === false);

      setLocalStorageTodo(newTodos);
      return [...newTodos];
    });
  };
  return (
    <TodoContext.Provider
      value={{
        add,
        update,
        remove,
        toggleAll,
        removeCompleted,
        activeState,
        todos,
      }}
    >
      {`${JSON.stringify(todos)}`}
      {children}
    </TodoContext.Provider>
  );
};
