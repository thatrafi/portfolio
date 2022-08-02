import React from 'react';
import styles from './RoundedImage.module.scss';
import Image from 'next/image';
import { MapPropsToStyles } from '../../../utils/MapPropsToStyles';
import { ImageSize } from '../../../data/types/UI/types';

interface Props {
  src?: string;
  size: ImageSize;
}

const RoundedImage: React.FC<Props> = ({ src, size }) => {
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
    <div className={`${styles.imgRounded} ${sizeClass}`}>
      <Image
        src={img}
        alt={fileName}
      />
    </div>
  );
};

export default RoundedImage;
