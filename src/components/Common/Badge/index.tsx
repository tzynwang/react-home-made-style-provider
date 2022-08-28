import React, { memo } from 'react';
import cn from 'classnames';
import type { BadgeProps } from './types';

function Badge(props: BadgeProps): React.ReactElement {
  /* States */
  const { text, ...rest } = props;
  const classNameFromProps = rest.className;
  delete rest.className;

  /* Main */
  return (
    <span className={cn('Badge', classNameFromProps)} {...rest}>
      {text}
    </span>
  );
}

export default memo(Badge);
