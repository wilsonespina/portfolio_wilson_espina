import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareJs, faNode } from '@fortawesome/free-brands-svg-icons'
import Icon from  '../shared/icon/icon/icon';

import styles from './experience.module.scss';

/* eslint-disable-next-line */
export interface ExperienceProps {}

export function Experience(props: ExperienceProps) {
  return (
    <div className={cn(`${styles['about']} container`)}>
      <h2 className="heading">Experience</h2>
      <div className={cn(`${styles['icon-list-container']}`)}>
        <Icon
          icon={faSquareJs}
          iconClassName="icon fa-7x"
          animation="fa-bounce"
          text="JavaScript"

        />
        <Icon
          icon={faNode}
          iconClassName="icon fa-7x"
          animation="fa-bounce"
          text="NodeJS"
        />

      </div>
    </div>
  );
}

export default Experience;
