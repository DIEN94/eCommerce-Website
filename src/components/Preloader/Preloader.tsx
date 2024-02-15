import React from 'react';
import classes from './Preloader.module.scss';

export const Preloader = () => {
  return (
    <div className={classes.preloader}>
      <div className={classes.loader}></div>
    </div>
  );
};