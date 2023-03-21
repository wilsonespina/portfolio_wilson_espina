import styles from './splash-screen.module.scss';

/* eslint-disable-next-line */
export interface SplashScreenProps {}

export function SplashScreen(props: SplashScreenProps) {
  return (
    <div className={styles['section-container']}>
      <h1>Wilson Espina</h1>
      <h2>Portfolio</h2>
    </div>
  );
}

export default SplashScreen;
