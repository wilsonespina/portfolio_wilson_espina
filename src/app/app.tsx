import { Routes, Route, Outlet, Link } from 'react-router-dom';
import SplashScreen from './splash-screen/splash-screen';
import InfoCard from './info-card/info-card';
import About from './about/about';
import Skills from './skills/skills';
import Experience2 from './experience2/experience2';
import Experience from './experience/experience';
import Contact from './contact/contact';
import Layout from './layout/layout';
import styles from './app.module.scss';

export function App() {
  return (
    <>

    {/* <SplashScreen /> */}

    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<Home />} /> */}
        {/* <Route path="about" element={<About />} /> */}
        {/* <Route path="dashboard" element={<Dashboard />} /> */}

        {/* Using path="*"" means "match anything", so this route
              acts like a catch-all for URLs that we don't have explicit
              routes for. */}
        {/* <Route path="*" element={<NoMatch />} /> */}

      </Route>

    </Routes>


      {/* <main className={styles['container']}> */}
        {/* <InfoCard name="Wilson Espina" job="Frontend Software Engineer"/> */}
        {/* <About /> */}
        {/* <Skills /> */}
        {/* <Experience2 /> */}
        {/* <Experience /> */}
        {/* <Contact /> */}
      {/* </main> */}
    </>
  );
}

export default App;
