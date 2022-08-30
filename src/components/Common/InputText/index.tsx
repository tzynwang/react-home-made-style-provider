import React, { memo } from 'react';
import cn from 'classnames';
import type { InputTextProps } from './types';

function InputText(props: InputTextProps): React.ReactElement {
  /* States */
  const { id, labelText = '', error = false, helperText = '', ...rest } = props;

  /* Main */
  return (
    <label
      htmlFor={id}
      className={cn('InputTextLabel', error && 'InputTextError')}
    >
      {labelText && <span className="InputTextLabelText">{labelText}</span>}
      <input type="text" id={id} {...rest} />
      {helperText && <span className="InputTextHelperText">{helperText}</span>}
    </label>
  );
}

export default memo(InputText);
