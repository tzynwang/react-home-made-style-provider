import React, { memo, useState, useEffect } from 'react';
import Style, { StyleContext } from '@Models/style';
import type {
  StyleProviderProps,
  Interpolation,
  Theme,
  StyleKeys,
} from './types';

function StyleProvider(props: StyleProviderProps): React.ReactElement {
  /* States */
  const { children } = props;
  const [styleName, setStyleName] = useState<StyleKeys>('coffee');
  const [dynamicStyle, setDynamicStyle] = useState<Interpolation<Theme>>(
    Style.getStyle(styleName)
  );

  /* Hooks */
  useEffect(() => {
    setDynamicStyle(Style.getStyle(styleName));
  }, [styleName]);

  /* Main */
  return (
    <StyleContext.Provider value={{ styleName, setStyleName }}>
      <div className="AppStyleProvider" css={dynamicStyle}>
        {children}
      </div>
    </StyleContext.Provider>
  );
}

export default memo(StyleProvider);
