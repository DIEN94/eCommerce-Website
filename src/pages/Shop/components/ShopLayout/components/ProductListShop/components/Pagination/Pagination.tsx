import React, { useState } from 'react'
import { MyButton } from 'components'
import classes from "./Pagination.module.scss"

interface IPaginationProps {
    cardArray: number[];
    page: number;
    onChangePage: (page: number) => void;
  }

export const Pagination: React.FC<IPaginationProps> = ({cardArray, page, onChangePage}) => {

  return (
    <div className={classes.paginationContainer}>
    {cardArray.map(number => (
      <MyButton 
      onClick={()=>onChangePage(number)}
      className={page === number ? classes.buttonCurrent : classes.button} 
      variant="fill-beige" 
      key={number}
      >
        {number}
      </MyButton>)
    )}
    <MyButton 
    onClick={()=>{cardArray.length !== page ? onChangePage(page+1): onChangePage(1)}}
    className={classes.buttonNext} 
    variant="fill-beige" 
    >
    Next
  </MyButton>
  </div>
  )
}
