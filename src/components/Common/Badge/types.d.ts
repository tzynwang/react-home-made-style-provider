import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: React.ReactNode;
}
