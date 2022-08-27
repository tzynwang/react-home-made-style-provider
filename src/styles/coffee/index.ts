import type { Interpolation, Theme } from '../types';

const coffee: Interpolation<Theme> = {
  height: '100vh',
  width: '100vw',
  padding: '16px',
  backgroundColor: '#211720',
  color: '#d5c8d5',
  fontFamily: 'monospace',
  '& button': {
    border: 'none',
    padding: '8px 16px',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    backgroundColor: '#dc944c',
    color: '#3d1f00',
    cursor: 'pointer',
  },
  '& hr': {
    height: '1px',
    margin: '16px auto',
    border: 'none',
    backgroundImage: 'linear-gradient(to right, #211720, #d5c8d5, #211720)',
  },
  '& .Stack': {
    display: 'flex',
    gap: '16px',
  },
  '& .Badge': {
    display: 'inline-block',
    padding: '4px 8px',
    backgroundColor: '#dc944c',
    color: '#3d1f00',
  },
  '& .CheckBoxLabel': {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    cursor: 'pointer',
  },
  'input[type="checkbox"]': {
    width: '24px',
    height: '24px',
    position: 'relative',
    cursor: 'pointer',
  },
  'input[type="checkbox"]:before': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    display: 'block',
    backgroundColor: '#746d63',
  },
  'input[type="checkbox"]:checked:before': {
    content: '"✓"',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#746d63',
    color: '#211720',
    fontSize: '20px',
  },
};

export default coffee;
