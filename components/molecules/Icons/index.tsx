import Icon from '../../atoms/IconSet';

interface Props {
  style?: string;
}

const Icons: React.FC<Props> = ({ style }) => {
  return (
    <div className={style}>
      <Icon
        type="github"
        onClickIcon={() => window.open('https://github.com/thatrafi', '_blank')}
      />
      <Icon
        type="linkedIn"
        onClickIcon={() =>
          window.open('https://www.linkedin.com/in/muhammadrafiudin/', '_blank')
        }
      />
      <Icon
        type="mail"
        onClickIcon={() => window.open('mailto:thatrafibusiness@gmail.com?')}
      />
    </div>
  );
};

export default Icons;
