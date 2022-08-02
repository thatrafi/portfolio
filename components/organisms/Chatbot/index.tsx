import { useEffect, useState } from 'react';
import ChatbotHeader from '../../molecules/ChatbotHeader';
import ChatBubble from '../../molecules/ChatBubble';
import ChatTextbox from '../../molecules/ChatTextbox';
import style from './Chatbot.module.scss';

export interface MessageState {
  message: string;
  timeStamp: string;
  type: 'sender' | 'receipt';
}

export type MessageStateList = MessageState[];

interface Props {
  onUserReply?: Function;
  messages?: MessageStateList;
}

const Chatbot: React.FC<Props> = ({ onUserReply, messages }) => {
  const useTypedHandler = (data: string) => {
    const newMessage = {
      message: data,
      timeStamp: 'Now',
      type: 'sender',
    } as MessageState;
    onUserReply && onUserReply(newMessage);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <ChatbotHeader personName="Muhammad Rafiudin" />
      </div>
      <div className={style.chatContainer}>
        {messages &&
          messages.map((data, key) => (
            <ChatBubble
              key={key}
              type={data.type}
              message={data.message}
              timeStamp={data.timeStamp}
            />
          ))}
      </div>
      <div className={style.footer}>
        <ChatTextbox onUserTyped={useTypedHandler} />
      </div>
    </div>
  );
};

export default Chatbot;
