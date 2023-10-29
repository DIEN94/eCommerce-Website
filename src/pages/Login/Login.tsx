import { MyInput } from 'components';
import React, { FC } from 'react'
import {useForm} from 'react-hook-form'
import classes from "./Login.module.scss"
import { LoginForm } from 'components/LoginForm/LoginForm'

export const Login: FC = () => {

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

  const onSubmit = (data:any) => {
    alert(JSON.stringify(data))
    reset();
  }


  return (
    <div className={classes.login}>
        <div className={classes.loginContainer}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              <p>Email:</p>
                <input {...register('firstName', {
                  required: "Поле обязательно к заполнению",
                  minLength: {
                    value: 5,
                    message: 'Минимум 5 символов'
                  }
                })}/>
            </label>
            <div style={{height:40}}>
              {errors?.firstName && <p>{String(errors?.firstName?.message) || "Error!"}</p>}
            </div>
            <label>
            <p>Password:</p>
                <MyInput {...register('lastName', {
                  required: "Поле обязательно к заполнению",
                  minLength: {
                    value: 5,
                    message: 'Минимум 5 символов'
                  }
                })}/>
            </label>
            <div style={{height:20}}>
              {errors?.firstName && <p>{String(errors?.firstName?.message) || "Error!"}</p>}
            </div>
            <input type="submit" disabled={!isValid}/>
          </form>
        </div>
    </div>
  )
}
