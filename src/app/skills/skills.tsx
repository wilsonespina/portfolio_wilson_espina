import cn from 'classnames';
import { faSquareJs, faNode, faReact, faAws, faJenkins, faCss3, faHtml5, faSass, faDocker } from '@fortawesome/free-brands-svg-icons';
import Icon from  '../shared/icon/icon';

import styles from './skills.module.scss';

/* eslint-disable-next-line */
export interface SkillsProps {}

export function Skills(props: SkillsProps) {
  return (
    <div className={cn(`${styles['skills']} container`)}>
      <h2 className="heading">Skills</h2>
      <div className={cn(`${styles['icon-list-container']}`)}>
        <Icon
          icon={faSquareJs}
          iconClassName={`${styles['icon']}`}
          animation="fa-bounce"
          text="JavaScript"
          hoverAnimation
        />
        <Icon
          icon={faNode}
          iconClassName={`${styles['icon']}`}
          animation="fa-bounce"
          text="NodeJS"
          hoverAnimation
        />
        <Icon
          icon={faReact}
          iconClassName={`${styles['icon']}`}
          animation="fa-bounce"
          text="ReactJS"
          hoverAnimation
        />
        <Icon
          icon={faAws}
          iconClassName={`${styles['icon']}`}
          animation="fa-bounce"
          text="AWS"
          hoverAnimation
        />
        <Icon
          icon={faJenkins}
          iconClassName={`${styles['icon']}`}
          animation="fa-bounce"
          text="Jenkins"
          hoverAnimation
        />
        <Icon
          icon={faCss3}
          iconClassName={`${styles['icon']}`}
          animation="fa-bounce"
          text="CSS3"
          hoverAnimation
        />
        <Icon
          icon={faHtml5}
          iconClassName={`${styles['icon']}`}
          animation="fa-bounce"
          text="HTML5"
          hoverAnimation
        />
        <Icon
          icon={faSass}
          iconClassName={`${styles['icon']}`}
          animation="fa-bounce"
          text="SASS"
          hoverAnimation
        />
        <Icon
          icon={faDocker}
          iconClassName={`${styles['icon']}`}
          animation="fa-bounce"
          text="Docker"
          hoverAnimation
        />
      </div>
    </div>
  );
}

export default Skills;
