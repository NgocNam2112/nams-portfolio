import React from 'react';
import styles from './HighlightButton.module.css';

const SvgHighlightButton = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="77"
      height="90"
      viewBox="0 0 77 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.svg}
      {...props}
    >
      <path
        d="M60.3123 14.6694C59.7245 13.7694 54.4704 13.0131 48.4493 12.8367C39.085 12.5918 37.5036 12.9529 36.9489 14.8558C35.3623 19.625 37.5631 20.6963 48.5088 20.5801C60.3783 20.2754 63.3684 18.8956 60.3123 14.6694Z"
        className={styles.elem1}
      />
      <path
        d="M42.8304 43.4147C31.2928 35.8191 27.7531 34.6938 28.0063 38.9529C28.1091 40.6832 32.0494 44.0554 39.8352 49.2026C46.3676 53.4893 52.0462 56.8917 52.7117 56.8521C53.2441 56.8205 53.6894 55.3248 53.5866 53.5945C53.4442 51.1987 50.7572 48.687 42.8304 43.4147Z"
        className={styles.elem2}
      />
      <path
        d="M28.5194 66.7433C22.4612 56.9521 15.2763 48.43 13.8676 49.4487C11.4336 51.1962 12.8767 55.2511 19.1062 63.4292C22.4523 68.0389 26.0803 72.8989 27.1069 74.4407C28.1335 75.9825 29.4105 77.2423 30.076 77.2027C32.8711 77.0366 32.2107 72.6681 28.5194 66.7433Z"
        className={styles.elem3}
      />
    </svg>
  );
};

export default SvgHighlightButton;
