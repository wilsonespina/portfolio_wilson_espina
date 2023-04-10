import styles from './icon.module.scss';
import { useState } from 'react';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-common-types';

const {
  label
} = styles;
export interface IconProps {
  icon: IconDefinition,
  iconClassName: string,
  animation?: string,
  text?: string,
  hoverAnimation?: boolean
}


export function Icon({ iconClassName, icon, animation, text }: IconProps) {

  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(true);
  }
  const handleBlur = () => {
    setHover(false);
  }


  return (
    <div className={styles['icon-container']} onMouseEnter={handleHover} onMouseLeave={handleBlur}>
      {!!icon && <FontAwesomeIcon
        icon={icon}
        className={cn(iconClassName, {[animation]: hover})}
      />}
      {!!text && <p className={label}>{text}</p>}
    </div>
  );
}

export default Icon;
