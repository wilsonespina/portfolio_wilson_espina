import styles from './icon.module.scss';
import { useState } from 'react';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-common-types';

export interface IconProps {
  icon: IconDefinition,
  iconClassName: string,
  animation: string,
  text: string,
  customStyle?: string,
}


export function Icon({ iconClassName, icon, animation, text, customStyle }: IconProps) {

  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(true);
  }
  const handleBlur = () => {
    setHover(false);
  }


  return (
    <div className={styles['icon-container']} onMouseEnter={handleHover} onMouseLeave={handleBlur}>
      <FontAwesomeIcon
        icon={icon}
        className={cn(iconClassName, {[animation]: hover})}
      />
      <p className={cn(styles['text'], {[styles['show']]: hover})}>{text}</p>
    </div>
  );
}

export default Icon;
