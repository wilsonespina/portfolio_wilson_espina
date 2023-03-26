import { PropsWithChildren, useEffect, useState } from 'react';
import { Outlet, NavLink } from "react-router-dom";

import InfoCard from '../info-card/info-card';

import canvasAnimation from '../canvas/animation';
import styles from './layout.module.scss';

const {
  page,
  frame,
  header,
  nav,
  active
} = styles;

/* eslint-disable-next-line */
export interface LayoutProps extends PropsWithChildren {}

export function Layout(props: LayoutProps) {
  useEffect(() => {
    canvasAnimation(); // TODO - fix buggy animation
  }, [])

  return (
    <main className={page}>
      <div className={frame}>
        <header className={header}>
          <InfoCard fullName="Wilson Espina" jobTitle="Software Engineer"/>
          <nav className={nav}>
            <ul>
              <li>
                <NavLink to="/" className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? active : ""
                }>Home</NavLink>
              </li>
              <li>
                <NavLink to="/skills" className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? active : ""
                }>Skills</NavLink>
              </li>
              <li>
                <NavLink to="/experience" className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? active : ""
                }>Experience</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? active : ""
                }>Contact</NavLink>
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
