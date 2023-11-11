import React, { FC, useState } from 'react'
import classes from "./LoginForm.module.scss"
import { useAppSelector } from 'hooks/redux';
import { MyInput } from 'components/Input/MyInput';
import { MyButton } from 'components/Button/MyButton';


export const LoginForm: FC = () => {
    // const {error, isLoading} = useAppSelector(state => state.auth)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const {login} = useActions()
      
    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };
      
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };
      
    const submit = () => {
        // login(username, password)
    }

  return (
    <div className={classes.formContainer}>
        <form className={classes.loginForm} onSubmit={submit}>
            <div>
                <label htmlFor="username">Email or phone number</label>
                <MyInput
                className={classes.input}
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                required
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <MyInput
                className={classes.input}
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
                />
            </div>
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
                >
                    Create new account
                </MyButton>
            </div>
        </form> 

    </div>  
  )
}
