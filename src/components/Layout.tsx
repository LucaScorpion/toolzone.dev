import React from 'react';
import { classNames } from '../utils/classNames';
import { GitHubCorner } from './GitHubCorner';

export interface Props {
  className?: string;
}

export const Layout: React.FC<Props> = ({ children, className }) => (
  <div className={classNames('layout', className)}>
    <div className="top-bar">
      <h1 className="title">Utilitools</h1>
    </div>
    <GitHubCorner />
    <main>{children}</main>
  </div>
);
