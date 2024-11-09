import { isEmpty } from 'lodash-es';
import { useMemo } from 'react';
import { ReactSVG } from 'react-svg';

export type CommIconType =
  | 'icon-react'
  | 'icon-noti'
  | 'icon-noti-empty'
  | 'icon-search'
  | 'icon-chevron-down'
  | 'icon-flag-en'
  | 'icon-flag-ko'
  | 'icon-flag-vn'
  | 'icon-calendar'
  | 'icon-sun'
  | 'icon-moon'
  | 'icon-check-circle'
  | 'icon-clock'
  | 'icon-google'
  | 'icon-skype'
  | 'icon-twitter'
  | 'icon-zoom';

interface CommIconProps {
  icon: CommIconType;
  className?: string;
  style?: React.CSSProperties;
}

const CommIcon: React.FC<CommIconProps> = ({ icon, className, style }: CommIconProps) => {
  const svgStyle = useMemo(() => {
    if (isEmpty(style)) return '';
    return Object.entries(style)
      .map(([key, value]) => `${key}: ${value};`)
      .join(' ');
  }, [style]);

  return (
    <ReactSVG
      src={`/icons/${icon}.svg`}
      className={className}
      style={style}
      beforeInjection={(svg) => {
        svg.classList.add('comm-icon');
        svg.setAttribute('style', svgStyle);
      }}
    />
  );
};

export default CommIcon;
