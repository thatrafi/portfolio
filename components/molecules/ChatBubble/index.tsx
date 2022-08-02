import style from './ChatBubble.module.scss';
import clsx from 'clsx';

interface Props {
  type: 'sender' | 'receipt';
  withTip?: boolean;
  message: string;
  timeStamp: string;
}

const ChatBubble: React.FC<Props> = ({
  type,
  withTip = false,
  message,
  timeStamp,
}) => {
  const classes =
    type === 'sender'
      ? withTip
        ? style.wrapperOneTip
        : style.wrapperOne
      : withTip
      ? style.wrapperTwoTip
      : style.wrapperTwo;
  return (
    <div className={classes}>
      <div className={clsx(style.bubbleContent, style.content)}>
        <div className={style.bubbleText}>{message}</div>
        <div className={style.bubbleInfo}>
          <div className={style.timestamp}>{timeStamp}</div>
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
