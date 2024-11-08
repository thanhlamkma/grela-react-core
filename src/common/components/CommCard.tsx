import { Card, CardProps, Flex } from 'antd';
import classNames from 'classnames';
import clsx from 'clsx';

export type CommCardProps = CardProps & {};

const CommCard = (props: CommCardProps) => {
  return (
    <Card
      {...props}
      title={null}
      extra={null}
      className={clsx(classNames('comm-card', props.className))}
    >
      {/* Title */}
      {(!!props.title || !!props.extra) && (
        <Flex className='mb-4' align='center' justify='space-between' gap={16}>
          <h1 className='comm-title'>{props.title}</h1>

          {props.extra}
        </Flex>
      )}

      {/* Body */}
      {props.children}
    </Card>
  );
};

export default CommCard;
