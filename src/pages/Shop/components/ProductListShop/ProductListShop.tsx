import React, { useMemo, useState } from 'react'
import { CardOfProduct, CardOfProductWide, MyButton } from 'components'
import { postsListShop } from './config'
import classes from "./ProductListShop.module.scss"
import clsx from 'clsx';


interface IProductListShopProps {
  limitCardNumber: number;
  typeCard: string;
}

export const ProductListShop: React.FC<IProductListShopProps> = ({limitCardNumber, typeCard}) => {

  const [totalCard, setTotalCard] = useState(0);
  const [cardArray, setCardArray] = useState<number[]>([]);
  const [page, setPage] = useState(1);

  const totalCount = postsListShop.length
  console.log(totalCount);
  

  const getPageCount = (totalCount: number, limitCardNumber: number) => {
    return Math.ceil (totalCount/limitCardNumber)
  }
 
  useMemo (  () => {
    setTotalCard(getPageCount(totalCount, limitCardNumber));
    let newCardArray = []
    for (let i = 0; i < totalCard; i++) {
      newCardArray.push(i+1)
    }
  
    console.log(newCardArray);
    setCardArray (newCardArray)
  }, [totalCard, limitCardNumber])

  // const onChangePage

  const cardsToShow = postsListShop.slice(
    (page - 1) * limitCardNumber,
    page * limitCardNumber
  );

  return (
    <div className={classes.productListShop}>
    <div className={typeCard === "Card" ? classes.productCardBox : classes.productCardWideBox}>
    {cardsToShow.slice(-limitCardNumber).map((post, index) => (
  <div className={typeCard === "Card" ? classes.cardContainer : classes.cardWideContainer} key={index}>
    {typeCard === "Card" ? (
      <CardOfProduct
        src={post.src}
        label={post.label}
        ProductName={post.ProductName}
        SortDescription={post.SortDescription}
        FixPrice={post.FixPrice}
        OriginalPrice={post.OriginalPrice}
      />
    ) : (
      <CardOfProductWide
        src={post.src}
        label={post.label}
        ProductName={post.ProductName}
        SortDescription={post.SortDescription}
        FixPrice={post.FixPrice}
        OriginalPrice={post.OriginalPrice}
      />
    )}
  </div>
))}
    </div>
    <div className={classes.buttonContainer}>
      {cardArray.map(number => (
        <MyButton 
        onClick={()=>setPage(number)}
        className={page === number ? classes.buttonCurrent : classes.button} 
        variant="fill-beige" 
        key={number}
        >
          {number}
        </MyButton>)
      )}
      <MyButton 
      onClick={()=>{cardArray.length !== page ? setPage(page+1): setPage(1)}}
      className={classes.buttonNext} 
      variant="fill-beige" 
      >
      Next
    </MyButton>
    </div>
  </div>
  )
}
