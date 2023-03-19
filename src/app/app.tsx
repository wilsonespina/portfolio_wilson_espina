import SplashScreen from './splash-screen/splash-screen';
import InfoCard from './info-card/info-card';
import About from './about/about';
import Experience from './experience/experience';
import Contact from './contact/contact';

import styles from './app.module.scss';

export function App() {
  return (
    <>

    {/* <SplashScreen /> */}

      <main className={styles['container']}>
        <InfoCard name="Wilson Espina" job="Frontend Software Engineer"/>
        <About />
        <Experience />
        <Contact />
      </main>
    </>
  );
}

export default App;
