import cn from 'classnames';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import styles from './contact.module.scss';

/* eslint-disable-next-line */
export interface ContactProps {}

export function Contact(props: ContactProps) {
  return (
    <div className={cn(`${styles['contact']} container`)}>
      <h2 className={'heading'}>Contact</h2>
      <i></i>
      {/* <FontAwesomeIcon icon={regular('coffee')} /> */}
    </div>
  );
}

export default Contact;
