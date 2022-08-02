import React, { useRef } from 'react';
import Icon from '../../atoms/IconSet';
import TextBox from '../../atoms/TextBox';
import style from './ChatTextbox.module.scss';

interface Props {
  onUserTyped?: Function;
}

const ChatTextbox: React.FC<Props> = ({ onUserTyped }) => {
  const textboxRef = useRef<HTMLInputElement>(null);
  const handler = () => {
    onUserTyped && onUserTyped(textboxRef.current?.value);
  };

  return (
    <div className={style.wrapper}>
      <TextBox name="msg" placeholder="Start typing..." ref={textboxRef} />
      <Icon type={'airPlane'} onClickIcon={handler} />
    </div>
  );
};

export default ChatTextbox;
