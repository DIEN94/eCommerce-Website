import React, { useState } from "react";
import { createNavButtonConfig, imgConfig } from './config';
import { MyButton } from "components/Button/MyButton";
import { Link } from "react-router-dom";
import { ModalWindowHeader } from "./components/ModalWindowHeader";
import classes from "./Header.module.scss";



export const Header = () => {
  const [open, setOpen] = useState(false);

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
    console.log("goToCart");
  };

  const openMenu = (event:any) => {
    event.stopPropagation()
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
// LOGO
    <div className={classes.header}>
      <Link to="/" className={classes.logoBox}>
      <img src={imgConfig.logo} alt="logo"/>
            <span>Furniro</span>
      </Link>

{/* RouteButtons */}
    <nav className={classes.routeButtonsBox}>
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

{/* HeaderButtons */}
        <div className={classes.headerButtonsBox}>
          <MyButton             
            variant="no-fill"
            className={classes.headerButtons}
            onClick={goToAccount}>
              <img src={imgConfig.iconAccount} alt="iconAccount"/>
          </MyButton>
          <MyButton             
            variant="no-fill"
            className={classes.headerButtons}
            onClick={goToSearch}>
              <img src={imgConfig.iconSearch} alt="iconSearch"/>
          </MyButton>
          <MyButton             
            variant="no-fill"
            className={classes.headerButtons}
            onClick={goToLike}>
              <img src={imgConfig.iconLike} alt="iconLike"/>
          </MyButton>
          <MyButton             
            variant="no-fill"
            className={classes.headerButtons}
            onClick={goToCart}>
              <img src={imgConfig.iconCart} alt="iconCart"/>
          </MyButton>
          </div>

{/* BurgerButton */}
          <MyButton             
            variant="no-fill"
            className={classes.burgerButton}
            onClick={openMenu}>
              <img src={imgConfig.imgHamburgerButton} alt="imgHamburgerButton"/>
          </MyButton>

{/* ModalWindow */}
          <ModalWindowHeader isOpen = {open} onClose={closeMenu}/>
    </div>
  )
}

