import styles from './cv.module.scss';

const {
  container
} = styles;

/* eslint-disable-next-line */
export interface CVProps {}

export function CV(props: CVProps) {
  return (
    <div className={container}>
      <embed src="https://wilson-cv.s3.ap-southeast-4.amazonaws.com/wilson_espina_cv.pdf" type="application/pdf" width="100%" height="100%" className="embed"/>
    </div>
  );
}

export default CV;
