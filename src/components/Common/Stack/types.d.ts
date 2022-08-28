import React from 'react';
import type { Interpolation, Theme } from '@emotion/react';

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement;
  css?: Interpolation<Theme>;
  direction?: 'row' | 'column';
  gap?: number;
}
