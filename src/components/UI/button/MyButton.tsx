import React, { FC, ReactNode } from 'react'
import classes from "./MyButton.module.scss"

type DefaultButtonPropsType = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
interface IButton extends DefaultButtonPropsType {
  children: ReactNode
}

export const MyButton: FC<IButton> = ({ children, className, ...props }) => {
  const rootClasses = [classes.myButton, className]

  return (
    <button {...props} className={rootClasses.join(' ')}>
      {children}
    </button>
  )
}
