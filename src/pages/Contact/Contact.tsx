import React, { FC } from 'react'
import { InformationBoard, PosterPage } from 'components'
import { contactPageConfig } from './config'
import classes from "./Contact.module.scss"

export const Contact: FC = () => {
  return (
    <div className={classes.contact}>
        <PosterPage namePage='Contact'/>
        <div className={classes.contactContainer}>
          {contactPageConfig.map(({src, name, description}, index)=> {
                  return (
                      <div
                      className={classes.element}
                      key={index}>
                          <div className={classes.imgContainer}>
                            <img src={src} alt={`${src}`}/>
                          </div>
                          <div
                          className={classes.textContainer}>
                          <p className={classes.nameText}>{name}</p>
                          <p className={classes.descriptionText}>{description}</p>
                          </div>
                      </div>
                  );
          })}
        </div>
        <InformationBoard/>
    </div>
  )
}
