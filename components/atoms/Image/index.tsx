import React from 'react';
import Image from 'next/image';
import styles from './Image.module.scss';
import { MapPropsToStyles } from '../../../utils/MapPropsToStyles';
import { ImageSize } from '../../../data/types/UI/types';
import clsx from 'clsx';

interface Props {
  src?: string;
  size: ImageSize;
  classes?: string;
}

const CustomImage: React.FC<Props> = ({ src, size, classes }) => {
  var img = '';
  var fileName = src;
  var sizeClass = MapPropsToStyles(styles,size);
  
  try {
    img = require(`../../../assets/images/${fileName}`);
  } catch (error) {
    fileName = 'default.png';
    img = require(`../../../assets/images/${fileName}`);
  }

  return (
    <div className={clsx(styles.wrapper, sizeClass, classes)}>
      <Image
        src={img}
        alt={fileName}
      />
    </div>
  );
};

export default CustomImage;
