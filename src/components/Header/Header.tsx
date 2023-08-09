import React from "react";
import logo from '../../assets/header/logo.webp';
import iconAccount from '../../assets/header/iconAccount.webp';
import iconSearch from '../../assets/header/iconSearch.webp';
import iconLike from '../../assets/header/iconLike.webp';
import iconCart from '../../assets/header/iconCart.webp';
import { MyButton } from "components/Button/MyButton";
import classes from "./Header.module.scss"


export const Header = () => {

  const goToHome = () => {
    console.log("goToHome");
  };

  const goToShop = () => {
    console.log("goToShop");
  };

  const goToAbout = () => {
    console.log("goToAbout");
  };

  const goToContact = () => {
    console.log("goToContact");
  };

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

 
  return (
    // LOGO
    <div className={classes.header}>
        <div className={classes.logoBox}>
            <img src={logo} />
            <span>Furniro</span>
        </div>

    {/* RouteButtonsBox */}
        <div className={classes.routeButtonsBox}>
          <MyButton
            variant="no-fill"
            className={classes.routeButtons}
            onClick={goToHome}>
            Home
          </MyButton>
          <MyButton
            variant="no-fill"
            className={classes.routeButtons}
            onClick={goToShop}>
            Shop
          </MyButton>
          <MyButton
            variant="no-fill"
            className={classes.routeButtons}
            onClick={goToAbout}>
            About
          </MyButton>
          <MyButton
            variant="no-fill"
            className={classes.routeButtons}
            onClick={goToContact}>
            Contact
          </MyButton>
        </div>

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
