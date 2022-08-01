import ChatbotHeader from "../../molecules/ChatbotHeader";
import ChatBubble from "../../molecules/ChatBubble";
import ChatTextbox from "../../molecules/ChatTextbox";
import style from './Chatbot.module.scss';

const Chatbot: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <ChatbotHeader personName="Muhammad Rafiudin" />
      <div className={style.chatContainer}>
      <ChatBubble
        withTip
        type="sender"
        message="Hi rafi :))!"
        timeStamp="11:30 AM"
      />
      <ChatBubble
        type="sender"
        message="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
        timeStamp="11:30 AM"
      />
       <ChatBubble
        type="sender"
        message="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
        timeStamp="11:30 AM"
      />
       <ChatBubble
        type="sender"
        message="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
        timeStamp="11:30 AM"
      />
       <ChatBubble
        type="sender"
        message="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
        timeStamp="11:30 AM"
      />

      <ChatBubble
        withTip
        type="receipt"
        message="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
        timeStamp="11:30 AM"
      />
      </div>
      <ChatTextbox />
    </div>
  );
};

export default Chatbot;
