import { useState, useEffect, FC } from "react";
import classes from "./CartTotalWindowModal.module.scss";

type cartListType = {
  src: string;
  ProductName: string;
  ProductPrice: string;
  id: number;
  quantity?: number;
};

interface ICartTotalsWindowModalProps {
  cartList: cartListType[];
}

export const CartTotalsWindowModal: FC<ICartTotalsWindowModalProps> = ({
  cartList,
}) => {
  const [totalSum, setTotalSum] = useState<string>("");

  useEffect(() => {
    const sumProductPrices = (cartList: cartListType[]) => {
      const newTotalSum = cartList.reduce((accumulator, product) => {
        const priceString = product.ProductPrice.replace("Rp ", "");
        const priceNumber = parseFloat(priceString.replace(/\./g, ""));
        const quantity = product.quantity ? product.quantity : 1;
        return accumulator + quantity * priceNumber;
      }, 0);
      return newTotalSum.toLocaleString("en-US");
    };

    const newTotalSumPrice = sumProductPrices(cartList);
    setTotalSum(newTotalSumPrice);
  }, [cartList]);

  return (
    <div className={classes.cartTotalsContainer}>
      <p className={classes.totalText}>Total</p>
      <p className={classes.priceText}>{`Rp ${totalSum}`}.00</p>
    </div>
  );
};
