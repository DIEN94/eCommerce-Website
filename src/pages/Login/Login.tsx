import React, { FC } from 'react'
import classes from "./Login.module.scss"
import { LoginForm } from 'components/LoginForm/LoginForm'

export const Login: FC = () => {
  return (
    <div className={classes.login}>
        <LoginForm/>
    </div>
  )
}
