import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareJs, faNode } from '@fortawesome/free-brands-svg-icons'

import styles from './experience.module.scss';

/* eslint-disable-next-line */
export interface ExperienceProps {}

export function Experience(props: ExperienceProps) {
  return (
    <div className={cn(`${styles['about']} container`)}>
      <h2 className="heading">Experience</h2>
      <div className={cn(`${styles['icon-container']}`)}>
        <FontAwesomeIcon icon={faSquareJs} className="icon fa-7x" bounce />
        <FontAwesomeIcon icon={faNode} className="fa-7x" />

      </div>
    </div>
  );
}

export default Experience;
