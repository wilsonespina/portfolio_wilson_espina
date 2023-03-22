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
      {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <title>ts-logo-512</title>
        <g id="icomoon-ignore">
        </g>
        <path fill="#3178c6" d="M100 0h824c55.228 0 100 44.772 100 100v824c0 55.228-44.772 100-100 100h-824c-55.228 0-100-44.772-100-100v-824c0-55.228 44.772-100 100-100z"></path>
        <path fill="#fff" d="M633.878 814.848v100.122c16.276 8.344 35.526 14.6 57.75 18.772s45.646 6.258 70.27 6.258c23.998 0 46.794-2.294 68.392-6.884 21.598-4.588 40.536-12.15 56.812-22.684 16.276-10.532 29.162-24.3 38.656-41.3s14.242-38.014 14.242-63.044c0-18.148-2.712-34.052-8.138-47.714s-13.25-25.812-23.476-36.45c-10.224-10.638-22.484-20.182-36.778-28.63s-30.414-16.426-48.36-23.934c-13.146-5.424-24.936-10.69-35.37-15.8-10.434-5.112-19.302-10.326-26.606-15.644-7.304-5.32-12.938-10.952-16.902-16.896-3.964-5.946-5.948-12.672-5.948-20.182 0-6.882 1.774-13.088 5.322-18.616s8.556-10.272 15.024-14.236c6.47-3.962 14.398-7.040 23.788-9.23 9.392-2.19 19.824-3.284 31.302-3.284 8.346 0 17.162 0.626 26.448 1.876 9.286 1.252 18.624 3.182 28.016 5.788 9.39 2.608 18.518 5.894 27.388 9.856 8.868 3.964 17.058 8.552 24.57 13.768v-93.552c-15.232-5.84-31.874-10.168-49.924-12.984s-38.762-4.224-62.132-4.224c-23.79 0-46.326 2.556-67.61 7.666s-40.012 13.088-56.186 23.934c-16.172 10.848-28.952 24.666-38.342 41.458-9.39 16.79-14.086 36.866-14.086 60.228 0 29.828 8.608 55.276 25.824 76.344 17.214 21.066 43.35 38.9 78.408 53.502 13.772 5.632 26.606 11.158 38.5 16.582s22.172 11.056 30.83 16.896c8.66 5.84 15.494 12.202 20.504 19.086 5.008 6.882 7.512 14.704 7.512 23.466 0 6.466-1.566 12.462-4.696 17.99s-7.878 10.324-14.242 14.392-14.294 7.248-23.788 9.542c-9.496 2.296-20.606 3.442-33.336 3.442-21.702 0-43.194-3.806-64.48-11.42-21.284-7.612-41.004-19.032-59.158-34.26zM465.56 568.164h128.44v-82.164h-358v82.164h127.812v365.836h101.748z"></path>
      </svg> */}

    </div>
  );
}

export default Contact;
