import React, {FC, useState} from 'react'
import classes from "./NotFoundPage.module.scss"
import { Link } from 'react-router-dom'
import { MyButton } from 'components/Button/MyButton'

export const NotFoundPage: FC = () => {

    const [isHighlighted, setIsHighlighted] = useState(false);

    const handleMouseEnter = () => {
        setIsHighlighted(true);
    };
  
    const handleMouseLeave = () => {
        setIsHighlighted(false);
    };

  return (
    <div className={classes.notFoundPage}>
      <h1>Page Not Found</h1>
      <p>The requested page could not be found.</p>
      <Link 
      to="/" 
      className={`${classes.link} ${isHighlighted ? classes.show : ""}`}
          onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
            <MyButton
              variant="no-fill"
              className={`${classes.button} ${isHighlighted ? classes.show : ""}`}>
              Return to Home Page
            </MyButton>
      </Link>
    </div>
  )
}
