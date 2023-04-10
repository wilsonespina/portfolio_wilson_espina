import { PropsWithChildren, useEffect, useState, useRef } from 'react';
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
  const [mousePosition, setMousePosition] = useState({
    left: 0,
    top: 0
  });

  // const animation = useMemo(() => canvasAnimation(), []);

  const handleMouseMove = (e: MouseEvent) => {
    e.preventDefault();
    setMousePosition({left: e.clientX, top: e.clientY});
  }

  // let animation: { init: void, redrawScene: void } | null;
  let animation: { init: () => void; redrawScene: () => void; } | null = null;

  useEffect(() => {
    console.log("🚀 ~ file: layout.tsx:37 ~ useEffect ~ animation:", animation)

    if (animation === null) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      animation = canvasAnimation();
      animation?.init()
    }

    // if (animation && 'redrawScene' in animation) {
    //   animation.redrawScene()
    // }
    // canvasAnimation(); // TODO - fix buggy animation
  }, [])

  // useEffect(() => {
    // canvasAnimation(); // TODO - fix buggy animation
    // const animation = canvasAnimation();
    // console.log('REDRAW', mousePosition.left, mousePosition.top)
    // animation?.redrawScene();
  // }, [mousePosition])

  return (
    <main className={page} onMouseMove={(e)=> handleMouseMove(e)}>
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
              <li>
                <NavLink to="/cv" target="_blank" rel="noopener noreferrer" className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? active : ""
                }>CV</NavLink>
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
