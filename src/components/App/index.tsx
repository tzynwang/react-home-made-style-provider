import React, { memo } from 'react';
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
      <div className="Stack">
        {BADGE_ARRAY.map((badge, index) => (
          <span key={index} className="Badge">
            {badge}
          </span>
        ))}
      </div>
      <hr />
      <label htmlFor="checkBox" className="CheckBoxLabel">
        checkbox
        <input type="checkbox" name="checkBox" id="checkBox" />
      </label>
    </React.Fragment>
  );
}

export default memo(App);
