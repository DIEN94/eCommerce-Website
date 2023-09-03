import React from 'react'
import { createNavButtonConfig, createNavButtonConfigSecond } from './config';
import { Link } from 'react-router-dom';
import { MyButton } from 'components/Button/MyButton';
import { MyInput } from 'components/Input/MyInput';
import classes from "./Footer.module.scss"

export const Footer = () => {

  const addEmail = () => {
    console.log("addEmail");
  };

  return (
    <div className={classes.footer}>
      <div className={classes.columnContainer}>
      {/* Column1 */}
      <div className={classes.column}>
        <span className={classes.textFurniro}>Furniro</span>
        <p className={classes.textAddress}>
          400 University Drive Suite 200 Coral <br/>
          Gables,<br/>
          FL 33134 USA
        </p>
      </div>
      
      {/* Column2 */}
      <div className={classes.column}>
      <p className={classes.columnName}>Links</p>
      <nav className={classes.routeButtonsBox1}>
      {createNavButtonConfig.map(({path, text}, index)=> {
        return (
          <Link to={path} key={index}>
            <MyButton
              variant="no-fill"
              className={classes.routeButtons}>
              {text}
            </MyButton>
          </Link>
        );
      })}
      </nav>
      </div>

      {/* Column3 */}
      <div className={classes.column}>
      <p className={classes.columnName}>Help</p>
      <nav className={classes.routeButtonsBox2}>
      {createNavButtonConfigSecond.map(({path, text,}, index)=> {
        return (
          <Link to={path} key={index}>
            <MyButton
              variant="no-fill"
              className={classes.routeButtons}>
              {text}
            </MyButton>
          </Link>
        );
      })}
      </nav>
      </div>

      {/* Column4 */}
      <div className={classes.column}>
        <p className={classes.columnName}>Newsletter</p>
        <div className={classes.emailSubscribeField}>
          <MyInput className={classes.input} placeholder='Enter Your Email Address'></MyInput>
          <MyButton variant="no-fill" className={classes.button} onClick={addEmail}>SUBSCRIBE</MyButton>
        </div>
      </div>
      </div>
      <div className={classes.rightsField}>
      <p className={classes.rightsText}>2023 furnino. All rights reverved</p>
      </div>
    </div>
  )
}
