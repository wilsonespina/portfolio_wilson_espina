import { PropsWithChildren, useEffect } from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";

import InfoCard from '../info-card/info-card';

import canvasAnimation from '../canvas/animation';
import styles from './layout.module.scss';

const {
  page,
  frame,
  nav
} = styles;

/* eslint-disable-next-line */
export interface LayoutProps extends PropsWithChildren {}

export function Layout({children}: LayoutProps) {

  useEffect(() => {
    canvasAnimation();
  }, [])


  return (
    <main className={page}>
      <div className={frame}>

      <header>
        <InfoCard fullName="Wilson Espina" jobTitle="Frontend Software Engineer"/>
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
            {/* <li>
              <Link to="/nothing-here">Nothing Here</Link>
            </li> */}
          </ul>
        </nav>
        <canvas></canvas>
      </header>
      <Outlet />
      </div>
    </main>
  );
}
// https://github.com/remix-run/react-router/blob/dev/examples/basic/src/App.tsx
export default Layout;
