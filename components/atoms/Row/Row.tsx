import React from 'react';
import styles from './Row.module.scss';
import clsx from 'clsx';

interface Props {
  children: React.ReactNode;
  style?: string;
}

const Row: React.FC<Props> = ({ children, style }) => {
  return <div className={clsx(styles.row, style && style)}>{children}</div>;
};

export default Row;
