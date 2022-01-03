import React, { useContext, useState } from 'react';
import { eKey } from '../../../enums/enums';
import { iTodo } from '../../../interfaces/interfaces';
import { TodoContext } from '../../../provider/todo-provider';

type TodoItem = {
  item: iTodo;
};

export const TodoItem: React.FC<TodoItem> = ({ item }) => {
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const [editValue, setEditValue] = useState<string>(item.name);
  const { update, remove } = useContext(TodoContext);

  const handleCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    update({ ...item, completed: event.target.checked });
  };

  const handleShowEdit = () => {
    setEditValue(item.name);
    setShowEdit(true);
  };

  const handleRemoveTodo = () => {
    remove(item);
  };

  const handleEditTodo = (
    event: React.FocusEvent<HTMLInputElement, Element>
  ) => {
    const value = event.target.value;

    if (value) {
      update({ ...item, name: value.trim() });
    } else {
      handleRemoveTodo();
    }

    setShowEdit(false);
  };

  const handleEditName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditValue(event.target.value);
  };

  const handleEditKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === eKey.ESCAPE_KEY || event.key === eKey.ENTER_KEY) {
      setShowEdit(false);
    }

    if (event.key === eKey.ENTER_KEY) {
      update({ ...item, name: editValue.trim() });

      return;
    }
  };

  return (
    <li
      className={`${item.completed ? 'completed' : ''} ${
        showEdit ? 'editing' : ''
      }`}
    >
      <div className={'view'}>
        <input
          className={'toggle'}
          type="checkbox"
          checked={item.completed}
          onChange={handleCheckBox}
        />
        <label onDoubleClick={handleShowEdit}>{item.name}</label>
        <button className="destroy" onClick={handleRemoveTodo} />
      </div>
      {showEdit && (
        <input
          className={'edit'}
          value={editValue}
          autoFocus={showEdit}
          onBlur={handleEditTodo}
          onChange={handleEditName}
          onKeyDown={handleEditKeyDown}
        />
      )}
    </li>
  );
};
