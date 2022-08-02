import React from 'react';
import style from './TextBox.module.scss';

interface Props {
  name: string;
  placeholder?: string;
  onChange?: Function;
}

const TextBox = React.forwardRef<HTMLInputElement, Props>(
  ({ name, placeholder, onChange }, ref) => {
    return (
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={() => onChange}
        className={style.input}
        ref={ref}
      />
    );
  }
);

export default TextBox;
