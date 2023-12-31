import React, { FC } from "react";
import { createNavButtonConfig, imgConfig } from "components/Header/config";
import { IModal, MyModal } from "components/Modal/MyModal";
import { Link } from "react-router-dom";
import { MyButton } from "components/Button/MyButton";
import classes from "./ModalWindowHeader.module.scss";

export interface IModalWindowProps extends Pick<IModal, "onClose" | "isOpen"> {}

export const ModalWindowHeader: FC<IModalWindowProps> = ({
  isOpen,
  onClose,
}) => {
  const closeMenu = () => {
    onClose();
  };

  return (
    <MyModal
      isOpen={isOpen}
      onClose={closeMenu}
      closeDelay={1000}
      className={classes.modalMobile}
      animateClasses={{ show: classes.show, hide: classes.hide }}
    >
      <div className={classes.container}>
        {/* LOGO */}
        <div className={classes.logoBoxModal}>
          <img src={imgConfig.logo} alt="logo" />
          <span>Furniro</span>
        </div>

        {/* CloseButton */}
        <MyButton
          variant="no-fill"
          className={classes.closeButtonModal}
          onClick={closeMenu}
        >
          <img src={imgConfig.buttonClose} alt="buttonClose" />
        </MyButton>
      </div>

      {/* RouteButtons */}
      <nav className={classes.routeButtonsBoxModal}>
        {createNavButtonConfig.map(({ path, text }, index) => {
          return (
            <Link to={path} key={index}>
              <MyButton
                variant="no-fill"
                className={classes.routeButtonsModal}
                onClick={closeMenu}
              >
                {text}
              </MyButton>
            </Link>
          );
        })}
      </nav>
    </MyModal>
  );
};
