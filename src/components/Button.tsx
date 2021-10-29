import React from 'react';
import { cls } from '../utils/utils';
import './Button.scss';

interface ButtonProps {
  children?: React.ReactNode, 
  className?: string,
  disabled?: boolean,
  style?: 'filled' | 'outline' | 'ghost',
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'giant',
  variant?: 'basic' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'control'
}

const classes = {
  base: 'fs-btn',
  disabled: 'fs-btn-disabled',
  style: {
    filled: 'fs-btn-filled',
    outline: 'fs-btn-outline',
    ghost: 'fs-btn-ghost'
  },
  size: {
      tiny: 'fs-btn-tiny',
      small: 'fs-btn-small',
      medium: 'fs-btn-medium',
      large: 'fs-btn-large',
      giant: 'fs-btn-giant'
  },
  variant: {
      basic: 'fs-btn-basic',
      primary: 'fs-btn-primary',
      success: 'fs-btn-success',
      info: 'fs-btn-info',
      warning: 'fs-btn-warning',
      danger: 'fs-btn-danger',
      control: 'fs-btn-control'
  }
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  disabled,
  style,
  size,
  variant
}) => {
  return (
    <button 
      disabled={disabled} 
      type="button" 
      className={cls(`
        ${classes.base} 
        ${classes.style[style || 'filled']}
        ${classes.size[size || 'medium']} 
        ${classes.variant[variant || 'primary']}
        ${disabled && classes.disabled} 
        ${className}
      `)}
    >
      {children}
    </button>
  );
};

export default Button