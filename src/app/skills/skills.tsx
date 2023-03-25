import cn from 'classnames';
import { faSquareJs, faNode, faReact, faAws, faJenkins, faCss3, faHtml5, faSass, faDocker } from '@fortawesome/free-brands-svg-icons';
import { Animated } from 'react-animated-css';
import Icon from  '../shared/icon/icon';
// import tsLogo from '../../assets/typescript-logo.svg';
import { ReactComponent as TsLogo } from '../../assets/typescript-logo.svg';

import styles from './skills.module.scss';
import { PropsWithChildren } from 'react';

const {
  skills,
  js
} = styles;

/* eslint-disable-next-line */
export interface SkillsProps extends PropsWithChildren{}



export function Skills(props: SkillsProps) {
  return (
    <div className={skills}>
      <Animated
        className={cn(`${styles['icon-list-container']}`)}
        animationIn="fadeIn"
        animationInDuration={2000}
        animationOut="fadeOut"
        isVisible={true}>
        <Icon
          icon={faSquareJs}
          iconClassName={cn(`${styles['icon']}`, js)}
          animation={null}
          text="JavaScript"
          hoverAnimation
        />
        <Icon
          icon={faNode}
          iconClassName={`${styles['icon']}`}
          animation={null}
          text="NodeJS"
          hoverAnimation
        />
        <Icon
          icon={faReact}
          iconClassName={`${styles['icon']}`}
          animation={null}
          text="ReactJS"
          hoverAnimation
        />
        <Icon
          icon={faAws}
          iconClassName={`${styles['icon']}`}
          animation={null}
          text="AWS"
          hoverAnimation
        />
        <Icon
          icon={faJenkins}
          iconClassName={`${styles['icon']}`}
          animation={null}
          text="Jenkins"
          hoverAnimation
        />
        <Icon
          icon={faCss3}
          iconClassName={`${styles['icon']}`}
          animation={null}
          text="CSS3"
          hoverAnimation
        />
        <Icon
          icon={faHtml5}
          iconClassName={`${styles['icon']}`}
          animation={null}
          text="HTML5"
          hoverAnimation
        />
        <Icon
          icon={faSass}
          iconClassName={`${styles['icon']}`}
          animation={null}
          text="SASS"
          hoverAnimation
        />
        <Icon
          icon={faDocker}
          iconClassName={`${styles['icon']}`}
          animation={null}
          text="Docker"
          hoverAnimation
        />
      </Animated>
    </div>
  );
}

export default Skills;
