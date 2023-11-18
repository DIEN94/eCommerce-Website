import React, { FC } from 'react'
import { InformationBoard, PosterPage } from 'components';
import { aboutPageImgConfig } from './config';
import classes from "./About.module.scss"

export const About: FC = () => {
  return (
    <div className={classes.about}>
        <PosterPage namePage='About'/>
        <div className={classes.aboutContainer}>
          <div className={classes.textContainer}>
            <p className={classes.titleText}>
              Furniro
            </p>
            <p className={classes.descriptionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Mus mauris vitae ultricies leo integer malesuada nunc. In nulla 
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus 
              at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. 
              Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. 
              Pellentesque elit ullamcorper dignissim cras tincidunt. 
              Pharetra et ultrices neque ornare aenean euismod elementum.
            </p>
          </div>
          <div className={classes.imgBox}>
            {aboutPageImgConfig.map(({src}, index)=> {
              return (
                <div className={classes.imgContainer} key={index}>
                   <img src={src} alt={`${src}`}/>
                </div>
              );
            })}
          </div>
        </div>
        <InformationBoard/>
    </div>
  )
}
