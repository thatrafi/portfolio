import React, { useRef } from 'react';
import Icon from '../../atoms/IconSet';
import TextBox from '../../atoms/TextBox';
import style from './ChatTextbox.module.scss';

const ChatTextbox: React.FC = () => {
  const textboxRef = useRef<HTMLInputElement>(null);
  const handler = () => console.log(textboxRef.current?.value);

  return (
    <div className={style.wrapper}>
      <TextBox name="msg" placeholder="Start typing..." ref={textboxRef} />
      <Icon type={'airPlane'} onClickIcon={handler} />
    </div>
  );
};

export default ChatTextbox;
