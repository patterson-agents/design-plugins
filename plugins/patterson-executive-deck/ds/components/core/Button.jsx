import React from 'react';

/**
 * Patterson primary action button.
 * Variants map to brand intent: solid navy/sky for primary actions,
 * outline & ghost for secondary, on-dark for use over navy surfaces.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: { height: 'var(--control-h-sm)', padding: '0 16px', font: 'var(--fs-sm)' },
    md: { height: 'var(--control-h-md)', padding: '0 22px', font: 'var(--fs-body)' },
    lg: { height: 'var(--control-h-lg)', padding: '0 30px', font: 'var(--fs-h5)' },
  };
  const s = sizes[size] || sizes.md;

  const variants = {
    primary: { background: 'var(--pat-navy)', color: '#fff', border: '2px solid var(--pat-navy)' },
    sky:     { background: 'var(--pat-sky)', color: '#fff', border: '2px solid var(--pat-sky)' },
    outline: { background: 'transparent', color: 'var(--pat-navy)', border: '2px solid var(--pat-navy)' },
    ghost:   { background: 'transparent', color: 'var(--pat-navy)', border: '2px solid transparent' },
    onDark:  { background: '#fff', color: 'var(--pat-navy)', border: '2px solid #fff' },
  };
  const v = variants[variant] || variants.primary;

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    height: s.height,
    padding: s.padding,
    width: fullWidth ? '100%' : 'auto',
    fontFamily: 'var(--font-sans)',
    fontSize: s.font,
    fontWeight: 'var(--fw-semibold)',
    lineHeight: 1,
    letterSpacing: '0.01em',
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
    whiteSpace: 'nowrap',
    ...v,
    ...style,
  };

  const hoverIn = (e) => {
    if (disabled) return;
    const el = e.currentTarget;
    if (variant === 'primary') el.style.background = 'var(--pat-sky)', el.style.borderColor = 'var(--pat-sky)';
    else if (variant === 'sky') el.style.background = 'var(--pat-navy)', el.style.borderColor = 'var(--pat-navy)';
    else if (variant === 'outline') el.style.background = 'var(--pat-navy)', el.style.color = '#fff';
    else if (variant === 'ghost') el.style.background = 'var(--pat-navy-25)';
    else if (variant === 'onDark') el.style.background = 'var(--pat-sky)', el.style.color = '#fff', el.style.borderColor = 'var(--pat-sky)';
  };
  const hoverOut = (e) => {
    const el = e.currentTarget;
    Object.assign(el.style, { background: v.background, color: v.color, borderColor: v.border.split(' ').pop() });
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={base}
      onMouseEnter={hoverIn}
      onMouseLeave={hoverOut}
      onMouseDown={(e) => !disabled && (e.currentTarget.style.transform = 'translateY(1px)')}
      onMouseUp={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
