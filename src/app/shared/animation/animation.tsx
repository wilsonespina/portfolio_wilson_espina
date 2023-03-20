import { PropsWithChildren, ReactElement } from "react";
import styles from './animation.module.scss';
import { Animated } from 'react-animated-css';

import type { AnimatedProps } from 'react-animated-css/lib/index';

/* eslint-disable-next-line */
// export interface AnimationProps {
//   children: JSX.Element,
//   className: string
// }
interface Props extends AnimatedProps{
  children: ReactElement
}

const Animation: React.FC<PropsWithChildren<Props>> = (props) => {
  return (
    // <Animated animationIn="fadeInUp" isVisible={true}>
    //   {children}
    // </Animated> 

    // <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true} className={className} >
    //   <div>
    //     hello world ;
    //   </div>
    // </Animated>

    <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
      <div>
          hello world ;)
      </div>
    </Animated>
  );
}

export default Animation;
