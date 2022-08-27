/** @jsxImportSource @emotion/react */
import React, { memo, useState, useMemo } from 'react';
import coffee from '@Styles/coffee';
import garden from '@Styles/garden';

function App(): React.ReactElement {
  /* States */
  const [styleSet, setStyleSet] = useState<'coffee' | 'garden'>('garden');

  /* Functions */
  const changeStyle = (): void => {
    setStyleSet((prev) => (prev === 'coffee' ? 'garden' : 'coffee'));
  };

  /* Views */
  const dynamicCss = useMemo(() => {
    if (styleSet === 'coffee') {
      return coffee;
    }
    if (styleSet === 'garden') {
      return garden;
    }
    return {};
  }, [styleSet]);

  /* Main */
  return (
    <React.Fragment>
      <button type="button" onClick={changeStyle}>
        change style
      </button>
      <div css={dynamicCss}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam sapiente
        quidem ab autem, quod a facere reiciendis iusto voluptatum maiores
        provident. Eum et voluptas sapiente minus doloremque obcaecati?
        Delectus, repellendus.
        <button type="button">just a button</button>
      </div>
    </React.Fragment>
  );
}

export default memo(App);
