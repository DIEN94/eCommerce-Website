import React, { FC } from "react";
import { MyButton } from "components";
import { useForm } from "react-hook-form";
import { FormField } from "components/FormField/FormField";
import { loginFormFieldsConfig } from "./config";
import { postRequest } from "utils/postRequest";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import {
  authFetching,
  authFetchingError,
  authFetchingSuccess,
} from "store/reducers/auth";
import classes from "./Login.module.scss";

type RequestAuthorization = {
  token: string;
};

export const Login: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: "onBlur" });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.auth);
  const urlLogin = "http://localhost:8000/account/login";

  const onSubmit = async (dataSubmit: any) => {
    const config = {
      data: dataSubmit,
    };
    try {
      dispatch(authFetching());
      const tokenUserAuthorization = await postRequest<RequestAuthorization>(
        urlLogin,
        config
      );

      if (tokenUserAuthorization.data) {
        localStorage.setItem(
          "TokenUserAuthorization",
          tokenUserAuthorization.data.token
        );
        dispatch(authFetchingSuccess(true));
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
    <div className={classes.login}>
      <div className={classes.loginContainer}>
        <p className={classes.loginContainerText}>Sign in</p>
        <form onSubmit={handleSubmit(onSubmit)}>
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
                className={classes.button}
                variant="fill-orange"
                type="button"
              >
                Create account
              </MyButton>
            </Link>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
          </div>
        </form>
      </div>
    </div>
  );
};
