import React, { FC } from "react";
import { IModal, MyModal } from "components/Modal/MyModal";
import { MyButton } from "components";
import { useForm } from "react-hook-form";
import { postRequest } from "utils/postRequest";
import { loginFormFieldsConfig } from "pages/Login/config";
import { FormField } from "components/FormField/FormField";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import {
  authFetching,
  authFetchingError,
  authFetchingSuccess,
} from "store/reducers/auth";
import { Link, useNavigate } from "react-router-dom";
import exit from "assets/page-Login/components/ModalWindowRegister/exit.webp";
import classes from "./ModalWindowLogin.module.scss";

export interface IModalWindowLoginProps
  extends Pick<IModal, "onClose" | "isOpen"> {}

type UserAuthorization = {
  email: string;
  password: string;
};

export const ModalWindowLogin: FC<IModalWindowLoginProps> = ({
  isOpen,
  onClose,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: "onBlur" });

  const closeMenu = () => {
    onClose();
  };
  const navigate = useNavigate();
  const urlLogin = "http://localhost:8000/account/login";

  const dispatch = useAppDispatch();
  const { isAuth, isLoading, error } = useAppSelector((state) => state.auth);

  const onSubmit = async (dataSubmit: any) => {
    const config = {
      data: dataSubmit,
    };
    try {
      dispatch(authFetching());
      const tokenUserAuthorization = await postRequest<UserAuthorization>(
        urlLogin,
        config
      );
      console.log(tokenUserAuthorization);

      if (tokenUserAuthorization) {
        localStorage.setItem("TokenUserAuthorization", tokenUserAuthorization);
        dispatch(authFetchingSuccess(true));
        closeMenu();
        navigate("/cabinet");
      } else {
        dispatch(authFetchingError("Error 404"));
      }

      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MyModal
      isOpen={isOpen}
      onClose={closeMenu}
      className={classes.modalWindowLogin}
    >
      <p className={classes.loginContainerText}>Sign in</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={classes.loginContainerForm}
      >
        {loginFormFieldsConfig.map((field, index) => (
          <FormField
            key={index}
            label={field.label}
            name={field.name}
            register={register}
            errors={errors}
            validationRules={field.validationRules}
            type={field.type || "text"}
          />
        ))}
        <div className={classes.buttonBox}>
          <MyButton
            className={classes.button}
            variant="fill-orange"
            type="submit"
          >
            Log In
          </MyButton>
          <Link to="/registration">
            <MyButton
              variant="fill-orange"
              className={classes.button}
              onClick={closeMenu}
            >
              Create account
            </MyButton>
          </Link>
          {isLoading && <h1>Loading...</h1>}
          {error && <h1>{error}</h1>}
        </div>
      </form>
      <MyButton
        className={classes.buttonExit}
        variant="fill-white"
        type="button"
        onClick={closeMenu}
      >
        <img src={exit} alt="exitImg" />
      </MyButton>
    </MyModal>
  );
};
