import React from 'react';

export const EyeOnSvg: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={34}
      height={34}
      fill="none"
    >
      <circle cx={17} cy={17} r={16} fill="#FFD9C3" stroke="#FF8A71" strokeWidth={1.5} />
      <path
        d="M17 12.5c4.5 0 8.4 2.8 10.2 6.5-1.8 3.7-5.7 6.5-10.2 6.5s-8.4-2.8-10.2-6.5c1.8-3.7 5.7-6.5 10.2-6.5Z"
        fill="#fff"
        stroke="#FF8A71"
        strokeWidth={1.5}
      />
      <circle cx={17} cy={17} r={3} fill="#FFD9C3" stroke="#FF8A71" strokeWidth={1.5} />
    </svg>
  );
};
