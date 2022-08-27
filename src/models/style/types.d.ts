import { STYLE_KEYS } from '@Models/style';
import type { Interpolation, Theme } from '@emotion/react';

export type StyleKeys = typeof STYLE_KEYS[number];

export type StylePool = Array<{ key: StyleKeys; style: Interpolation<Theme> }>;

export type { Interpolation, Theme };
