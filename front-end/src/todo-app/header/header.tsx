import React, { useContext } from 'react';
import { InputAdd } from '../../component/input-add/input-add';
import { TodoContext } from '../../provider/todo-provider';

type Header = {
  title: string;
};

export const Header: React.FC<Header> = ({ title }) => {
  const { add } = useContext(TodoContext);

  const handleChange = (value: string) => {
    add(value);
  };

  return (
    <header className={'header'} data-testid={'header'}>
      <h1>{title}</h1>
      <InputAdd onKeyEnter={handleChange} />
    </header>
  );
};
