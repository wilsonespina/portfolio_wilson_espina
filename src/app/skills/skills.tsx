import cn from 'classnames';
import { faSquareJs, faNode, faReact, faAws, faJenkins, faCss3, faHtml5, faSass, faDocker } from '@fortawesome/free-brands-svg-icons'
import Icon from  '../shared/icon/icon';

import styles from './skills.module.scss';

/* eslint-disable-next-line */
export interface SkillsProps {}

export function Skills(props: SkillsProps) {
  const iconSize = 'fa-6x'
  return (
    <div className={cn(`${styles['skills']} container`)}>
      <h2 className="heading">Skills</h2>
      <div className={cn(`${styles['icon-list-container']}`)}>
        <Icon
          icon={faSquareJs}
          iconClassName={`icon ${iconSize}`}
          animation="fa-bounce"
          text="JavaScript"
        />
        <Icon
          icon={faNode}
          iconClassName={`icon ${iconSize}`}
          animation="fa-bounce"
          text="NodeJS"
        />
        <Icon
          icon={faReact}
          iconClassName={`icon ${iconSize}`}
          animation="fa-bounce"
          text="ReactJS"
        />
        <Icon
          icon={faAws}
          iconClassName={`icon ${iconSize}`}
          animation="fa-bounce"
          text="AWS"
        />
        <Icon
          icon={faJenkins}
          iconClassName={`icon ${iconSize}`}
          animation="fa-bounce"
          text="Jenkins"
        />
        <Icon
          icon={faCss3}
          iconClassName={`icon ${iconSize}`}
          animation="fa-bounce"
          text="CSS3"
        />
        <Icon
          icon={faHtml5}
          iconClassName={`icon ${iconSize}`}
          animation="fa-bounce"
          text="HTML5"
        />
        <Icon
          icon={faSass}
          iconClassName={`icon ${iconSize}`}
          animation="fa-bounce"
          text="SASS"
        />
        <Icon
          icon={faDocker}
          iconClassName={`icon ${iconSize}`}
          animation="fa-bounce"
          text="Docker"
        />
      </div>
    </div>
  );
}

export default Skills;
