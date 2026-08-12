import * as React from 'react';

export interface BadgeProps {
  children?: React.ReactNode;
  /** @default "navy" */
  tone?: 'navy' | 'sky' | 'green' | 'teal' | 'purple' | 'gray' | 'warning' | 'danger';
  /** Filled instead of soft-tint. @default false */
  solid?: boolean;
  style?: React.CSSProperties;
}

/** Small status/label badge in brand & semantic tones. Sentence case [BG25 p.25]. */
export function Badge(props: BadgeProps): JSX.Element;
