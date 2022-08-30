import React, { memo, useState, useMemo } from 'react';
import InputText from '@Components/Common/InputText';

function InputTextDemo(): React.ReactElement {
  /* States */
  const [textInput, setTextInput] = useState<string>('');
  const validAccount = useMemo(
    () => (!textInput ? true : textInput.length > 5 && textInput.length < 17),
    [textInput]
  );
  const hint = useMemo(
    () => (validAccount ? '' : 'not valid account'),
    [validAccount]
  );

  /* Functions */
  const handleInputChange = (e: React.ChangeEvent): void => {
    const input = e.target as HTMLInputElement;
    setTextInput(input.value);
  };

  /* Main */
  return (
    <InputText
      id="InputTextDemo"
      labelText="account (length between 6 to 16 characters)"
      placeholder="here is the placeholder"
      value={textInput}
      error={!validAccount}
      helperText={hint}
      onChange={handleInputChange}
    />
  );
}

export default memo(InputTextDemo);
