import React from "react";
import logo from '../../assets/header/logo.webp';
import iconAccount from '../../assets/header/iconAccount.webp';
import iconSearch from '../../assets/header/iconSearch.webp';
import iconLike from '../../assets/header/iconLike.webp';
import iconCart from '../../assets/header/iconCart.webp';
import { MyButton } from "components/Button/MyButton";
import { createNavButtonConfig } from './config';
import classes from "./Header.module.scss"
import { Link } from "react-router-dom";


export const Header = () => {

  const goToAccount = () => {
    console.log("goToAccount");
  };
 
  const goToSearch = () => {
    console.log("goToSearch");
  };

  const goToLike = () => {
    console.log("goToLike");
  };

  const goToCart = () => {
    console.log("openModal");
  };

 
  return (
    // LOGO
    <div className={classes.header}>
        <div className={classes.logoBox}>
            <img src={logo} />
            <span>Furniro</span>
        </div>

    {/* RouteButtonsBox */}

    <nav className={classes.routeButtonsBox}>
      {createNavButtonConfig.map(({path, text})=> {
        return (
          <Link to={path}>
            <MyButton
              variant="no-fill"
              className={classes.routeButtons}>
              {text}
            </MyButton>
          </Link>
        );
      })}
    </nav>

    {/* HeaderButtonsBox */}
        <div className={classes.headerButtonsBox}>
          <MyButton             
            variant="no-fill"
            className={classes.headerButtons}
            onClick={goToAccount}>
              <img src={iconAccount}/>
          </MyButton>
          <MyButton             
            variant="no-fill"
            className={classes.headerButtons}
            onClick={goToSearch}>
              <img src={iconSearch}/>
          </MyButton>
          <MyButton             
            variant="no-fill"
            className={classes.headerButtons}
            onClick={goToLike}>
              <img src={iconLike}/>
          </MyButton>
          <MyButton             
            variant="no-fill"
            className={classes.headerButtons}
            onClick={goToCart}>
              <img src={iconCart}/>
          </MyButton>
          </div>
    </div>
  )
}