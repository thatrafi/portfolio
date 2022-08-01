import style from './ChatbotHeader.module.scss';

interface Props {
  personName?: string;
  status?: string;
}

const ChatbotHeader: React.FC<Props> = ({ personName, status }) => {
  return (
    <div className={style.wrapper}>
      {personName ? <div className={style.personName}>{personName}</div> : 'Anonymouse'}
      <span className="caption">{status || 'online'}</span>
    </div>
  );
};

export default ChatbotHeader;
