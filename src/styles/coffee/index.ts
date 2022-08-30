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
    'input[type="checkbox"]': {
      display: 'none',
      position: 'relative',
    },
    '& .CheckBoxCheckIcon': {
      width: '24px',
      height: '24px',
      position: 'relative',
      backgroundColor: '#333',
      cursor: 'pointer',
    },
    '.CheckBoxCheckIcon:after': {
      content: '""',
      width: '8px',
      height: '12px',
      position: 'absolute',
      borderWidth: '0px 3px 3px 0px',
      borderColor: '#fff',
      borderStyle: 'solid',
      opacity: 0,
      transform: 'rotate(40deg) translate(6px, -2px)',
      transition: 'opacity .2s ease',
    },
    'input[type="checkbox"]:checked ~ .CheckBoxCheckIcon': {
      backgroundColor: '#dc944c',
    },
    'input[type="checkbox"]:checked ~ .CheckBoxCheckIcon:after': {
      opacity: 1,
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
      width: '32px',
      height: '8px',
      position: 'absolute',
      top: '50%',
      left: '50%',
      backgroundColor: '#333',
      transform: 'translate(-50%, -50%)',
    },
    '& .ToggleTrack:after': {
      content: '""',
      width: '16px',
      height: '16px',
      position: 'absolute',
      top: '50%',
      left: '12px',
      backgroundColor: '#3d1f00',
      transform: 'translate(-50%, -50%) rotate(45deg)',
      transition: 'all .2s ease',
    },
    '& input[type="checkbox"]:checked ~ .ToggleTrack:before': {
      backgroundColor: '#fff',
    },
    '& input[type="checkbox"]:checked ~ .ToggleTrack:after': {
      backgroundColor: '#dc944c',
      transform: 'translate(100%, -50%) rotate(45deg)',
    },
  },
  '& .InputTextLabel': {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    '& .InputTextLabelText': {
      marginBottom: '4px',
    },
    '& input[type="text"]': {
      minHeight: '32px',
      display: 'flex',
      alignItems: 'center',
      padding: '8px',
      border: 'none',
      outline: '1px solid transparent',
      fontFamily: 'inherit',
      fontSize: 'inherit',
      backgroundColor: '#dc944c',
      color: '#3d1f00',
      transition: 'outline .2s ease',
    },
    '& input[type="text"]::placeholder': {
      color: '#3d1f00',
    },
    '& input[type="text"]::selection': {
      backgroundColor: '#211720',
      color: '#dc944c',
    },
  },
  '& .InputTextLabel.InputTextError': {
    '& input[type="text"]': {
      position: 'relative',
      outline: '1px solid #c11616',
      boxShadow: '0 0 4px #c11616',
    },
    '& .InputTextHelperText': {
      color: '#c11616',
    },
  },
};

export default coffee;
