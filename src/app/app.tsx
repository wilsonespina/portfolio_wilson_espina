import SplashScreen from './splash-screen/splash-screen';
import InfoCard from './info-card/info-card';
import About from './about/about';
import Skills from './skills/skills';
import Experience2 from './experience2/experience2';
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
        <Skills />
        {/* <Experience2 /> */}
        <Experience />
        <Contact />
      </main>
    </>
  );
}

export default App;
