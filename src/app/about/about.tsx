import cn from 'classnames';
import styles from './about.module.scss';

/* eslint-disable-next-line */
export interface AboutProps {}

export function About(props: AboutProps) {
  return (
    <div className={cn(`${styles['about']} container`)}>
      <h2 className={'heading'}>About Me</h2>
      <p>
        I'm a Frontend Software Engineer currently based in Wellington, New Zealand.
      </p>
    </div>
  );
}

export default About;
