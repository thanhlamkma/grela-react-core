import { Card, CardProps } from 'antd';
import classNames from 'classnames';
import clsx from 'clsx';
import './comm-card.scss';

export type CommCardProps = CardProps & {};

const CommCard = (props: CommCardProps) => {
  return (
    <Card {...props} className={clsx(classNames('comm-card', props.className))}>
      {props.children}
    </Card>
  );
};

export default CommCard;
