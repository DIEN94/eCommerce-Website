import { FC, useMemo } from "react";
import { currency } from "consts/consts";
import classes from "./CartTotalWindowModal.module.scss";

type cartListType = {
  src: string[];
  name: string;
  price: number;
  id: string;
  quantity: number;
};

interface ICartTotalsWindowModalProps {
  cartList: cartListType[];
}

export const CartTotalsWindowModal: FC<ICartTotalsWindowModalProps> = ({
  cartList,
}) => {
  let totalSum = useMemo(() => {
    const sumProductPrices = (cartList: cartListType[]) => {
      const newTotalSum = cartList.reduce((accumulator, product) => {
        return accumulator + product.quantity * product.price;
      }, 0);
      localStorage.setItem("totalSum", `${newTotalSum}`);
      return newTotalSum;
    };

    const newTotalSumPrice = sumProductPrices(cartList);
    return newTotalSumPrice;
  }, [cartList]);

  return (
    <div className={classes.cartTotalsContainer}>
      <p className={classes.totalText}>Total</p>
      <p className={classes.priceText}>
        {totalSum ? `${totalSum.toFixed(2)} ${currency}` : "-"}
      </p>
    </div>
  );
};
