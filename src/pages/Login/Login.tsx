import React, { FC } from 'react'
import { MyButton } from 'components';
import { useForm } from 'react-hook-form'
import { FormField } from 'components/FormField/FormField';
import { loginFormFieldsConfig } from './config';
import { postRequest } from 'utils/postRequest';
import { Link } from 'react-router-dom';
import { useAppDispatch } from 'hooks/redux';
import { setAuth } from 'store/reducers/auth';
import classes from "./Login.module.scss"



type UserAuthorization = {
  email: string;
  password: string;
}

export const Login: FC = () => {

  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
    reset,
  } = useForm(
    {mode: "onBlur"}
  );
  const dispatch = useAppDispatch()
  const urlLogin = "http://localhost:8000/account/login";

  const onSubmit = async (dataSubmit:any) => {
    const config = {
      data: dataSubmit,
    };
    try {
      const tokenUserAuthorization = await postRequest<UserAuthorization>(urlLogin, config);
      
      if (tokenUserAuthorization) {
        localStorage.setItem('TokenUserAuthorization', tokenUserAuthorization);
        dispatch(setAuth(true))
      } else {
        console.error('Error of request');
      }
      
      reset(); 
    } catch (error) {
      console.error(error);
    }
  }

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
              type={field.type || 'text'}
            />
          ))}
            <div className={classes.buttonBox}>
              <MyButton 
              className={classes.button}
              variant='fill-orange'
              type="submit"
              >
                Log In
              </MyButton>
              <Link to="/registration">
                <MyButton 
                className={classes.button}            
                variant='fill-orange'
                type="button">
                  Create account
                </MyButton>
              </Link>
            </div>
          </form>
        </div>
    </div>
  )
}