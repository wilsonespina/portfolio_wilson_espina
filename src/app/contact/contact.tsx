import cn from 'classnames';
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
    <div className={cn(contact, 'section-container')}>
      <ul className={styles['icon-list']}>
        <li>
          <a href="https://twitter.com/wilson_espina" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Icon
              icon={faTwitter}
              iconClassName={icon}
              animation="fa-bounce"
            />
          </a>
        </li>
        <li>
          <Icon
            icon={faEnvelope}
            iconClassName={icon}
            animation="fa-bounce"
          />
        </li>
        <li>
          <Icon
            icon={faGithub}
            iconClassName={icon}
            animation="fa-bounce"
          />
        </li>
        <li>
          <Icon
            icon={faLinkedin}
            iconClassName={icon}
            animation="fa-bounce"
          />
        </li>
      </ul>
    </div>
  );
}

export default Contact;
