import createStyleContext from '@Tools/create-style-context';
import type { StyleKeys, StylePool, Interpolation, Theme } from './types';

export const STYLE_KEYS = ['coffee', 'garden'] as const;

export const StyleContext = createStyleContext<StyleKeys>();

class Style {
  public stylePool: StylePool = [];

  private init(): void {
    this.stylePool = STYLE_KEYS.map((key) => ({
      key,
      style: require(`@Styles/${key}`).default,
    }));
  }

  constructor() {
    this.init();
  }

  public getStyle(key: StyleKeys): Interpolation<Theme> {
    const find = this.stylePool.find((t) => t.key === key);
    if (!find) return {}; // fallback to empty style
    return find.style;
  }
}

export default new Style();
