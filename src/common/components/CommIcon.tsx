import classNames from 'classnames';
import { ReactSVG } from 'react-svg';

export type CommIconType = 'icon-react' | 'icon-noti' | 'icon-noti-empty' | 'icon-search';

interface CommIconProps {
  icon: CommIconType;
  className?: string;
}

const CommIcon: React.FC<CommIconProps> = ({ icon, className }: CommIconProps) => {
  return <ReactSVG src={`/icons/${icon}.svg`} className={classNames('comm-icon', className)} />;
};

export default CommIcon;
