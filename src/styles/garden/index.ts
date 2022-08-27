import type { Interpolation, Theme } from '../types';

const garden: Interpolation<Theme> = {
  height: '100vh',
  width: '100vw',
  padding: '16px',
  backgroundColor: '#e9e7e7',
  color: '#100f0f',
  '& button': {
    border: 'none',
    padding: '8px 16px',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    backgroundColor: '#5c7f67',
    color: '#c7ffd9',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

export default garden;
