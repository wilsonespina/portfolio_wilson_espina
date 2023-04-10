import cn from 'classnames';

import styles from './info-card.module.scss';
const {
  name,
  job
} = styles;

export interface InfoCardProps {
  fullName: string,
  jobTitle: string
}

export function InfoCard({ fullName, jobTitle }: InfoCardProps) {
  return (
      <div className={styles['info-container']}>
        <h1 className={name}>{fullName}</h1>
        <p className={job}>{jobTitle}</p>
      </div>
  );
}

export default InfoCard;
