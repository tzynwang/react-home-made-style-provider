import { createContext, Context, Dispatch, SetStateAction } from 'react';

interface StyleContext<T> {
  styleName: T;
  setStyleName: Dispatch<SetStateAction<T>>;
}

function createStyleContext<T>(): Context<StyleContext<T> | null> {
  return createContext<null | StyleContext<T>>(null);
}

export default createStyleContext;
