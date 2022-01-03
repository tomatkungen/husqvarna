import React, { useContext, useState } from 'react';
import { eActiveState } from '../../enums/enums';
import { iTodo } from '../../interfaces/interfaces';
import { TodoContext } from '../../provider/todo-provider';
import { TodoItem } from './todo-item/todo-item';

export const Body: React.FC = () => {
  const [checkboxAll, setCheckboxAll] = useState<boolean>(false);
  const { todos, toggleAll, activeState } = useContext(TodoContext);

  const handleToggleAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;

    setCheckboxAll(checked);
    toggleAll(checked);
  };

  const showTodoItem = (todoItem: iTodo): boolean => {
    if (activeState === eActiveState.ALL_TODOS) {
      return true;
    }

    if (activeState === eActiveState.ACTIVE_TODOS) {
      return todoItem.completed === false;
    }

    if (activeState === eActiveState.COMPLETED_TODOS) {
      return todoItem.completed === true;
    }

    return true;
  };

  return (
    <section className={'main'}>
      <input
        id="toggle-all"
        className={'toggle-all'}
        type="checkbox"
        checked={checkboxAll}
        onChange={handleToggleAll}
      />
      <label htmlFor="toggle-all">{'Mark all as complete'}</label>
      <ul className={'todo-list'}>
        {todos.map((todo, index) => (
          <React.Fragment key={index}>
            {showTodoItem(todo) && <TodoItem item={todo} />}
          </React.Fragment>
        ))}
      </ul>
    </section>
  );
};
