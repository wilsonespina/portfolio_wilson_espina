import { PropsWithChildren, ReactElement, ReactNode, FC } from "react";
import styles from './animation.module.scss';
import { Animated } from 'react-animated-css';

// import type { AnimatedProps } from 'react-animated-css/lib/index';

/* eslint-disable-next-line */
// export interface AnimationProps {
//   children: JSX.Element,
//   className: string
// }
interface Props {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element)
}

const Animation = ({ children }: PropsWithChildren<Props>) => {
  return (
    <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true} >
      {children}
    </Animated>
  );
}

export default Animation;
