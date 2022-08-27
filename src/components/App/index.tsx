import React, { memo } from 'react';
import StyleToggle from '@Components/Common/StyleToggle';

function App(): React.ReactElement {
  /* Main */
  return (
    <React.Fragment>
      <StyleToggle />
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam sapiente
        quidem ab autem, quod a facere reiciendis iusto voluptatum maiores
        provident. Eum et voluptas sapiente minus doloremque obcaecati?
        Delectus, repellendus.
      </div>
    </React.Fragment>
  );
}

export default memo(App);
