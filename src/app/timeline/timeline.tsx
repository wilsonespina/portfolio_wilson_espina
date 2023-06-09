import cn from 'classnames';
import { Animated } from 'react-animated-css';
import styles from './timeline.module.scss';

const {
  container,
  wrapper,
  sessions,
  time,
  item,
  heading,
  text,
  emoji
} = styles;

/* eslint-disable-next-line */
export interface TimelineProps {}

export function Timeline(props: TimelineProps) {
  return (
    <Animated
      className={cn(container, 'animated fadeIn')}
      animationIn="fadeIn"
      animationInDuration={2000}
      animationOut="fadeOut"
      isVisible={true}>
      <div className={wrapper}>
        <ul className={sessions}>
          <li className={item}>
            <div className={time}>March 2023</div>
            <h2 className={heading}><span className={emoji} role="img" aria-label="Plane emoji">✈️</span>Moved from London to Wellington, New Zealand</h2>
            <p className={text}>Started a new adventure with my family</p>
          </li>
          <li className={item}>
            <div className={time}>March 2020</div>
            <h2 className={heading}><span className={emoji} role="img" aria-label="Teacher emoji">👨‍🏫 </span>Lead Instructor for the Javascript Development course at General Assembly</h2>
            <p className={text}>Mentored 100+ students</p>
          </li>
          <li className={item}>
            <div className={time}>November 2018</div>
            <h2 className={heading}><span className={emoji} role="img" aria-label="Laptop emoji">💻 </span>Joined ITV</h2>
            <p className={text}>Built Connected TV app, web app and helped launch the ITVX Streaming service</p>
          </li>
          <li className={item}>
            <div className={time}>February 2018</div>
            <h2 className={heading}><span className={emoji} role="img" aria-label="Laptop emoji">💻 </span>Joined Limejump</h2>
            <p className={text}>Startup in the energy sector</p>
          </li>
          <li className={item}>
            <div className={time}>October 2017</div>
            <h2 className={heading}><span className={emoji} role="img" aria-label="Student emoji">👨‍💻 </span>Web Development Immersive (WDI) at General Assembly</h2>
            <p className={text}>Switched from Civil Engineering to a career in tech</p>
          </li>
        </ul>
      </div>
    </Animated>
  );
}

export default Timeline;
