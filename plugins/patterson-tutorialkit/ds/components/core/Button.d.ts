import * as React from 'react';

export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual intent. @default "primary" */
  variant?: 'primary' | 'sky' | 'outline' | 'ghost' | 'onDark';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

/**
 * Pill-shaped action button in the Patterson brand. Primary is solid navy and
 * shifts to sky on hover; use `sky`, `outline`, `ghost` for secondary actions
 * and `onDark` over navy surfaces.
 *
 * @startingPoint section="Core" subtitle="Pill button — navy→sky hover, 5 variants" viewport="700x220"
 */
export function Button(props: ButtonProps): JSX.Element;
