import React from 'react';

import {utils} from '../utils';
import {theme} from '../constants';

interface ButtonProps {
  title: string;
  onClick?: () => void;
  colorScheme?: 'dark' | 'light';
  disabled?: boolean;
  style?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  style,
  onClick,
  colorScheme = 'dark',
  containerStyle,
  disabled = false,
}) => {
  return (
    <div style={{...containerStyle}}>
      <button
        onClick={onClick}
        disabled={disabled}
        style={{
          width: '100%',
          color:
            disabled
              ? '#a9a9a9' // Gray color for disabled text
              : colorScheme === 'dark'
              ? theme.colors.white // White text for dark color scheme
              : theme.colors.mainDark, // Dark text for light color scheme
          height: 40,
          textAlign: 'center',
          fontSize: 16,
          borderRadius: 10,
          textTransform: 'capitalize',
          border:
            disabled
              ? '1px solid #d3d3d3' // Light gray border for disabled state
              : colorScheme === 'dark'
              ? 'none' // No border for dark color scheme
              : '1px solid #FFD9C3', // Light color scheme border
          background:
            disabled
              ? '#e0e0e0' // Gray background for disabled state
              : colorScheme === 'dark'
              ? theme.colors.mainDark // Dark background for dark color scheme
              : '#FFD9C3', // Light background for light color scheme
          cursor: disabled ? 'not-allowed' : 'pointer', // Disabled cursor
          ...utils.flexCenter(),
          ...theme.fonts.SourceSansPro_600SemiBold,
          ...style,
        }}
      >
        {title}
      </button>
    </div>
  );
};
