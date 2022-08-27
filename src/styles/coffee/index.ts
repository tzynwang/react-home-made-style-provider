import type { Interpolation, Theme } from '../types';

const coffee: Interpolation<Theme> = {
  height: '100vh',
  width: '100vw',
  padding: '16px',
  backgroundColor: '#211720',
  color: '#d5c8d5',
  '& button': {
    border: 'none',
    padding: '8px 16px',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    backgroundColor: '#dc944c',
    color: '#3d1f00',
    cursor: 'pointer',
  },
};

export default coffee;
