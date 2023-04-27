import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from '../utils/classNames';
import { Icon } from './Icon';

export interface Props {
  children: ReactNode;
  className?: string;
}

export const Layout: React.FC<Props> = ({ children, className }) => (
  <div className={classNames('layout', className)}>
    <div className="top-bar">
      <Link to="/">
        <h1 className="title">toolzone.dev</h1>
      </Link>
      <a
        href="https://github.com/LucaScorpion/toolzone.dev"
        rel="nofollow noopener noreferrer"
      >
        <Icon icon="github" iconStyle="brands" size={2} />
      </a>
    </div>
    <main>{children}</main>
  </div>
);
