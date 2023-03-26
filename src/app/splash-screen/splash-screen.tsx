import { useEffect, useState } from 'react';
import styles from './splash-screen.module.scss';
import { Animated } from 'react-animated-css';

const {
  text,
  name
} = styles;

/* eslint-disable-next-line */
export interface SplashScreenProps {}

export function SplashScreen(props: SplashScreenProps) {

const [isContainerVisible, setIsContainerVisible] = useState(true);
const [isNameVisible, setIsNameVisible] = useState(true);
const [isTextVisible, setIsTextVisible] = useState(true);

const setFalseAfterDelay = (seconds: number, func: (a: boolean) => void) => {
  setTimeout(() => {
    func(false);
  }, seconds)
}

  useEffect(() => {
    setFalseAfterDelay(1000, setIsTextVisible);
    setFalseAfterDelay(1500, setIsNameVisible);
    setFalseAfterDelay(2000, setIsContainerVisible);
  }, [])

  return (
    <Animated
      className={styles['splash-screen']}
      animationIn="fadeIn"
      animationInDuration={0}
      animationOut="fadeOut"
      animationOutDuration={1000}
      isVisible={isContainerVisible}>
            <Animated
              animationIn="fadeIn"
              animationInDuration={0}
              animationOut="fadeOut"
              animationOutDuration={1000}
              isVisible={isNameVisible}>
                <h1 className={name}>WILSON ESPINA</h1>
            </Animated>
            <Animated
              animationIn="fadeIn"
              animationInDuration={0}
              animationOut="fadeOut"
              animationOutDuration={1000}
              isVisible={isTextVisible}>
                <h2 className={text}>PORTFOLIO</h2>
            </Animated>
    </Animated>
  );
}

export default SplashScreen;
