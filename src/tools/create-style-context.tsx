import { createContext, Context, Dispatch, SetStateAction } from 'react';

function createStyleContext<T>(): Context<{
  styleName: T;
  setStyleName: Dispatch<SetStateAction<T>>;
} | null> {
  return createContext<null | {
    styleName: T;
    setStyleName: Dispatch<SetStateAction<T>>;
  }>(null);
}

export default createStyleContext;
