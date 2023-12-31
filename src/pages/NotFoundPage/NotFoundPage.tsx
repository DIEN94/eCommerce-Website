import React, {FC, useState} from 'react'
import classes from "./NotFoundPage.module.scss"
import { Link } from 'react-router-dom'
import { MyButton } from 'components/Button/MyButton'

export const NotFoundPage: FC = () => {

  return (
    <div className={classes.notFoundPage}>
      <h1>Page Not Found</h1>
      <p>The requested page could not be found.</p>
      <Link 
      to="/" 
      className={classes.link}>
            <MyButton
              variant="no-fill"
              className={classes.button}>
              Return to Home Page
            </MyButton>
      </Link>
    </div>
  )
}
