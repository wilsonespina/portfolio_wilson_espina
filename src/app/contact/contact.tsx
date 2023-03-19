import cn from 'classnames';
import styles from './contact.module.scss';

/* eslint-disable-next-line */
export interface ContactProps {}

export function Contact(props: ContactProps) {
  return (
    <div className={cn(`${styles['contact']} container`)}>
      <h2 className={'heading'}>Contact</h2>
    </div>
  );
}

export default Contact;
