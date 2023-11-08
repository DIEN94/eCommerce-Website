import React, { FC, useState } from 'react'
import { MyButton, MyInput } from 'components';
import { useForm } from 'react-hook-form'
import { ModalWindowRegister } from './components/ModalWindowRegister/ModalWindowRegister';
import { FormField } from './components/FormField/FormField';
import { loginFormFieldsConfig } from './config';
import { postRequest } from 'utils/postRequest';
import classes from "./Login.module.scss"


type UserAuthorization = {
  email: string;
  password: string;
}

export const Login: FC = () => {

  const [open, setOpen] = useState(false);

  const openMenu = (event:any) => {
    event.stopPropagation()
    setOpen(true);
};

  const closeMenu = () => {
    setOpen(false);
  };

  const {
    register,
    formState: {
      errors,
      isValid
    },
    handleSubmit,
    reset,
  } = useForm(
    {mode: "onBlur"}
  );

  const urlLogin = "http://localhost:8000/account/login";

  const onSubmit = async (dataSubmit:any) => {
    const config = {
      data: dataSubmit,
    };
    try {
      await postRequest<UserAuthorization>(urlLogin, config);
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
                <MyButton 
                className={classes.button}
                variant='fill-orange'
                type="button"
                onClick={openMenu}
                >
                    Create new account
                </MyButton>
            </div>
          </form>
          <ModalWindowRegister isOpen = {open} onClose={closeMenu}/>
        </div>
    </div>
  )
}