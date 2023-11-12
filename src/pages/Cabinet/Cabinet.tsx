import React, { FC } from 'react'
import { createNavButtonConfig } from './config';
import { Link } from 'react-router-dom';
import { MyButton } from 'components';
import { useAppDispatch } from 'hooks/redux';
import { setAuth } from 'store/reducers/auth';
import classes from "./Cabinet.module.scss";

export const Cabinet: FC = () => {
  const dispatch = useAppDispatch()

  const exitAccount = () => {
    localStorage.removeItem('TokenUserAuthorization');
    dispatch(setAuth(false))
  }

  return (
    <div className={classes.cabinet}>
      <div className={classes.cabinetContainer}>
        <p className={classes.firstLevelText}>User cabinet:</p>
        <p className={classes.secondLevelText}>Name: Yehor</p>

        <nav className={classes.routeButtonsBox}>
            {createNavButtonConfig.map(({path, text, img}, index)=> {
            return (
                <Link key={index} to={path}>
                    <MyButton             
                    variant="no-fill"
                    className={classes.routeButtons}>
                        <img src={img} alt={`${img}`}/>
                        <p>{text}</p>
                    </MyButton>
                </Link>
            );
        })}
        </nav>
        <Link to="/">
          <MyButton 
          variant="no-fill"
          className={classes.buttonExit}
          onClick={exitAccount}>
            Exit
          </MyButton>
        </Link>
      </div>
    </div>
  )
}
