import cn from 'classnames';
import { Animated } from 'react-animated-css';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Icon from  '../shared/icon/icon';

import styles from './contact.module.scss';

const {
  contact,
  icon,
} = styles

/* eslint-disable-next-line */
export interface ContactProps {}

export function Contact(props: ContactProps) {
  return (
    <Animated
      className={cn(contact, 'fadeIn')}
      animationIn="fadeIn"
      animationInDuration={2000}
      animationOut="fadeOut"
      isVisible={true}>
      <ul className={styles['icon-list']}>
        <li>
          <a href="https://twitter.com/wilson_espina" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Icon
              icon={faTwitter}
              iconClassName={icon}
              animation="fa-bounce"
              text="Twitter"
            />
          </a>
        </li>
        <li>
          <a href="mailto:wilson.espina@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
            <Icon
              icon={faEnvelope}
              iconClassName={icon}
              animation="fa-bounce"
              text="Email"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/wilsonespina" target="_blank" rel="noopener noreferrer" aria-label="Github">
            <Icon
              icon={faGithub}
              iconClassName={icon}
              animation="fa-bounce"
              text="Github"
            />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/wilson-espina/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Icon
              icon={faLinkedin}
              iconClassName={icon}
              animation="fa-bounce"
              text="LinkedIn"
            />
          </a>
        </li>
      </ul>
    </Animated>
  );
}

export default Contact;
