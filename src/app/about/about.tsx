import cn from 'classnames';
import { Animated } from 'react-animated-css';
import styles from './about.module.scss';

const {
  about,
  container,
  text
} = styles;

/* eslint-disable-next-line */
export interface AboutProps {}

export function About(props: AboutProps) {
  return (
      <Animated
        className={about}
        animationIn="fadeIn"
        animationInDuration={1000}>
        <div className={container}>
          <p className={text}>
            Born in London and currently based in Wellington, New Zealand. I'm an experienced Frontend Software Engineer specialising in making beautiful web pages.
          </p>
        </div>
      </Animated>
  );
}

export default About;
