import type { Interpolation, Theme } from '../types';

const garden: Interpolation<Theme> = {
  height: '100vh',
  width: '100vw',
  padding: '16px',
  backgroundColor: '#e9e7e7',
  color: '#100f0f',
  fontFamily: 'sans-serif',
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
  '& hr': {
    height: '1px',
    margin: '16px auto',
    border: 'none',
    borderBottom: '1px dashed #100f0f',
  },
  '& .Stack': {
    display: 'flex',
    gap: '16px',
  },
  '& .Badge': {
    display: 'inline-block',
    padding: '4px 12px',
    borderRadius: '16px',
    backgroundColor: '#5d5656',
    color: '#e9e7e7',
  },
  '& .CheckBoxLabel': {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    cursor: 'pointer',
    'input[type="checkbox"]': {
      width: '24px',
      height: '24px',
      position: 'relative',
      cursor: 'pointer',
      accentColor: '#5c7f67',
      appearance: 'none',
    },
    'input[type="checkbox"]:before': {
      content: '""',
      width: '100%',
      height: '100%',
      boxSizing: 'border-box',
      position: 'absolute',
      top: 0,
      left: 0,
      display: 'block',
      border: '1px solid #5d5656',
      borderRadius: '24px',
      backgroundColor: 'transparent',
    },
    'input[type="checkbox"]:checked:before': {
      content: '"✗"',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#5d5656',
      color: '#e9e7e7',
      fontSize: '16px',
    },
  },
  '& .ToggleLabel': {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    cursor: 'pointer',
    '& input[type="checkbox"]': {
      appearance: 'none',
    },
    '& .ToggleTrack': {
      width: '48px',
      height: '24px',
      position: 'relative',
    },
    '& .ToggleTrack:before': {
      content: '""',
      width: '48px',
      height: '18px',
      position: 'absolute',
      top: '50%',
      left: '50%',
      backgroundColor: 'transparent',
      border: '1px solid #5d5656',
      borderRadius: '16px',
      transform: 'translate(-50%, -50%)',
    },
    '& .ToggleTrack:after': {
      content: '""',
      boxSizing: 'border-box',
      width: '16px',
      height: '16px',
      position: 'absolute',
      top: '50%',
      left: '9px',
      backgroundColor: 'transparent',
      border: '1px solid #5d5656',
      borderRadius: '16px',
      transform: 'translate(-50%, -50%)',
      transition: 'all .2s ease',
    },
    '& input[type="checkbox"]:checked ~ .ToggleTrack:before': {
      borderColor: '#5c7f67',
    },
    '& input[type="checkbox"]:checked ~ .ToggleTrack:after': {
      backgroundColor: '#5c7f67',
      borderColor: '#5c7f67',
      transform: 'translate(135%, -50%)',
    },
  },
};

export default garden;
