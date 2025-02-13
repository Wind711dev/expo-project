import { useState } from 'react';

export * from './borderRadius';
export * from './shadow';
export * from './types';


export const theme = {
  dark: {
    primary: '#F47746', // Dark Orange
    secondary: '#D81B60', // Pink
    success: '#2E7D32', // Darker Green
    warning: '#FF9800', // Orange
    danger: '#B71C1C', // Darker Red
    info: '#b2b2b2', // Grey
    typo: '#fdfdfd' // Light
  },
  light: {
    primary: '#eb581e', // Light Orange
    secondary: '#E91E63', // Pink
    success: '#388E3C', // Darker Green
    warning: '#FF9800', // Orange
    danger: '#D32F2F', // Darker Red
    info: '#2b2b2b', // Grey
    typo: '#2b2b2b' // Dark
  }
};

export const useTheme = () => {
  const [isDark] = useState(false);
  return isDark ? theme.dark : theme.light;
};
