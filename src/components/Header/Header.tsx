import React, { useState } from "react";
import { createNavButtonConfig, imgConfig } from './config';
import { MyButton } from "components/Button/MyButton";
import { Link } from "react-router-dom";
import { ModalWindowLogin } from "./components/ModalWindowLogin/ModalWindowLogin";
import { ModalWindowHeader } from "./components/ModalWindowHeader/ModalWindowHeader";
import { useNavigate  } from "react-router-dom";
import { useAppSelector } from "hooks/redux";
import classes from "./Header.module.scss";



export const Header = () => {
  const [openModalWindowRoute, setOpenModalWindowRoute] = useState(false);
  const [openModalWindowLogin, setOpenModalWindowLogin] = useState(false);
  const navigate = useNavigate();
  const {isAuth} = useAppSelector(state => state.auth)


  const closeMenuLogin = () => {
    setOpenModalWindowLogin(false);
  };

  const openMenuRoute = (event:any) => {
    event.stopPropagation()
    setOpenModalWindowRoute(true);
  };

  const closeMenuRoute = () => {
    setOpenModalWindowRoute(false);
  };

  const goToAccount = (event:any) => {
    isAuth
    ?
    navigate('/cabinet')
    :
    event.stopPropagation()
    setOpenModalWindowLogin(true);
  };
 
  const goToSearch = () => {
    navigate('/search');
  };

  const goToLike = (event:any) => {
    isAuth
    ?
    navigate('/like')
    :
    event.stopPropagation()
    setOpenModalWindowLogin(true);
  };

  const goToCart = () => {
    navigate('/cart');
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
            onClick={openMenuRoute}>
              <img src={imgConfig.imgHamburgerButton} alt="imgHamburgerButton"/>
          </MyButton>

{/* ModalWindowRoute */}
          <ModalWindowHeader isOpen = {openModalWindowRoute} onClose={closeMenuRoute}/>
{/* ModalWindowLogin */}
          <ModalWindowLogin isOpen = {openModalWindowLogin} onClose={closeMenuLogin}/>
    </div>
  )
}

