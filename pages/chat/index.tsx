import { useState } from 'react';
import Row from '../../components/atoms/Row/Row';
import Chatbot, {
  MessageState,
  MessageStateList,
} from '../../components/organisms/Chatbot';

const ChatbotPage: React.FC = () => {
  const [messages, setMessages] = useState<MessageStateList>([]);
  const userReplyHandler = async (data: MessageState) => {
    const response = await fetch('/api/classify', {
      method: 'POST',
      body: JSON.stringify({ question: data.message }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const botReply = await response.json();
    
    setMessages((prevState) => [...prevState, data]);
    setTimeout(function () {
      //your code to be executed after 1 second
      setMessages((prevState) => [
        ...prevState,
        { message: 'Typing...', type: 'receipt', timeStamp: 'now' },
      ]);
    }, 1000);

    setTimeout(function () {
      //your code to be executed after 1 second
      setMessages((prevState) => {
        const newData = [...prevState];
        newData[newData.length - 1] = {
          message: botReply.response,
          type: 'receipt',
          timeStamp: 'now',
        };
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
