import React from 'react';
import { classNames } from '../utils/classNames';

export interface Props {
  className?: string;
}

export const Layout: React.FC<Props> = ({ children, className }) => (
  <div className={classNames('layout', className)}>
    <div className="top-bar">
      <h1>Utilitools</h1>
    </div>
    <main>{children}</main>
  </div>
);
