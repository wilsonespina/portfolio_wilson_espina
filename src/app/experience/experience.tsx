import styles from './experience.module.scss';

/* eslint-disable-next-line */
export interface ExperienceProps {}

export function Experience(props: ExperienceProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Experience!</h1>
    </div>
  );
}

export default Experience;
