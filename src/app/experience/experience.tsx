import cn from 'classnames';
import styles from './experience.module.scss';

import { faPlane, faPersonChalkboard, faCode } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* eslint-disable-next-line */
export interface ExperienceProps {}

export function Experience(props: ExperienceProps) {
  return (
    <div className={cn(`${styles['experience']} container`)}>
      <h2 className={'heading'}>Experience</h2>


      <div className={styles['timeline']}>
        <div className={cn(styles['timeline__event'], 'animated fadeInUp delay-3s', styles['timeline__even--type1'])}>
          <div className={styles['timeline__event__icon']}>
            <FontAwesomeIcon icon={faPlane} className="fa-2x"/>

          </div>
          <div className={styles['timeline__event__date']}>
            03-2023
          </div>
          <div className={styles['timeline__event__content']}>
            <div className={styles['timeline__event__title']}>
              Moved to Wellington, New Zealand
            </div>
            <div className={styles['timeline__event__description']}>
              <p>Moved for a new adventure</p>
            </div>
          </div>
        </div>

        <div className={cn(styles['timeline__event'], 'animated fadeInUp delay-2s', styles['timeline__event--type2'])}>
          <div className={styles['timeline__event__icon']}>
            <FontAwesomeIcon icon={faPersonChalkboard} className="fa-2x"/>
          </div>
          <div className={styles['timeline__event__date']}>
            03-2020
          </div>
          <div className={styles['timeline__event__content']}>
            <div className={styles['timeline__event__title']}>
              Taught Javascript Development (part-time) course
            </div>
            <div className={styles['timeline__event__description']}>
              <p>Mentor</p>
            </div>
          </div>
        </div>

        <div className={cn(styles['timeline__event'], 'animated fadeInUp delay-2s', styles['timeline__event--type3'])}>
          <div className={styles['timeline__event__icon']}>
            <FontAwesomeIcon icon={faCode} className="fa-2x"/>
          </div>
          <div className={styles['timeline__event__date']}>
            11-2018
          </div>
          <div className={styles['timeline__event__content']}>
            <div className={styles['timeline__event__title']}>
              Joined ITV
            </div>
            <div className={styles['timeline__event__description']}>
              <p>CTV app</p>
            </div>

          </div>
        </div>

        <div className={cn(styles['timeline__event'], 'animated fadeInUp', styles['timeline__even--type1'])}>
          <div className={styles['timeline__event__icon']}>
            <FontAwesomeIcon icon={faCode} className="fa-2x"/>
          </div>
          <div className={styles['timeline__event__date']}>
            02-2018
          </div>
          <div className={styles['timeline__event__content']}>
            <div className={styles['timeline__event__title']}>
              Joined Limejump
            </div>
            <div className={styles['timeline__event__description']}>
              <p>Startup in the energy sector</p>
            </div>
          </div>
        </div>

        <div className={cn(styles['timeline__event'], 'animated fadeInUp delay-2s', styles['timeline__event--type2'])}>
          <div className={styles['timeline__event__icon']}>
            <FontAwesomeIcon icon={faPersonChalkboard} className="fa-2x"/>
          </div>
          <div className={styles['timeline__event__date']}>
            10-2017
          </div>
          <div className={styles['timeline__event__content']}>
            <div className={styles['timeline__event__title']}>
              CAREER CHANGE - Web Development Immersive course @General Assembly, London
            </div>
            <div className={styles['timeline__event__description']}>
              <p>Mentor</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Experience;
