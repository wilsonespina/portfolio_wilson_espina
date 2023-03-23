import { Routes, Route, Outlet, Link } from 'react-router-dom';
import SplashScreen from './splash-screen/splash-screen';
import About from './about/about';
import Skills from './skills/skills';
import Experience from './experience/experience';
import Timeline from './timeline/timeline';
import Contact from './contact/contact';
import Layout from './layout/layout';
import styles from './app.module.scss';

function NoMatch() {
  return (
    <div>Not a correct route</div>
  )
}

export function App() {
  return (
    <>

    {/* <SplashScreen /> */}

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Timeline />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoMatch />} />
      </Route>

    </Routes>
    </>
  );
}

export default App;
