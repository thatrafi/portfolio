import React from 'react';
import styles from './RoundedImage.module.scss';
import Image from 'next/image';
import { MapPropsToStyles } from '../../../utils/MapPropsToStyles';

export enum ImageSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  BIG = 'big',
}

interface Props {
  src?: string;
  size: ImageSize;
}

const RoundedImage: React.FC<Props> = ({ src, size }) => {
  var img = '';
  var fileName = src;
  var sizeClass = MapPropsToStyles(styles,size);
  
  try {
    img = require(`../../../images/${fileName}`);
  } catch (error) {
    fileName = 'default.png';
    img = require(`../../../images/${fileName}`);
  }

  return (
    <div className={`${styles.imgRounded} ${sizeClass}`}>
      <Image
        src={img}
        alt={fileName}
      />
    </div>
  );
};

export default RoundedImage;
