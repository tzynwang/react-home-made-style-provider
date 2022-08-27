import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@Components/App';
import StyleProvider from '@Components/Layer/StyleProvider';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <StyleProvider>
      <App />
    </StyleProvider>
  </React.StrictMode>
);
