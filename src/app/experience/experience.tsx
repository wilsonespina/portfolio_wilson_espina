import cn from 'classnames';
import { useInView } from 'react-intersection-observer';
import { Animated } from 'react-animated-css';

import { faPlane, faPersonChalkboard, faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
// import * from './experience.module.scss';
import styles from './experience.module.scss';
import { PropsWithChildren } from 'react';

const {
  experience,
  timeline,
  content,
  container,
  left,
  right,
  date
} = styles;

/* eslint-disable-next-line */
export interface ExperienceProps extends PropsWithChildren{}

export function Experience(props: ExperienceProps) {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  }); // TODO - move to ANIMATION component to be able to handle individual animations

  // https://codepen.io/htmlcodex/pen/LYGjPgV
  

  return (
    <div className={cn(experience, 'section-container')} ref={ref}>
      <h2 className="heading">Experience</h2>

      <div className={timeline}>
        <Animated className={cn(container, left, 'animated fadeInUp')} isVisible={inView}>
          <div className={date}>Mar 2023</div>
          <FontAwesomeIcon icon={faPlane} className="fa-2x"/>
          <div className={content}>
            <h2>Moved to Wellington, New Zealand</h2>
            <p>
              Moved to New Zeland to start a new adventure with my family
            </p>
          </div>
        </Animated>

        <Animated className={cn(container, right, 'animated fadeInUp')} isVisible={inView}>
          <div className={date}>Mar 2020</div>
          <FontAwesomeIcon icon={faPersonChalkboard} className="fa-2x"/>
          <div className={content}>
            <h2>Taught Javascript Development (part-time) course</h2>
            <p>
              Mentored 100+ students???
            </p>
          </div>
        </Animated>

        <Animated className={cn(container, left, 'animated fadeInUp')} isVisible={inView}>
          <div className={date}>Nov 2018</div>
          <FontAwesomeIcon icon={faCode} className="fa-2x"/>
          <div className={content}>
            <h2>Joined ITV</h2>
            <p>
              Built CTV app, web app, ITVX Streaming service
            </p>
          </div>
        </Animated>

        <Animated className={cn(container, right, 'animated fadeInUp')} isVisible={inView}>
          <div className={date}>Feb 2018</div>
          <FontAwesomeIcon icon={faCode} className="fa-2x"/>
          <div className={content}>
            <h2>Joined Limejump</h2>
            <p>
              Startup in the energy sector
            </p>
          </div>
        </Animated>

        <Animated className={cn(container, left, 'animated fadeInUp')} isVisible={inView}>
          <div className={date}>Oct 2017</div>
          <FontAwesomeIcon icon={faPersonChalkboard} className="fa-2x"/>
          <div className={content}>
            <h2><span role="img" aria-label='Police siren emoji'>🚨</span>CAREER CHANGE<span role="img" aria-label='Police siren emoji'>🚨</span> - Web Development Immersive (WDI) @GA</h2>
            <p>
              Switched from Civil Engineering to a career in tech.
            </p>
          </div>
        </Animated>

      </div>
    </div>
  );
}

export default Experience;
