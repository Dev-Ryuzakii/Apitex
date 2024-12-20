import React from 'react';

type Props = {
  style?: React.CSSProperties;
};

export const TransactionSvg: React.FC<Props> = ({style}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={100}
      height={100}
      fill='none'
      style={{...style}}
    >
      <circle
        cx={50.333}
        cy={50.333}
        r={33.667}
        fill='#FFD9C3'
      />
      <circle
        cx={50.333}
        cy={49.667}
        r={24.333}
        fill='#55ACEE'
      />
      <path
        fill='#040325'
        d='M71.277 41.179a1.563 1.563 0 0 0 2.884-1.203C62.949 14.054 24.64 21.753 24.25 50c1.427 34.424 50.501 34.429 51.922 0-.181-1.67.475-5.056-2.015-4.938a1.563 1.563 0 0 0-1.33 1.766A22.837 22.837 0 1 1 27.376 50c.349-24.85 34.04-31.615 43.902-8.821Z'
      />
      <path
        fill='#040325'
        d='M50.212 66.228a1.561 1.561 0 0 0 1.563-1.563v-1.821a7.288 7.288 0 0 0-1.563-14.407 4.168 4.168 0 1 1 4.143-4.62 1.562 1.562 0 1 0 3.107-.336 7.26 7.26 0 0 0-5.688-6.32v-1.826a1.563 1.563 0 0 0-3.124 0v1.82a7.287 7.287 0 0 0 1.562 14.407 4.168 4.168 0 1 1-4.157 4.477 1.563 1.563 0 1 0-3.117.226 7.313 7.313 0 0 0 5.712 6.572v1.828a1.564 1.564 0 0 0 1.562 1.563Z'
      />
      <path
        fill='#040325'
        d='M89.451 61.578a1.566 1.566 0 0 0-1.979.985c-11.47 33.951-58.985 35.89-73.275 3.203l6.41 2.407a1.563 1.563 0 0 0 1.098-2.926l-9.531-3.58a1.638 1.638 0 0 0-2.181.851l-3.643 9.7a1.563 1.563 0 0 0 2.925 1.099l2.231-5.94a42.43 42.43 0 0 0 78.928-3.82 1.562 1.562 0 0 0-.983-1.979Z'
      />
      <path
        fill='#6C6D84'
        d='M92.675 25.61a1.56 1.56 0 0 0-1.972.997l-1.898 5.779C72.999-2.374 22.236.099 9.989 36.443a1.562 1.562 0 0 0 2.962.995C24.458 3.389 72.159 1.568 86.319 34.43l-6.722-2.21a1.563 1.563 0 0 0-.975 2.97l9.844 3.235a1.608 1.608 0 0 0 1.972-.997l3.234-9.845a1.563 1.563 0 0 0-.997-1.973Z'
      />
    </svg>
  );
};
