import SplashScreen from './splash-screen/splash-screen';
import InfoCard from './info-card/info-card';
import About from './about/about';
import Skills from './skills/skills';
import Experience from './experience/experience';
import Contact from './contact/contact';
import styles from './app.module.scss';

// import fontawesome from '@fortawesome/react-fontawesome';
// import fontawesome from '@fortawesome/fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';

export interface CustomIcon {
  // Use a prefix like 'fac' that doesn't conflict with a prefix in the standard Font Awesome styles
  // (So avoid fab, fal, fas, far, fa)
  prefix: string,
  iconName: string, // Any name you like
  icon: [
    number, // width
    number, // height
    string[], // ligatures
    string | null, // unicode (if relevant)
    string // svg path data
  ]
}

export const faSplat: CustomIcon  = {
  prefix: 'fac',
  iconName: 'splat',
  icon: [
    448,
    448,
    [],
    null,
    'M163.006,417.598 L166.015,306.629 L63.506,343.841 L129.87,255.871 L25.5,224.5 L129.87,193.129 L63.506,105.159 L166.015,142.371 L163.006,31.402 L224.5,122.983 L285.995,31.402 L282.985,142.371 L385.495,105.159 L319.13,193.13 L423.5,224.5 L319.13,255.871 L385.494,343.841 L282.984,306.629 L285.994,417.598 L224.5,326.017 z'
  ]
};

library.add(faSplat)


export function App() {
  return (
    <>

    {/* <SplashScreen /> */}

      <main className={styles['container']}>
        <InfoCard name="Wilson Espina" job="Frontend Software Engineer"/>
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

export default App;
