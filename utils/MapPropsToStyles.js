import clsx from 'clsx';

export const MapPropsToStyles = (styles, className) => {
  if (className) {
    var classArr = className.split(' ');
    var classNames = [];
    classArr.map((c) => {
      if (styles[c]) {
        classNames.push(styles[c]);
      }
    });

    return clsx(classNames);
  } else {
    return '';
  }
};
