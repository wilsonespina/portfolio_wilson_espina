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
  text
} = styles;

/* eslint-disable-next-line */
export interface TimelineProps {}

export function Timeline(props: TimelineProps) {
  return (
    <Animated className={cn(container, 'animated fadeIn')}>
      <div className={wrapper}>
        <h1>Work Timeline</h1>
        <ul className={sessions}>
          <li className={item}>
            <div className={time}>March 2023</div>
            <h2 className={heading}>Moved to Wellington, New Zealand</h2>
            <p className={text}>Started a new adventure with my family</p>
          </li>
          <li className={item}>
            <div className={time}>March 2020</div>
            <h2 className={heading}>Taught Javascript Development (part-time) course</h2>
            <p className={text}>Mentored 100+ students</p>
          </li>
          <li className={item}>
            <div className={time}>November 2018 2023</div>
            <h2 className={heading}>Joined ITV</h2>
            <p className={text}>Built CTV app, web app, ITVX Streaming service</p>
          </li>
          <li className={item}>
            <div className={time}>February 2018</div>
            <h2 className={heading}>Joined Limejump</h2>
            <p className={text}>Startup in the energy sector</p>
          </li>
          <li className={item}>
            <div className={time}>October 2017</div>
            <h2 className={heading}><span role="img" aria-label='Police siren emoji'>🚨</span>CAREER CHANGE<span role="img" aria-label='Police siren emoji'>🚨</span> - Web Development Immersive (WDI) @GA</h2>
            <p className={text}>Switched from Civil Engineering to a career in tech.</p>
          </li>
        </ul>
      </div>
    </Animated>
  );
}

export default Timeline;
