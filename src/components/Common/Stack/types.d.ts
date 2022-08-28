import React from 'react';
import type { Interpolation, Theme } from '@emotion/react';

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode; // INFO: allow passing multiple child components without wrapping in <React.Fragment />
  css?: Interpolation<Theme>;
  direction?: 'row' | 'column';
  gap?: number;
}
