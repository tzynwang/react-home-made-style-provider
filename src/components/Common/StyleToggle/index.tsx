import React, { memo, useContext } from 'react';
import { StyleContext } from '@Models/style';

function StyleToggle(): React.ReactElement {
  /* States */
  const context = useContext(StyleContext);

  /* Functions */
  const handleToggleStyle = (): void => {
    if (context?.styleName === 'coffee') {
      context?.setStyleName('garden');
    } else {
      context?.setStyleName('coffee');
    }
  };

  /* Main */
  return (
    <button type="button" onClick={handleToggleStyle}>
      toggle style
    </button>
  );
}

export default memo(StyleToggle);
