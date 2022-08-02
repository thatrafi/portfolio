import { useState } from 'react';
import Row from '../../components/atoms/Row/Row';
import Chatbot, {
  MessageState,
  MessageStateList,
} from '../../components/organisms/Chatbot';

const ChatbotPage: React.FC = () => {
  const [messages, setMessages] = useState<MessageStateList>([]);
  const userReplyHandler = (data: MessageState) => {
    setMessages((prevState: any) => [...prevState, data]);
    setTimeout(function () {
      //your code to be executed after 1 second
      setMessages((prevState: any) => [
        ...prevState,
        { message: 'Typing....', type: 'receipt', timeStamp: 'now' },
      ]);
    }, 1000);

    setTimeout(function () {
      //your code to be executed after 1 second
      setMessages((prevState: any) => {
        const newData = [...prevState];
        newData[newData.length - 1] = { message: 'ugh', type: 'receipt', timeStamp: 'now' };
        return newData;
      });
    }, 2000);
  };
  return (
    <Row>
      <Chatbot onUserReply={userReplyHandler} messages={messages} />
    </Row>
  );
};

export default ChatbotPage;