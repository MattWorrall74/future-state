import React from 'react';
import { cls } from '../utils/utils';
import './Card.scss';

interface CardProps {
  children?: React.ReactNode, 
  className?: string,
  heading?: string,
  renderHeadingAs?: 'h1' | 'h2' | 'h3' | 'h4'| 'h5' | 'h6',
  variant?: 'regular' | 'accent' | 'highlight'
}

const classes = {
  base: 'fs-card',
  variant: {
      regular: 'fs-card-regular',
      accent: 'fs-card-accent',
      highlight: 'fs-card-highlight'
  }
}

const Card: React.FC<CardProps> = ({
  children,
  className,
  heading,
  renderHeadingAs,
  variant
}) => {

  const HeadingTag = `${renderHeadingAs || 'h1'}` as keyof JSX.IntrinsicElements;

  return (
    <div className={cls(`${classes.base} ${classes.variant[variant || 'regular']} ${className}`)}>
      <div className="fs-card-header">
        <HeadingTag className="fs-h6">{heading}</HeadingTag>
      </div>
      <div className="fs-card-body">
        {children}
      </div>
      <div className="fs-card-footer"></div>
    </div>
  );
}

export default Card;