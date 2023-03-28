import { Routes, Route, useLocation, Link } from 'react-router-dom';
import SplashScreen from './splash-screen/splash-screen';
import About from './about/about';
import Skills from './skills/skills';
import Timeline from './timeline/timeline';
import Contact from './contact/contact';
import CV from './cv/cv';
import Layout from './layout/layout';

import styles from './app.module.scss';

const {
  container
} = styles;

function NoMatch() {
  return (
    <div className={container}>
      <h1>Page Not Found</h1>
      <Link to="/">Go back home</Link>
    </div>
  )
}

export function App() {
  const location = useLocation();
  const isLocation = (path : string) : boolean => location.pathname === `${path}`;

  return (
    <>
    { (isLocation('/') ||
      isLocation('/skills') ||
      isLocation('/experience') ||
      isLocation('/contact')) && <SplashScreen /> }
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Timeline />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="/cv" element={<CV />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
    </>
  );
}

export default App;
