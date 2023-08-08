import React, { FC } from 'react'
import classes from './MyInput.module.scss';

interface IInput extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> { }

export const MyInput: FC<IInput> = ({ className, placeholder, ...props }) => {

  const rootClasses = [classes.myInput, className]

  return (
    <input {...props} placeholder={placeholder} className={rootClasses.join(' ')}/>
  )
}