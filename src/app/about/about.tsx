import cn from 'classnames';
import { Animated } from 'react-animated-css';
import styles from './about.module.scss';

const {
  about,
  text
} = styles;

/* eslint-disable-next-line */
export interface AboutProps {}

export function About(props: AboutProps) {
  return (
    <div className={about}>
      <Animated
        className={cn(`${styles['icon-list-container']}`)}
        animationIn="fadeIn"
        animationInDuration={1000}>
        <p className={text}>
          Born in London and currently based in Wellington, New Zealand. I'm an experienced Frontend Software Engineer specialising in making beautiful web pages.
        </p>
      </Animated>
    </div>
  );
}

export default About;
