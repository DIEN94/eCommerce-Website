import React, { FC } from 'react'
import { informationBoardConfig } from './config'
import classes from "./InformationBoard.module.scss"

export const InformationBoard: FC = () => {

  return (
    <div className={classes.informationBoard}>
        <div className={classes.container}>
            {informationBoardConfig.map(({src, name, description}, index)=> {
                return (
                    <div
                    className={classes.element}
                    key={index}>
                        <img src={src} alt={`${src}`}/>
                        <div
                        className={classes.textContainer}>
                        <p className={classes.nameText}>{name}</p>
                        <p className={classes.descriptionText}>{description}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
  )
}
