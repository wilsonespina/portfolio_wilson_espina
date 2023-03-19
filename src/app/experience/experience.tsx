import cn from 'classnames';
import styles from './experience.module.scss';

/* eslint-disable-next-line */
export interface ExperienceProps {}

export function Experience(props: ExperienceProps) {
  return (
    <div className={cn(`${styles['about']} container`)}>
      <h2 className="heading">Experience</h2>
    </div>
  );
}

export default Experience;
