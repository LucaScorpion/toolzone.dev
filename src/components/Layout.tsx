import React from 'react';
import { Link } from 'react-router-dom';
import { classNames } from '../utils/classNames';
import { GitHubCorner } from './GitHubCorner';

export interface Props {
  className?: string;
}

export const Layout: React.FC<Props> = ({ children, className }) => (
  <div className={classNames('layout', className)}>
    <div className="top-bar">
      <Link to="/">
        <h1 className="title">Utilitools</h1>
      </Link>
    </div>
    <GitHubCorner />
    <main>{children}</main>
  </div>
);
