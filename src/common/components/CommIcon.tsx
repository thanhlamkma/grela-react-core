import classNames from 'classnames';
import { ReactSVG } from 'react-svg';

export type CommIconType =
  | 'icon-react'
  | 'icon-noti'
  | 'icon-noti-empty'
  | 'icon-search'
  | 'icon-chevron-down'
  | 'icon-flag-en'
  | 'icon-flag-ko'
  | 'icon-flag-vn';

interface CommIconProps {
  icon: CommIconType;
  className?: string;
}

const CommIcon: React.FC<CommIconProps> = ({ icon, className }: CommIconProps) => {
  return <ReactSVG src={`/icons/${icon}.svg`} className={classNames('comm-icon cursor-pointer', className)} />;
};

export default CommIcon;
