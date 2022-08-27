/** @jsxImportSource @emotion/react */
import React, { memo, useMemo } from 'react';
import cn from 'classnames';
import type { StackProps } from './types';

function Stack(props: StackProps): React.ReactElement {
  /* States */
  const { children, css, direction = 'column', gap = 16, ...rest } = props;
  const stackGap = useMemo(() => (typeof gap !== 'number' ? 0 : gap), [gap]);
  const classNameFromProps = rest.className || '';
  delete rest.className;

  /* Main */
  return (
    <div
      css={{ display: 'flex', gap: stackGap, flexDirection: direction }}
      className={cn(classNameFromProps, css)}
      {...rest}
    >
      {children}
    </div>
  );
}

export default memo(Stack);
