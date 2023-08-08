import React, { FC, ReactNode } from 'react'
import classes from "./MyButton.module.scss"

type DefaultButtonPropsType = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
interface IButton extends DefaultButtonPropsType {
  children: ReactNode
  variant:"fill-orange"|"fill-white"|"fill-beige"|"no-fill"
}

export const MyButton: FC<IButton> = ({ children, variant, className, ...props }) => {
  const rootClasses = [classes[variant], className]

  return (
    <button {...props} className={rootClasses.join(' ')}>
      {children}
    </button>
  )
}