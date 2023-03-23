import { PropsWithChildren, useEffect, useState } from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";

import InfoCard from '../info-card/info-card';

import canvasAnimation from '../canvas/animation';
import styles from './layout.module.scss';

const {
  page,
  frame,
  header,
  nav
} = styles;

/* eslint-disable-next-line */
export interface LayoutProps extends PropsWithChildren {}

export function Layout({children}: LayoutProps) {

  const [animation, setAnimation] = useState();
  
  useEffect(() => {
    canvasAnimation();
  }, [])

  return (
    <main className={page}>
      <div className={frame}>

        <header className={header}>
          <InfoCard fullName="Wilson Espina" jobTitle="Software Engineer"/>
          <nav className={nav}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/skills">Skills</Link>
              </li>
              <li>
                <Link to="/experience">Experience</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Outlet />
        <canvas></canvas>
      </div>
    </main>
  );
}
// https://github.com/remix-run/react-router/blob/dev/examples/basic/src/App.tsx
export default Layout;
