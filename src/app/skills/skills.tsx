import cn from 'classnames';
import { faSquareJs, faNode, faReact, faAws, faJenkins, faCss3, faHtml5, faSass, faDocker } from '@fortawesome/free-brands-svg-icons';
import { faGraphQl, faCSharp, faTypescript, faGithubActions } from '../shared/svgs/svgs';
import { Animated } from 'react-animated-css';
import Icon from  '../shared/icon/icon';

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
          text="JavaScript"
          hoverAnimation
        />
        <Icon
          icon={faTypescript}
          iconClassName={cn(`${styles['icon']}`, js)}
          text="TypeScript"
          hoverAnimation
        />
        <Icon
          icon={faNode}
          iconClassName={`${styles['icon']}`}
          text="NodeJS"
          hoverAnimation
        />
        <Icon
          icon={faReact}
          iconClassName={`${styles['icon']}`}
          text="ReactJS"
          hoverAnimation
        />
        <Icon
          icon={faGraphQl}
          iconClassName={cn(`${styles['icon']}`)}
          text="GraphQL"
          hoverAnimation
        />
        <Icon
          icon={faCSharp}
          iconClassName={cn(`${styles['icon']}`)}
          text="C#"
          hoverAnimation
        />
        <Icon
          icon={faAws}
          iconClassName={`${styles['icon']}`}
          text="AWS"
          hoverAnimation
        />
        <Icon
          icon={faJenkins}
          iconClassName={`${styles['icon']}`}
          text="Jenkins"
          hoverAnimation
        />
        <Icon
          icon={faGithubActions}
          iconClassName={`${styles['icon']}`}
          text="Github Actions"
          hoverAnimation
        />
        <Icon
          icon={faCss3}
          iconClassName={`${styles['icon']}`}
          text="CSS3"
          hoverAnimation
        />
        <Icon
          icon={faHtml5}
          iconClassName={`${styles['icon']}`}
          text="HTML5"
          hoverAnimation
        />
        <Icon
          icon={faSass}
          iconClassName={`${styles['icon']}`}
          text="SASS"
          hoverAnimation
        />
        <Icon
          icon={faDocker}
          iconClassName={`${styles['icon']}`}
          text="Docker"
          hoverAnimation
        />
      </Animated>
    </div>
  );
}

export default Skills;
