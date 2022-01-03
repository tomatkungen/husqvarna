import React, { useContext } from 'react';
import { eActiveState } from '../../enums/enums';
import { TodoContext } from '../../provider/todo-provider';
import { pluralize } from '../../utils/pluralize';

export const Footer = () => {
  const { activeState, todos, removeCompleted } = useContext(TodoContext);

  if (todos.length === 0) {
    return <></>;
  }

  const handleClearCompleted = () => {
    removeCompleted();
  };

  const hasCompletedTodos = (): boolean => {
    return todos.some((todo) => todo.completed === true);
  };

  return (
    <footer className={'footer'}>
      <span className={'todo-count'}>
        <strong>{`${todos.length}`}</strong>
        {` ${pluralize(todos.length, 'item')} left`}
      </span>
      <ul className={'filters'}>
        <li>
          <a
            className={activeState === eActiveState.ALL_TODOS ? 'selected' : ''}
            href="#/"
          >
            {'All'}
          </a>
        </li>
        <li>
          <a
            href="#/active"
            className={
              activeState === eActiveState.ACTIVE_TODOS ? 'selected' : ''
            }
          >
            {'Active'}
          </a>
        </li>
        <li>
          <a
            className={
              activeState === eActiveState.COMPLETED_TODOS ? 'selected' : ''
            }
            href="#/completed"
          >
            {'Completed'}
          </a>
        </li>
      </ul>
      {hasCompletedTodos() && (
        <button className={'clear-completed'} onClick={handleClearCompleted}>
          {'Clear completed'}
        </button>
      )}
    </footer>
  );
};
