import React from 'react';
import styles from './Row.module.scss';

interface Props {
  children: React.ReactNode;
}

const Row: React.FC<Props> = ({ children }) => {
  return <div className={`${styles.row}`}>{children}</div>;
};

export default Row;
