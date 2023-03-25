import cn from 'classnames';
import { faSquareJs, faNode, faReact, faAws, faJenkins, faCss3, faHtml5, faSass, faDocker } from '@fortawesome/free-brands-svg-icons';
import { Animated } from 'react-animated-css';
import Icon from  '../shared/icon/icon';
// import tsLogo from '../../assets/typescript-logo.svg';
import { ReactComponent as TsLogo } from '../../assets/typescript-logo.svg';

import styles from './skills.module.scss';
import { PropsWithChildren } from 'react';

const {
  skills
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



        {/* <Icon
          // icon={faDocker}
          iconClassName={`${styles['icon']}`}
          animation="fa-bounce"
          text="Docker"
          hoverAnimation
          CustomIcon={TsLogo}
        /> */}
        {/* <TsLogo className={`${styles['icon']}`} /> */}

        {/* <Icon
          icon={faDocker}
          iconClassName={`${styles['icon']}`}
          animation="fa-bounce"
          text="Docker"
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
          icon={faHtml5}
          iconClassName={`${styles['icon']}`}
          animation="fa-bounce"
          text="HTML5"
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
          icon={faCss3}
          iconClassName={`${styles['icon']}`}
          animation="fa-bounce"
          text="CSS3"
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
          icon={faAws}
          iconClassName={`${styles['icon']}`}
          animation="fa-bounce"
          text="AWS"
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
          icon={faNode}
          iconClassName={`${styles['icon']}`}
          animation="fa-bounce"
          text="NodeJS"
          hoverAnimation
        />
        <Icon
          icon={faSquareJs}
          iconClassName={`${styles['icon']}`}
          animation="fa-bounce"
          text="JavaScript"
          hoverAnimation
        /> */}
      </Animated>
    </div>
  );
}

export default Skills;
