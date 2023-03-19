import wilsonIceCreamImage from '../../assets/wilson_ice_cream.jpg';

import styles from './info-card.module.scss';

/* eslint-disable-next-line */
export interface InfoCardProps {
  name: string,
  job: string
}

export function InfoCard({ name, job }: InfoCardProps) {
  return (
    <div className={styles['info-card']}>
      <img src={wilsonIceCreamImage} alt="profile_picture" className={styles['image']}/>
      <div className={styles['info-container']}>
        <h1 className={styles['name']}>{name}</h1>
        <h2 className={styles['job']}>{job}</h2>
      </div>
    </div>
  );
}

export default InfoCard;
