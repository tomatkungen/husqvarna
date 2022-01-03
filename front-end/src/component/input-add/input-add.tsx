import React, { useState } from 'react';
import { eKey } from '../../enums/enums';

type InputAdd = {
  onKeyEnter: (value: string) => void;
};

export const InputAdd: React.FC<InputAdd> = ({ onKeyEnter }) => {
  const [value, setValue] = useState<string>('');

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== eKey.ENTER_KEY) {
      return;
    }

    if (event.key === eKey.ENTER_KEY) {
      if (onKeyEnter && value !== '') {
        onKeyEnter(value.trim());
        setValue('');
      }
    }

    event.preventDefault();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <input
      className={'new-todo'}
      placeholder="What needs to be done?"
      autoFocus={true}
      onKeyDown={handleKeyDown}
      onChange={handleChange}
      value={value}
    />
  );
};
