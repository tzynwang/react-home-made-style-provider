import React, { memo } from 'react';
import Badge from '@Components/Common/Badge';
import Stack from '@Components/Common/Stack';
import StyleToggle from '@Components/Common/StyleToggle';

const BADGE_ARRAY: string[] = ['here', 'are', 'some', 'badges'];

function App(): React.ReactElement {
  /* Main */
  return (
    <React.Fragment>
      <StyleToggle />
      <hr />
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam sapiente
        quidem ab autem, quod a facere reiciendis iusto voluptatum maiores
        provident. Eum et voluptas sapiente minus doloremque obcaecati?
        Delectus, repellendus.
      </div>
      <hr />
      <Stack direction="row">
        {BADGE_ARRAY.map((badge, index) => (
          <Badge text={badge} key={index} />
        ))}
      </Stack>
      <hr />
      <Stack>
        <label htmlFor="checkBox" className="CheckBoxLabel">
          checkbox
          <input type="checkbox" name="checkBox" id="checkBox" />
        </label>
        <label htmlFor="toggle" className="ToggleLabel">
          toggle
          <input type="checkbox" id="toggle" />
          <span className="ToggleTrack"></span>
        </label>
      </Stack>
    </React.Fragment>
  );
}

export default memo(App);
